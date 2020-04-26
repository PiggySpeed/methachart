export function addPageFooter(number, max, timestamp){
  let footer = document.createElement('div');
  footer.setAttribute('class', 'footer');

  let date = document.createElement('p');
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
  let pageNumber = document.createElement('p');
  pageNumber.innerHTML = "p. " + number + "/" + max;
  pageNumber.setAttribute('id', 'page-order-label');

  return pageNumber;
}
