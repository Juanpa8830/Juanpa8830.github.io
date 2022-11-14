let hbutton = document.querySelector('.hamb');
let mobileMenu = document.querySelector('#mobile_menu');
let closeMenu = document.querySelector('.topx');
let headerMenu = document.querySelector('.menu');
let libutton1 =document.querySelector('.top-a1');
let libutton2 =document.querySelector('.top-a2');
let libutton3 =document.querySelector('.top-a3');
let libutton4 =document.querySelector('.top-a4');

hbutton.addEventListener('click',function(event) {
    mobileMenu.classList.replace('hide_menu','show_menu');
    headerMenu.classList.replace('show_menu','hide_menu');
});

closeMenu.addEventListener('click',function(event) {
    mobileMenu.classList.replace('show_menu','hide_menu');
    headerMenu.classList.replace('hide_menu','show_menu');
})

libutton1.addEventListener('click',function(event) {
    mobileMenu.classList.replace('show_menu','hide_menu');
    headerMenu.classList.replace('hide_menu','show_menu');
})

libutton2.addEventListener('click',function(event) {
    mobileMenu.classList.replace('show_menu','hide_menu');
    headerMenu.classList.replace('hide_menu','show_menu');
})

libutton3.addEventListener('click',function(event) {
    mobileMenu.classList.replace('show_menu','hide_menu');
    headerMenu.classList.replace('hide_menu','show_menu');
})

libutton4.addEventListener('click',function(event) {
    mobileMenu.classList.replace('show_menu','hide_menu');
    headerMenu.classList.replace('hide_menu','show_menu');
})