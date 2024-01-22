const navMenuBtn = document.getElementById('nav-menu-btn');
const navMenu = document.getElementById('nav-menu');
const span1 = document.getElementById('1');
const span2 = document.getElementById('2');
const span3 = document.getElementById('3');

navMenuBtn.addEventListener('change', () => {
    if(navMenuBtn.checked){
        navMenu.style.top = '0%';
        span1.style.rotate = '45deg';
        span1.style.top = '10px';
        span2.style.rotate = '45deg';
        span2.style.top = '2px';
        span3.style.rotate = '-45deg';
        span3.style.bottom = '5px';
    }
    else{
        navMenu.style.top = '-100%';
        span1.style.rotate = '0deg';
        span1.style.top = '0px';
        span2.style.rotate = '0deg';
        span2.style.top = '0px';
        span3.style.rotate = '0deg';
        span3.style.bottom = '0px';
    }
})