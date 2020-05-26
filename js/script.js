window.addEventListener(`load`, start);

var inputRange = null;
var inputFrequency = null;
var divPodcasts = null;

function start() {
  inputRange = document.querySelector('#inuptRange');
  inputFrequency = document.querySelector('#inputFrequency');
  divPodcasts = document.querySelector('#divPodcasts');
}
