export default function addPageBreak(){
  /**
   * Adds an empty div that create a page break after it.
   * **/
  let pageBreak = document.createElement('div');
  pageBreak.innerHTML = " "; // the page-break-after property won't work on empty divs
  pageBreak.setAttribute('class', 'page-break');
  return pageBreak;
}
