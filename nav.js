/* document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navToggle.querySelector('.hamburger').classList.toggle('active');
    });
}); */

function navBar(x) {
    var y = document.getElementById("nav-links");

    x.classList.toggle("change");

    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }