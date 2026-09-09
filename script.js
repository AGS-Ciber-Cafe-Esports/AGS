// ========================================
// MENÚ MOBILE
// ========================================

const menuButton = document.getElementById("menuButton");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// ========================================
// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
// ========================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ========================================
// EFECTO DE CARDS
// ========================================

const cards = document.querySelectorAll(".experience-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        cards.forEach(otherCard => {

            if (otherCard !== card) {
                otherCard.style.filter = "brightness(0.35)";
            }

        });

        card.style.filter = "brightness(1)";

    });


    card.addEventListener("mouseleave", () => {

        cards.forEach(otherCard => {

            otherCard.style.filter = "";

        });

    });

});


// ========================================
// ANIMACIÓN DE SCROLL PARA NAV
// ========================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});