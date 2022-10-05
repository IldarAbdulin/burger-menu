let burger = document.querySelector('.burger');
let close = document.querySelector('.close');

burger.addEventListener('click' , function() {
    let nav = document.querySelector('.nav');
    nav.classList.add('nav-active');
    let container = document.querySelector('header')
    container.classList.add('bg')
})

close.addEventListener('click' , function() {
    let nav = document.querySelector('.nav');
    nav.classList.remove('nav-active')
    let container = document.querySelector('header')
    container.classList.remove('bg')
})