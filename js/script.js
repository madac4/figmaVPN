$(document).ready(function() {
    $('.burger_menu').click(function() {
        $('.burger_menu, .header_menu').toggleClass('active');
    });
});

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var blockID = $(this).data('scroll');
    var pageOffset = $(blockID).offset().top - 50;

    $("html, body").animate({
        scrollTop: pageOffset
    })
});

window.addEventListener('scroll', () => {
    let topScroll = window.scrollY;
    let burger = document.querySelector('.burger_menu');
    let menu = document.querySelector('.header_menu');
    // console.log(topScroll)
    if (topScroll > 100) {
        burger.classList.remove('active')
        menu.classList.remove('active')
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.started');

    const headerFixed = () => {
        let scrollPos = window.scrollY;
        let headerHeight = header.offsetHeight;
        // If Header is fixed use this
        // (scrollPos >= headerHeight) ? header.classList.add('fixed'): header.classList.remove('fixed');



        if (scrollPos >= headerHeight) {
            header.classList.add('fixed')
            header.classList.add('visible')
            hero.style.marginTop = `${headerHeight+100}px`;

        } else {
            header.classList.remove('fixed')
            header.classList.remove('visible')
            hero.style.marginTop = `0px`;
        }
    };
    headerFixed();
    window.addEventListener('scroll', () => {
        headerFixed();
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const line = document.querySelector('.progress_line_item');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;

        let windowHeight = window.innerHeight;
        let pageHeight = document.documentElement.scrollHeight;

        let progressBar = Math.floor(scrollPos / (pageHeight - windowHeight) * 100);

        line.style.width = `${progressBar}%`;
    });
});

const btns = document.querySelectorAll('.auth_btn');
const modalOverlay = document.querySelector('.modal_overlay');
const modal = document.querySelectorAll('.modal');


btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modal.forEach((el) => {
            el.classList.remove('modal_visible')
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal_visible');
        modalOverlay.classList.add('modal_overlay_visible');
    });
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal_overlay_visible');
    }
});

const scrollBtn = document.querySelector('.scroll_top');


scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
window.addEventListener('scroll', () => {
    let posScroll = window.scrollY;

    console.log(posScroll)

    if (posScroll > 400) {
        scrollBtn.classList.add('active')

    } else {
        scrollBtn.classList.remove('active')

    }
})