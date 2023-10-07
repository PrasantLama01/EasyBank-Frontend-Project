// menu toggle
const menuToggle = document.querySelector(".menu__toggle");
const nav = document.querySelector(".nav");
const productImg = document.querySelector(".product__img");
const heroImg = document.querySelector(".hero__img");

menuToggle.addEventListener('click', ()=>{
    nav.classList.toggle("nav__open");
    productImg.classList.toggle("product__img__none");
    heroImg.classList.toggle("hero__img__none");
});