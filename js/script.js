window.addEventListener('load', start);

var inputRange = null;
var inputFrequency = null;
var divPodcasts = null;

function start() {
  inputRange = document.querySelector('#inputRange');
  inputFrequency = document.querySelector('#onafterprint');
  divPodcasts = document.querySelector('#divPodcasts');

  inputRange.value = '108';
  inputFrequency.value = '100';
  divPodcasts.innerHTML = 'oi';
}
