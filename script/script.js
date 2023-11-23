npm   
//const nav_button = document .querySelector('.nav-link');

const backToTopButton = document.getElementById("backToTopBtn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth" // Add smooth scrolling behavior
    });
});

const clickableDiv = document.getElementById("clickable-div");

clickableDiv.addEventListener("click", function () {
    window.location.href = "https://1984hairsalon.wixsite.com/1984-hairsalon-en";
});

