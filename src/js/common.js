console.log('js run!')

window.onscroll = function() {
  document.getElementById('head').style.backgroundColor = "#ce4040";
  if (window.pageYOffset === 0) {
    document.getElementById('head').style.backgroundColor = "#ed4949";
  }
}