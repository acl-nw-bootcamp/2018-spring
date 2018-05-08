var httpRequest;

function getText() {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = showText;
  httpRequest.open('GET', 'example.txt');
  httpRequest.send();
}

function showText() {
  if (httpRequest.readyState == XMLHttpRequest.DONE) {
    if (httpRequest.status == 200) {
      document.getElementById('ajax-content').innerHTML = httpRequest.responseText;
    }
  }
}

window.addEventListener("load", function() {
  document.getElementById('ajax-button').addEventListener("click", getText);
})
