// Add event listener for document click
document.addEventListener('click', tabClick);

// Define a function that filters the unwanted click events on the document
function tabClick(event) {
  var elem = event.target,
      elemHREF = elem.getAttribute('href'),
      tabs = document.querySelectorAll('.tabs li a'),
      tabContents = document.querySelectorAll('.tab-contents li');

  // If we click an element whos href contains "tab-", proceed
  if (elemHREF != null && elemHREF.indexOf('tab-') != -1) {
    event.preventDefault();
  }
}
