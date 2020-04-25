export function addTableRowDWI(data){
  var row = document.createElement("tr");
  row.setAttribute("class", "table-row");

  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  var cell5 = row.insertCell(5);
  var cell6 = row.insertCell(6);
  var cell7 = row.insertCell(7);
  var cell8 = row.insertCell(8);

  cell0.setAttribute('class', 'table-cell col0');
  cell1.setAttribute('class', 'table-cell col1');
  cell2.setAttribute('class', 'table-cell col2');
  cell3.setAttribute('class', 'table-cell col3');
  cell4.setAttribute('class', 'table-cell col4');
  cell5.setAttribute('class', 'table-cell col5');
  cell6.setAttribute('class', 'table-cell col6');
  cell7.setAttribute('class', 'table-cell col7');
  cell8.setAttribute('class', 'table-cell');

  cell0.innerHTML = data.weekday;
  cell1.innerHTML = data.date;
  cell2.innerHTML = data.rxnum;
  cell3.innerHTML = data.witness;
  cell4.innerHTML = data.takehome;
  cell5.innerHTML = data.total;
  cell6.innerHTML = ''; // RPh
  cell7.innerHTML = ''; // Patient
  cell8.innerHTML = ''; // Notes

  return row;
}

export function addTableRowCarry(data){
  var row = document.createElement("tr");
  row.setAttribute("class", "table-row");

  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);

  cell0.setAttribute('class', 'table-cell-carry');
  cell0.setAttribute('colspan', 9);

  cell1.setAttribute('class', 'table-cell');

  cell0.innerHTML = data.date;
  cell1.innerHTML = "CARRY DOSE";

  return row;
}

export function addTableRowMessage(row, message){
  var cell = row.insertCell(0);
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
  for(var i=0; i<location.length; ++i){
    table.deleteRow(location[i]);
    var row = table.insertRow(location[i]);
    var rowcell = row.insertCell(0);
    rowcell.setAttribute('class', 'table-endrow-cell');
    rowcell.setAttribute('colspan', '9');
    rowcell.innerHTML = message;
  }
}
