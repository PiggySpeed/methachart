export function buildHeader(data) {
  /**
   * Returns a header section with data passed into it.
   * data (obj): data with fields: name, startdate, enddate, and timeinterval
   * **/
  // Create Header Section
  let header = document.createElement("header");
  let headerleft = document.createElement("div");
  let headerright = document.createElement("div");
  header.appendChild(headerleft);
  header.appendChild(headerright);
  header.setAttribute("class", "header");
  headerleft.setAttribute("class", "header-left");
  headerright.setAttribute("class", "header-right");

  // Add Title
  let headertitle = document.createElement("h1");
  headertitle.setAttribute("id", "header-title");
  headertitle.innerHTML = `${data.selecteddrug.charAt(0).toUpperCase() + data.selecteddrug.slice(1).toLowerCase()} Accountability Log`;

  // Add Delivery Field
  let deliverycontainer = document.createElement("div");
  deliverycontainer.setAttribute("id", "delivery-container");
  let deliverylabel = document.createElement("p");
  deliverylabel.setAttribute("id", "delivery-label");
  deliverylabel.innerHTML = "CODE";
  deliverycontainer.appendChild(deliverylabel);

  // Add Name
  let namelabel = document.createElement("h1");
  namelabel.setAttribute("id", "name-label");
  namelabel.innerHTML = data.name;

  // Add Details
  let detailslabel = document.createElement("p");
  detailslabel.setAttribute("id", "details-label");
  detailslabel.innerHTML = `Start: ${data.startdate}&nbsp;&nbsp;&nbsp;End: ${data.enddate} (${data.timeinterval} days)`;

  // Add Extra Options Area
  let extraoptions = document.createElement("section");
  extraoptions.setAttribute("class", "header-options-container");
  extraoptions.appendChild(createCheckbox("Signed original?"));
  extraoptions.appendChild(detailslabel);

  // Add Label Area
  let rxlabel = document.createElement("aside");
  let rxlabeltext = document.createElement("h2");
  rxlabel.setAttribute("id", "rx-label");
  rxlabeltext.setAttribute("id", "rx-label-text");
  rxlabeltext.innerHTML = "Place Label Here";
  rxlabel.appendChild(rxlabeltext);

  // Add Everything into Header
  headerleft.appendChild(headertitle);
  headerleft.appendChild(deliverycontainer);
  headerleft.appendChild(namelabel);
  headerleft.appendChild(extraoptions);
  headerright.appendChild(rxlabel);

  return header;
}

export function buildHeaderTemp(data) {
  /**
   * Returns a header section with data passed into it.
   * data (obj): data with fields: name, startdate, enddate, and timeinterval
   * **/
  // Create Header Section
  let header = document.createElement("header");
  let headerleft = document.createElement("div");
  let headerright = document.createElement("div");
  header.appendChild(headerleft);
  header.appendChild(headerright);
  header.setAttribute("class", "header");
  headerleft.setAttribute("class", "header-left");
  headerright.setAttribute("class", "header-right");

  // Add Title
  let headertitle = document.createElement("h1");
  headertitle.setAttribute("id", "header-title");
  headertitle.innerHTML = `TEMP LOG: ${data.selecteddrug.charAt(0).toUpperCase() + data.selecteddrug.slice(1).toLowerCase()} **ATTACH TO ORIGINAL**`;

  // Add Name
  let namelabel = document.createElement("h1");
  namelabel.setAttribute("id", "name-label");
  namelabel.innerHTML = data.name;

  // Add Details
  let detailslabel = document.createElement("p");
  detailslabel.setAttribute("id", "details-label");

  // Add Extra Options Area
  let extraoptions = document.createElement("section");
  extraoptions.setAttribute("class", "header-options-container");
  extraoptions.appendChild(detailslabel);

  // Add Label Area
  let rxlabel = document.createElement("aside");
  let rxlabeltext = document.createElement("h2");
  rxlabel.setAttribute("id", "rx-label");
  rxlabeltext.setAttribute("id", "rx-label-text");
  rxlabeltext.innerHTML = "Place Label Here";
  rxlabel.appendChild(rxlabeltext);

  // Add Everything into Header
  headerleft.appendChild(headertitle);
  headerleft.appendChild(namelabel);
  headerleft.appendChild(extraoptions);
  headerright.appendChild(rxlabel);

  return header;
}

export function buildHeaderMAR(data) {
  /**
   * Returns a header section with data passed into it.
   * data (obj): data with fields: name, startdate, enddate, and timeinterval
   * **/
  // Create Header Section
  let header = document.createElement("header");
  let headerleft = document.createElement("div");
  let headerright = document.createElement("div");
  header.appendChild(headerleft);
  header.appendChild(headerright);
  header.setAttribute("class", "header");
  headerleft.setAttribute("class", "header-left");
  headerright.setAttribute("class", "header-right");

  // Add Title
  let headertitle = document.createElement("h1");
  headertitle.setAttribute("id", "header-title");
  headertitle.innerHTML = `MAR: ${data.selecteddrug.toUpperCase()}`;

  // Add Name
  let namelabel = document.createElement("h1");
  namelabel.setAttribute("id", "name-label");
  namelabel.innerHTML = data.name;

  // Add Details
  let detailslabel = document.createElement("p");
  detailslabel.setAttribute("id", "details-label");
  detailslabel.innerHTML = `Start: ${data.startdate}&nbsp;&nbsp;&nbsp;End: ${data.enddate} (${data.timeinterval} days)`;

  // Add Extra Options Area
  let extraoptions = document.createElement("section");
  extraoptions.setAttribute("class", "header-options-container");
  extraoptions.appendChild(detailslabel);

  // Add Label Area
  let rxlabel = document.createElement("aside");
  let rxlabeltext = document.createElement("h2");
  rxlabel.setAttribute("id", "rx-label");
  rxlabeltext.setAttribute("id", "rx-label-text");
  rxlabeltext.innerHTML = "Place Label Here";
  rxlabel.appendChild(rxlabeltext);

  // Add Everything into Header
  headerleft.appendChild(headertitle);
  headerleft.appendChild(namelabel);
  headerleft.appendChild(extraoptions);
  headerright.appendChild(rxlabel);

  return header;
}


function createCheckbox(label) {
  let container = document.createElement("div");
  container.setAttribute("class", "checkbox-container");

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox-box");

  let checkboxlabel = document.createElement("p");
  checkboxlabel.innerHTML = label;
  checkboxlabel.setAttribute("class", "checkbox-label");

  container.appendChild(checkbox);
  container.appendChild(checkboxlabel);

  return container;
}
