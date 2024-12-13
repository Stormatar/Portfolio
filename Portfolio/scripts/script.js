/*
Name: Ronan Norbury
Date: 12/3/2024
File: script.js
*/

// Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
    } else {
        navlinks.style.display = "block";
    }
}
