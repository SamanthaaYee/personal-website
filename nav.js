console.log("nav.js loaded");

// toggles the nav bar visibility on mobile
function toggleNav(toggleButton) {
    const navLinks = document.getElementById("nav-links");

    toggleButton.classList.toggle("change");
    navLinks.classList.toggle("open");
}

// closes the nav bar when any non-home link is clicked
function closeNavBar() {
    const toggleButton = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    const links = document.querySelectorAll(".non-home");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            toggleButton.classList.remove("change");
        });
    });
}

// run this when the page loads
document.addEventListener("DOMContentLoaded", () => {
    closeNavBar();
});
