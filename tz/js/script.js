

let min = 31;
let timer = setInterval(tick,60000)
function tick(){
        document.getElementById('timer').innerHTML = 'Осталось '+(--min)+' минут';
};
document.addEventListener('DOMContentLoaded', function () {
  new SimpleAdaptiveSlider('.slider', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});