window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    // Tunggu startup selesai
    setTimeout(() => {

        preloader.classList.add("hide");

    }, 2800);

});

// ================= NAVBAR ACTIVE STATE =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

function updateActiveNav() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 250) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


// ================= SCROLL REVEAL =================

const revealSections = document.querySelectorAll("section");

revealSections.forEach(section => {
    section.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    revealObserver.observe(section);
});

// ================= CARD STAGGER =================

const animatedCards = document.querySelectorAll(
    ".team-card, .sponsor-card"
);

const cardObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
        }

    });

}, {
    threshold: 0.15
});

animatedCards.forEach(card => {
    cardObserver.observe(card);
});


// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});

const mobileNavLinks = document.querySelectorAll(".navbar nav a");

mobileNavLinks.forEach(link => {

    link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
    });

});