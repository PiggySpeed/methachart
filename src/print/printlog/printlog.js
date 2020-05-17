import './index.css';
import splitData from '../utils/splitData';
import {
  addTableRowDWI,
  addTableRowCarry,
  addTableRowMessage } from '../utils/addRow';
import { buildHeader } from '../utils/addHeader';
import { addPageFooter } from '../utils/addPageFooter';
import addPageBreak from '../utils/addPageBreak';

export default function printLog(data, headerdata) {
  let tables = document.getElementById("tables");

  // Divide the log data into 28 rows per page
  let batches = splitData(data, 28);

  for (let i = 0; i < batches.length; ++i) {
    // attach header
    tables.appendChild(buildHeader(headerdata));

    // attach table
    let table = buildTable(batches[i]);
    tables.appendChild(table);

    // attach last row
    if (i === batches.length - 1) {
      let lastRow = table.insertRow(table.rows.length);
      lastRow.setAttribute("class", "table-endrow");
      addTableRowMessage(lastRow, `END OF ${headerdata.selecteddrug.toUpperCase()} RX - SEE DOCTOR FOR REFILLS`);
    }

    // add page number
    tables.appendChild(addPageFooter(i+1, batches.length, headerdata.timestamp));

    if(i < batches.length){
      tables.appendChild(addPageBreak());
    }
  }
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

function buildTableBody(data, table){
  // Build table header
  let tableheaders = ["", "Date", "Rx#", "Witness", "Take Home", "Total", "RPh", "Patient Initials", "Notes"];
  let tableheaderrow = table.insertRow(0);
  tableheaderrow.setAttribute('class', 'table-header');
  for(let n = 0; n < tableheaders.length; ++n) {
    let headercell = tableheaderrow.insertCell(n);
    headercell.innerHTML = tableheaders[n];
    headercell.setAttribute('class', 'table-header-cell');
  }

  // Build table body
  for (let i = 0; i < data.length; ++i) {
    if (data[i].carry) {
      table.appendChild(addTableRowCarry(data[i]));
    } else {
      table.appendChild(addTableRowDWI(data[i]));
    }
  }
}

