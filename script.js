let hbutton = document.querySelector('.hamb');
let mobileMenu = document.querySelector('#mobile_menu');
let closeMenu = document.querySelector('.topx');

hbutton.addEventListener('click',function(event) {
    mobileMenu.classList.replace('hide_menu','show_menu');
});

closeMenu.addEventListener('click',function(event) {
    mobileMenu.classList.replace('show_menu','hide_menu');
})
