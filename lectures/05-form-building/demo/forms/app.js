$(document).ready(function() {

  $('#previewButton').on("click", function() {
    var content = $('#content').val();
    var markedContent = marked(content);
    $('#preview').html(markedContent);
    $('#preview pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
    // console.log(markedContent);
  })

  hljs.initHighlightingOnLoad();

})
