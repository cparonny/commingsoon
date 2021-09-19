$(document).ready(function(){
  console.log('hi);
const launchDate = new Date('Feb 14, 2022 12:13:20');

let x = setInterval(function() {
  console.log('as');
  const now = new Date();
  let remaining = (launchDate.getTime() - now.getTime()) / 1000;
  let days = Math.floor(remaining/(3600*24));
  let hours = Math.floor(remaining%(3600*24)/ 3600);
  let minutes = Math.floor(remaining%(3600)/60);
  let seconds = Math.floor(remaining%60);
  $('#days').text(getNumber(days, '#days'));
  $('#hours').text(getNumber(hours, '#hours'));
  $('#minutes').text(getNumber(minutes, '#minutes'));
  $('#seconds').text(getNumber(seconds, '#seconds'));

}, 1000)

function getNumber(value, elemenet) {
if (value<10) {
  value = `0${x}`;
}


$(elemenet).prop('Counter',0).animate({
      Counter: value
  }, {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });


}
});
