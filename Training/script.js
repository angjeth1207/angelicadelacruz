const menuicon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');

menuicon.onclick = () => {
    navlinks.classList.toggle('active');
} 