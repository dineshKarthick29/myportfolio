

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

ScrollReveal().reveal('.contain', {
    distance:'60px',
    duration:1000,
    origin:'left'
});

ScrollReveal().reveal('.img', {
    distance:'60px',
    duration:1000,
    origin:'right'
});

ScrollReveal().reveal('.trn,.box,.cont', {
    distance:'50px',
    duration:1000,
    interval:200,
    origin:'bottom'
});