$(document).ready(function() {
  $('#main-menu').on('click', 'li', function(event) {
    $('#main-menu li').removeClass('highlight');
    $(this).addClass('highlight');
  })
})
