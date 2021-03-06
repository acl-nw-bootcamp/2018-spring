'use strict';
var projectView = {};

// if h2 target === project title, show that project title
// ?? adding data attribute to each project to compare agains e.target.firstChild
// ?? using hamburg or something similar to show/hide projects nav and display as column on mobile

// this just shows the functionality -- shows all projects on any h2 click, is not specific to particular project
// if (event.target.firstChild === $('#projects'));

projectView.handleClicks = function() {
  $('#project-list').on('click', 'a', function(event) {
    $('.project').hide();
    var projectId = this.dataset.projectId;
    $(`#${projectId}`).fadeIn(500);
  });
};

$(document).ready(function() {
  $('.project').hide();
  projectView.handleClicks();
  renderMenu();
})
