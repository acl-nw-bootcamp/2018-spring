// window.addEventListener('load', function() {
//   $('.middle').addClass('highlight');
// });

$(document).ready(function() {
  var menu = document.getElementById('main-menu');
  menu.addEventListener("click", function(event) {
    console.log("[Menu] Clicked Item: ", event.target);
  })
  var bodyTag = menu.parentNode; // Body tag
  bodyTag.addEventListener("click", function(event) {
    console.log("[Body] Clicked Item: ", event.target);
  })
  var listItems = menu.children;
  for (var index = 0; index < listItems.length; index++) {
    listItems[index].addEventListener("click", function(event) {
      console.log("[Item] Clicked Item: ", event.target);
      // event.stopPropagation();
    })
    // listItems[index].addEventListener("click", handleListClick);
  }
})

function handleListClick(event) {
  var menu = event.target.parentNode;
  var listItems = menu.children;
  for (var index = 0; index < listItems.length; index++) {
    listItems[index].className = "";
  }
  event.target.className = "highlight";
}
