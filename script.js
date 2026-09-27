// ======================================
// EDU-SPHERE COLLEGE - JAVASCRIPT
// ======================================


// ======================================
// MOBILE NAVIGATION
// ======================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// ======================================
// CLOSE MOBILE MENU AFTER CLICKING LINK
// ======================================

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });

});


// ======================================
// DARK / LIGHT MODE
// ======================================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("collegeTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeIcon();
}


// Change theme when button is clicked

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
        document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        localStorage.setItem("collegeTheme", "dark");
    } else {
        localStorage.setItem("collegeTheme", "light");
    }

    updateThemeIcon();
});


// ======================================
// UPDATE THEME ICON
// ======================================

function updateThemeIcon() {

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}


// ======================================
// SIMPLE SCROLL REVEAL
// ======================================

const revealElements =
    document.querySelectorAll(
        ".info-card, .course-card, .faculty-card, .event-card"
    );


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ======================================
// CURRENT YEAR IN CONSOLE
// ======================================

console.log(
    `EduSphere College website loaded successfully - ${new Date().getFullYear()}`
);