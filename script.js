// Add event listener for document click
document.addEventListener('click', tabClick);

// Define a function that filters the unwanted click events on the document
function tabClick(event) {
  var elem = event.target,
      elemHREF = elem.getAttribute('href'),
      tabs = document.querySelectorAll('.tabs li a'),
      tabContents = document.querySelectorAll('.tab-contents li');
}
