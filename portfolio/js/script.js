const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.menu__overlay'),
        closeElem = document.querySelector('.menu__close'),
        closeLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add("active");
});
closeElem.addEventListener('click', () => {
        menu.classList.remove("active");
});
overlay.addEventListener('click', () => {
        menu.classList.remove("active");
});
closeLink.forEach((item)=>{
        item.addEventListener('click',()=>{
            menu.classList.remove('active');
        });
});
const score = document.querySelectorAll('.skills__progress-score'),
        scale = document.querySelectorAll('.skills__progress-scale');

score.forEach((item, i) =>{
        scale[i].style.width = item.innerHTML;
});

