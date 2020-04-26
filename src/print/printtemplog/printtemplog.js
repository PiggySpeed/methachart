// import './index.css';
import { addTableRowDWI, addTableRowMessage } from '../utils/addRow';
import { buildHeaderTemp } from '../utils/addHeader';
import { addPageFooter } from '../utils/addPageFooter';

export default function printTempLog(headerdata) {
  let tables = document.getElementById("tables");

  // build a page of 28 blank rows
  let blankData = new Array(28).fill({});

  // attach header
  tables.appendChild(buildHeaderTemp(headerdata));

  // attach table
  let table = buildTable(blankData);
  tables.appendChild(table);

  // attach last row
  let lastRow = table.insertRow(table.rows.length);
  lastRow.setAttribute("class", "table-endrow");
  addTableRowMessage(lastRow, `END OF ${headerdata.selecteddrug.toUpperCase()} RX - SEE DOCTOR FOR REFILLS`);

  // add page number
  tables.appendChild(addPageFooter(1, 1, headerdata.timestamp));
}

function buildTable(data) {
  /**
   * Adds a table to the tablenode.
   * Returns a reference to the table that was just created.
   *
   * data (arr): an array of data objects
   *
   * **/
  let table = document.createElement("table");
  table.setAttribute('class', 'table-style');
  buildTableBody(data, table);

  return table;
}

function buildTableBody(data, table) {
  // Build table header
  let tableheaders = ["", "Date", "Rx#", "Witness", "Take Home", "Total", "RPh", "Patient Initials", "Notes"];
  let tableheaderrow = table.insertRow(0);
  tableheaderrow.setAttribute('class', 'table-header');
  for(let n = 0; n < tableheaders.length; ++n ) {
    let headercell = tableheaderrow.insertCell(n);
    headercell.innerHTML = tableheaders[n];
    headercell.setAttribute('class', 'table-header-cell');
  }

  // Build table body
  for(let i = 0; i<data.length; ++i){
    table.appendChild(addTableRowDWI(data[i]));
  }
}
