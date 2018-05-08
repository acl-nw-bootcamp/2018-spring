$(document).ready(function() {
  $('#ajax-button').on('click', getText);
})

function getText() {
  $.get('example.txt', function(ajaxResult) {
    $('#ajax-content').html(`JQUERY: ${ajaxResult}`);
  });
}
