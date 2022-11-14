let hbutton = document.querySelector('.hamb');
let mobileMenu = document.querySelector('#mobile_menu');
let closeMenu = document.querySelector('.topx');
let headerMenu = document.querySelector('.menu');

hbutton.addEventListener('click',function(event) {
    mobileMenu.classList.replace('hide_menu','show_menu');
    headerMenu.classList.replace('show_menu','hide_menu');
});

closeMenu.addEventListener('click',function(event) {
    mobileMenu.classList.replace('show_menu','hide_menu');
    headerMenu.classList.replace('hide_menu','show_menu');
})
