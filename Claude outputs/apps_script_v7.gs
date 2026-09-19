function doGet(e) {
  var params = e.parameter;
  if (params.action === 'addEntry') {
    return handleAddEntry(params);
  }
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet;
  var gidParam = params.gid;
  if (gidParam) {
    var targetGid = parseInt(gidParam, 10);
    var sheets = ss.getSheets();
    for (var i = 0; i < sheets.length; i++) {
      if (sheets[i].getSheetId() === targetGid) { sheet = sheets[i]; break; }
    }
  }
  if (!sheet) sheet = ss.getSheetByName("MS PRODUCTION LOG");
  var data = sheet.getDataRange().getDisplayValues();
  var csv = data.map(function(row) {
    return row.map(function(cell) {
      var val = String(cell);
      if (val.indexOf(',') > -1 || val.indexOf('"') > -1 || val.indexOf('\n') > -1) {
        val = '"' + val.replace(/"/g, '""') + '"';
      }
      return val;
    }).join(',');
  }).join('\n');
  return ContentService.createTextOutput(csv).setMimeType(ContentService.MimeType.CSV);
}

function handleAddEntry(params) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    if (params.code !== "2020") {
      return jsonOut({ success: false, error: "Galat code" });
    }
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("MS PRODUCTION LOG");
    var lastCol = sheet.getLastColumn();
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    var qty = parseFloat(params.qty) || 0;
    var wtPc = parseFloat(params.wtPc) || 0;
    var totalWt = qty * wtPc;
    var dateParts = String(params.date || "").split("-");
    var dateObj = "";
    if (dateParts.length === 3) {
      dateObj = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
    }
    var fieldDefs = [
      { keys: ['date'], value: dateObj },
      { keys: ['sqf no', 'sqf'], value: 'SQF-' + (params.sqf || '') },
      { keys: ['batch no', 'batch'], value: params.batch || '' },
      { keys: ['ms no', 'msno'], value: params.msNo || '' },
      { keys: ['qty (nos)', 'qty(nos)', 'qty nos', 'qty'], value: qty },
      { keys: ['wt/pc', 'wt per pc', 'weight/pc', 'wtpc'], value: wtPc },
      { keys: ['total wt', 'total weight'], value: totalWt },
      { keys: ['in time', 'intime'], value: params.inTime || '' },
      { keys: ['out time', 'outtime'], value: params.outTime || '' }
    ];
    var usedFieldIdx = {};
    var newRow = headers.map(function(h) {
      var key = String(h || '').trim().toLowerCase();
      for (var i = 0; i < fieldDefs.length; i++) {
        if (usedFieldIdx[i]) continue;
        var matched = fieldDefs[i].keys.some(function(k) {
          return key.indexOf(k) !== -1 || k.indexOf(key) !== -1;
        });
        if (matched) { usedFieldIdx[i] = true; return fieldDefs[i].value; }
      }
      return "";
    });

    // WAAPAS bottom mein appendRow - naya entry hamesha sabse aakhri filled row ke
    // NEECHE (sequence mein) jayega, jaise 17-18 tarikh ke baad 19 wali entry seedhe
    // 18 ke neeche aayegi. (Pehle top-insert kiya tha, lekin usse date-wise sequence
    // toot rahi thi aur "Unique Batch" jaisi formula columns bhi affect ho sakti thi -
    // isliye ye zyada safe/expected behavior hai.)
    sheet.appendRow(newRow);

    return jsonOut({ success: true, headers: headers, row: newRow });
  } catch (err) {
    return jsonOut({ success: false, error: err.message });
  } finally {
    lock.releaseLock();
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
