// Toggle mobile sidebar visibility
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

// Show the sidebar menu and overlay
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});

// Close the sidebar menu and overlay when overlay is clicked
overlay.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    overlay.classList.add('hidden');
});
