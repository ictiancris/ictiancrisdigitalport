const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const video = document.querySelector('.project-img iframe');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// play the video when the page loads
window.addEventListener('load', () => {
    video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});

// pause the video when the user scrolls
document.addEventListener('scroll', () => {
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
});
