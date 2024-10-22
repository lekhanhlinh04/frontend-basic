let lastScrollTop = 0;
const floatingNavbar = document.querySelector('.floating-navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        floatingNavbar.classList.add('show-navbar');
    } else {
        floatingNavbar.classList.remove('show-navbar');
    }
    lastScrollTop = scrollTop;
});


