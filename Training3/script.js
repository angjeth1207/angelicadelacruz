// Toggle the menu on mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle the mobile menu when clicking the hamburger icon
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Reset the menu to a normal layout when the window is resized to a larger screen
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // When the window is wider than 768px
        navLinks.classList.remove('active'); // Remove the active class to close the menu
    }
});
