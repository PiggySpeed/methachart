import './index.css';
import { addTableRowMAR } from '../utils/addRow';
import { buildHeaderMAR } from '../utils/addHeader';
import { addPageFooter } from '../utils/addPageFooter';
import addPageBreak from '../utils/addPageBreak';

export default function printMAR(headerdata, logData) {
  let tables = document.getElementById("tables");

  // split dates into two columns - saturate first column
  while (logData.length > 0) {
    console.log('right', logData.slice());
    let leftColData = logData.splice(0, 28);
    let rightColData = logData.splice(0, 28);
    console.log('right', rightColData);

    // attach header
    tables.appendChild(buildHeaderMAR(headerdata));

    // set MAR layout
    tables.setAttribute("class", "table-mar-container");
    let tableBody = document.createElement("div");
    tableBody.setAttribute("class", "table-mar-body");
    tables.appendChild(tableBody);

    // attach left and right columns
    let leftCol = document.createElement("div");
    let rightCol = document.createElement("div");
    leftCol.setAttribute("class", "table-mar-left-col");
    rightCol.setAttribute("class", "table-mar-right-col");
    tableBody.appendChild(leftCol);
    tableBody.appendChild(rightCol);

    // attach table
    let leftTable = buildMARTable(leftColData);
    let rightTable = buildMARTable(rightColData);
    leftCol.appendChild(leftTable);
    rightCol.appendChild(rightTable);

    // add page number
    tables.appendChild(addPageFooter(1, 1, headerdata.timestamp));

    // add page break
    if (logData.length > 0) {
      tables.appendChild(addPageBreak());
    }
  }
}

function buildMARTable(data) {
  /**
   * Adds a table to the tablenode.
   * Returns a reference to the table that was just created.
   *
   * data (arr): an array of data objects
   *
   * **/
  let table = document.createElement("table");
  table.setAttribute('class', 'table-style');
  buildMARTableBody(data, table);

  return table;
}

function buildMARTableBody(data, table) {
  // Build table header
  let tableheaders = ["", "Date", "RPh", "Notes"];
  let tableheaderrow = table.insertRow(0);
  tableheaderrow.setAttribute('class', 'table-header');
  for(let n = 0; n < tableheaders.length; ++n ) {
    let headercell = tableheaderrow.insertCell(n);
    headercell.innerHTML = tableheaders[n];
    headercell.setAttribute('class', 'table-header-cell');
  }

  // Build table body
  for(let i = 0; i<data.length; ++i){
    table.appendChild(addTableRowMAR(data[i]));
  }
}
