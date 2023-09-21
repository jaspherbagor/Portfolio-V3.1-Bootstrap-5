const header = document.querySelector("header")

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-nav');

const sr = ScrollReveal ({
    distance: '40px',
    duration:1050,
    delay:60,
    reset:true
});

sr.reveal('.hero-text', {origin:'top'});
sr.reveal('.about-text',{origin:'bottom'});
sr.reveal('.about-text h2, .contact-h2, .portfolio-head h2',{origin:'top'});
sr.reveal('.about-img, .left-contact', {origin:'left'});
sr.reveal('.right-contact', {origin:'right'});