const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
menu.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x')
})

const ChangeToggle = document.querySelector('.bx-repost');
const home = document.querySelector('.home');
ChangeToggle.addEventListener('click',()=>{
    home.classList.toggle('active');
})