import splitData from '../utils/splitData';
import { addTableRowDWI, addTableRowCarry, addTableRowMessage } from '../utils/addRow';
import { buildHeader } from '../utils/addHeader';

export default function printLog(data, headerdata) {
  var tables = document.getElementById("tables");

  // Divide the log data into 28 rows per page
  var batches = splitData(data, 28);

  for(var i=0; i<batches.length; ++i){
    tables.appendChild(buildHeader(headerdata));
    var table = buildTable(batches[i]);
    tables.appendChild(table);
    if(i == batches.length-1) {
      var lastRow = table.insertRow(table.rows.length);
      lastRow.setAttribute("class", "table-endrow");
      addTableRowMessage(lastRow, "END OF METHADONE RX - SEE DOCTOR FOR REFILLS");
    }

    // Add Page Number
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
  var table = document.createElement("table");
  table.setAttribute('class', 'table-style');
  buildTableBody(data, table);

  return table;
}

function buildTableBody(data, table){
  // Build table header
  var tableheaders = ["", "Date", "Rx#", "Witness", "Take Home", "Total", "RPh", "Patient Initials", "Notes"];
  var tableheaderrow = table.insertRow(0);
  tableheaderrow.setAttribute('class', 'table-header');
  for(var n = 0; n<tableheaders.length; ++n ) {
    var headercell = tableheaderrow.insertCell(n);
    headercell.innerHTML = tableheaders[n];
    headercell.setAttribute('class', 'table-header-cell');
  }

  // Build table body
  for(var i = 0; i<data.length; ++i){
    table.appendChild(addTableRowDWI(data[i]));
  }
}

function addPageFooter(number, max, timestamp){
  var footer = document.createElement('div');
  footer.setAttribute('class', 'footer');

  var date = document.createElement('p');
  date.innerHTML = `Generated on ${timestamp}`;
  date.setAttribute('id', 'timestamp');

  footer.appendChild(date);
  footer.appendChild(addPageNumber(number, max));

  return footer;
}

function addPageNumber(number, max){
  /**
   * Returns a <p> element with the current page number
   * number (int): page number to display
   * max (int): max number of pages
   * **/
  var pageNumber = document.createElement('p');
  pageNumber.innerHTML = "p. " + number + "/" + max;
  pageNumber.setAttribute('id', 'page-order-label');

  return pageNumber;
}

function addPageBreak(){
  /**
   * Adds an empty div that create a page break after it.
   * **/
  var pageBreak = document.createElement('div');
  pageBreak.innerHTML = " "; // the page-break-after property won't work on empty divs
  pageBreak.setAttribute('class', 'page-break');
  return pageBreak;
}
