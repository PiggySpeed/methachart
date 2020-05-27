export function addTableRowDWI(data){
  const row = document.createElement("tr");
  row.setAttribute("class", "table-row");

  const cell0 = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);
  const cell4 = row.insertCell(4);
  const cell5 = row.insertCell(5);
  const cell6 = row.insertCell(6);
  const cell7 = row.insertCell(7);
  const cell8 = row.insertCell(8);

  cell0.setAttribute('class', 'table-cell col0');
  cell1.setAttribute('class', 'table-cell col1');
  cell2.setAttribute('class', 'table-cell col2');
  cell3.setAttribute('class', 'table-cell col3');
  cell4.setAttribute('class', 'table-cell col4');
  cell5.setAttribute('class', 'table-cell col5');
  cell6.setAttribute('class', 'table-cell col6');
  cell7.setAttribute('class', 'table-cell col7');
  cell8.setAttribute('class', 'table-cell');

  cell0.innerHTML = data.weekday  || '';
  cell1.innerHTML = data.date     || '';
  cell2.innerHTML = data.rxnum    || '';
  cell3.innerHTML = data.witness ? `${data.witness} ${data.unit}` : '';
  cell4.innerHTML = calculateTakehome(data.takehome, data.carrydose, data.unit);
  cell5.innerHTML = data.total ? `${data.total} ${data.unit}` : '';
  cell6.innerHTML = ''; // RPh
  cell7.innerHTML = ''; // Patient
  cell8.innerHTML = ''; // Notes

  return row;
}

export function addTableRowCarry(data){
  const row = document.createElement("tr");
  row.setAttribute("class", "table-row");

  const cell0 = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);
  const cell4 = row.insertCell(4);
  const cell5 = row.insertCell(5);
  const cell6 = row.insertCell(6);
  const cell7 = row.insertCell(7);

  cell0.setAttribute('class', 'table-cell col0');
  cell1.setAttribute('class', 'table-cell col1');
  cell2.setAttribute('class', 'table-cell col2');
  cell3.setAttribute('class', 'table-cell col3 shaded crossed-out');
  cell4.setAttribute('class', 'table-cell col4 shaded crossed-out');
  cell5.setAttribute('class', 'table-cell col5 shaded crossed-out');
  cell6.setAttribute('class', 'table-cell col-carry shaded col-carry-signatures');
  cell6.setAttribute('colspan', '2');
  cell7.setAttribute('class', 'table-cell col-carry-notes');

  cell0.innerHTML = data.weekday  || '';
  cell1.innerHTML = data.date     || '';
  cell2.innerHTML = data.rxnum    || '';
  cell3.innerHTML = ''; // witness
  cell4.innerHTML = ''; // takehome
  cell5.innerHTML = ''; // total
  cell6.innerHTML = '';
  cell7.innerHTML = 'CARRY'; // Notes
  return row;
}

export function addTableRowMAR(data) {
  const row = document.createElement("tr");
  row.setAttribute("class", "table-row");

  const cell0 = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);

  cell0.setAttribute('class', 'table-cell col0');
  cell1.setAttribute('class', 'table-cell col1');
  cell2.setAttribute('class', 'table-cell col2');
  cell3.setAttribute('class', 'table-cell');

  cell0.innerHTML = data.weekday  || '';
  cell1.innerHTML = data.date     || '';
  cell2.innerHTML = ''; // RPh
  cell3.innerHTML = ''; // Notes

  return row;
}

export function addTableRowMessage(row, message){
  const cell = row.insertCell(0);
  cell.setAttribute("colspan", 9);
  cell.setAttribute('class', 'table-endrow-cell');
  cell.innerHTML = message;
}

function insertTableMessage(table, location, message) {
  /**
   * Inserts a message at the specified location(s)
   *
   * table (obj): reference to the table
   * location (arr): an array of locations to insert the message
   * message (str): the message
   *
   * **/
  for (let i = 0; i < location.length; ++i) {
    table.deleteRow(location[i]);
    const row = table.insertRow(location[i]);
    const rowcell = row.insertCell(0);
    rowcell.setAttribute('class', 'table-endrow-cell');
    rowcell.setAttribute('colspan', '9');
    rowcell.innerHTML = message;
  }
}

function calculateTakehome(takehome, carrydose, unit) {
  const cd = carrydose ? carrydose : '';
  const th = takehome ? takehome : '';
  const sep = (carrydose && takehome) ? ' + ' : '';
  const end = (carrydose || takehome) ? ` ${unit}` : '-------';
  return cd + sep + th + end;
}
