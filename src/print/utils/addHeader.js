export function buildHeader(data) {
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
