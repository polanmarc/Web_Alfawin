// Animacion cuando cliques un ancor que vaya bajando poco a poco

document.querySelectorAll('header a').forEach(anchor => {
    if (document.querySelector("#main_page")) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'center'
                });
            }
        });
    }
});


// Animacion entrar pagina que salga el elemento y modificaciones grid 

document.addEventListener('DOMContentLoaded', function () {

    if (document.querySelector("#principio .animated-section-down-up")) {
        setTimeout(function() {
            document.querySelector("#principio .animated-section-down-up").classList.add('visible');
            document.querySelector("header").classList.add('visible');
        }, 500);
    }
    else {
        setTimeout(function() {
            document.querySelector("header").classList.add('visible');
            document.querySelector(".caracteristicas .animated-section-left-right").classList.add('visible');
            document.querySelector(".caracteristicas .animated-section-right-left").classList.add('visible');
            document.querySelector(".caracteristicas .animated-section-down-up").classList.add('visible');
        }, 500);
    }

});

// Animacion mientras haces scroll que vayan apareciendo

document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll(".animation");

    window.addEventListener('scroll', () => {
        handleScroll(animatedElements)
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight) &&
            rect.right <= (window.innerWidth)
        );
    }

    function handleScroll(elements) {
        elements.forEach(element => {
            const animationDirection = element.classList.contains('animated-section-left-right') ? 'left_right' :
                element.classList.contains('animated-section-right-left') ? 'right_left' : 'down_up';

            if (isInViewport(element)) {
                element.classList.add('visible');
            }

        });
    }

   /*function underlinedAncor() {
        const ancorsElements = document.querySelectorAll('header a');
    
        ancorsElements.forEach(ancor => {
            const encorId = ancor.getAttribute('href').substring(1);
            const section = document.getElementById(encorId);
    
            if (section && isInViewport(section)) {
                ancorsElements.forEach(a => a.classList.remove('active'));
                ancor.classList.add('active');
            }
        });
    }*/

});

// Menu aparecer desaparecer

const img = document.querySelector('.menu');
const menu = document.getElementById('menu');
const manuAparecer = document.getElementById('aparecer');
const media = window.matchMedia("(min-width: 1024px)");

function mirarTamaño(media) {
    if (media.matches) {
        manuAparecer.style.display = 'none';
        menu.style.display = 'block';
    }
    else {
        menu.style.display = 'none';
        manuAparecer.style.display = 'none';
    }
}

mirarTamaño(media);

media.addEventListener("change", mirarTamaño)

img.addEventListener('click', () => {
    let styleMenu = window.getComputedStyle(manuAparecer);
    if (styleMenu.getPropertyValue("display") === 'none') {
        manuAparecer.style.display = 'block';
        menu.style.display = 'none';
    } else if (styleMenu.getPropertyValue("display") === 'block') {
        manuAparecer.style.display = 'none';
    }
});

// Modificaciones grid

document.addEventListener('DOMContentLoaded', function () {

    const media_500 = window.matchMedia("(max-width: 500px)");
    const media_850 = window.matchMedia("(max-width: 850px)");

    const animatedElements =  document.querySelectorAll(".animation");
    const cells_container_500 =  document.querySelectorAll("#soporte .container, #caracteristicas_pre .container, #ayuda .container");
    const cells_container_850 =  document.querySelectorAll("#contact_us .container");
    let content_h2 =  document.querySelector("#soporte > div > h2");

    if (media_500.matches) {
        animatedElements.forEach(element => {
            element.classList.add('visible');
        });
        cells_container_500.forEach(element => {
            element.classList.remove('container');
        });
        content_h2.innerHTML = content_h2.textContent.replace(" "," <br>");
    }

    if (media_850.matches) {
        cells_container_850.forEach(element => {
            element.classList.remove('container');
        });
    }

});