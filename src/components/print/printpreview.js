var ipcRenderer = window.require('electron').ipcRenderer;

ipcRenderer.on('asynchronous-reply', function(event, data) {
  buildTables(data.logData, data.header);
});

function splitData(data, chunksize) {
  /**
   * Returns a new array of data split into smaller chunks with a max size of chunksize.
   *
   * data (arr): an array of data to be split up
   * chunksize (int): the maximum size of chunks
   * **/
  var feed = data.slice(); // copy the original array
  var arrLength = Math.ceil(feed.length/chunksize);
  var arr = new Array(arrLength);

  for(var i = 0; i<arrLength-1; ++i){
    arr[i] = feed.splice(0, chunksize)
  }
  arr[arr.length-1] = feed.slice(); // add the remainder
  return arr;
}

function addTableRowDWI(data){
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

function addTableRowCarry(data){
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

function addTableRowMessage(row, message){
  var cell = row.insertCell(0);
  cell.setAttribute("colspan", 9);
  cell.setAttribute('class', 'table-endrow-cell');
  cell.innerHTML = message;
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

function createCheckbox(label) {
  var container = document.createElement("div");
  container.setAttribute("class", "checkbox-container");

  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox-box");

  var checkboxlabel = document.createElement("p");
  checkboxlabel.innerHTML = label;
  checkboxlabel.setAttribute("class", "checkbox-label");

  container.appendChild(checkbox);
  container.appendChild(checkboxlabel);

  return container;
}

function buildHeader(data) {
  /**
   * Returns a header section with data passed into it.
   * data (obj): data with fields: name, startdate, enddate, and timeinterval
   * **/

  // Create Header Section
  var header = document.createElement("header");
  header.setAttribute("id", "header");

  // Add Title
  var headertitle = document.createElement("h1");
  headertitle.setAttribute("id", "header-title");
  headertitle.innerHTML = "Methadone Accountability Log";

  // Add Name
  var namelabel = document.createElement("h1");
  namelabel.setAttribute("id", "name-label");
  namelabel.innerHTML = data.name;

  // Add Details
  var detailslabel = document.createElement("p");
  detailslabel.setAttribute("id", "details-label");
  detailslabel.innerHTML = `Start: ${data.startdate}&nbsp;&nbsp;&nbsp;End: ${data.enddate} (${data.timeinterval} days)`;

  // Add Extra Options Area
  var extraoptions = document.createElement("section");
  extraoptions.setAttribute("class", "header-options-container");

  extraoptions.appendChild(createCheckbox("Signed original?"));
  extraoptions.appendChild(detailslabel);

  // Add Label Area
  var rxlabel = document.createElement("aside");
  var rxlabeltext = document.createElement("h2");
  rxlabel.setAttribute("id", "rx-label");
  rxlabeltext.setAttribute("id", "rx-label-text");
  rxlabeltext.innerHTML = "Place Label Here";
  rxlabel.appendChild(rxlabeltext);

  // Add Everything into Header
  header.appendChild(headertitle);
  header.appendChild(namelabel);
  header.appendChild(extraoptions);
  header.appendChild(rxlabel);

  return header;
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

function buildTables(data, headerdata) {
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
