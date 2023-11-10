// Animacion cuando cliques un ancor que vaya bajando poco a poco

document.querySelectorAll('header a').forEach(anchor => {
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
});


// Animacion entrar pagina que salga el elemento

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function() {
      document.querySelector("#principio .animated-section-down-up").classList.add('visible');
      document.querySelector("header").classList.add('visible');
    }, 500);
});

// Animacion mientras haces scroll que vayan apareciendo

document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animated-section-down-up, .animated-section-left-right, .animated-section-right-left');

    window.addEventListener('scroll', () => handleScroll(animatedElements));

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

            underlinedAncor(element);

        });
    }

    function underlinedAncor(element) {
        const ancorsElements = document.querySelectorAll('header a');
            
        if (element.parentNode.parentNode.nodeName == "SECTION") {
            ancorsElements.forEach(ancor => {
                const encorId = ancor.getAttribute('href').substring(1)
                if (element.parentNode.parentNode.id == encorId) {
                    //console.log("CONSEGUIDO")
                }
            });
        }
    }

});

// Menu aparecer desaparecer

const img = document.querySelector('.menu');
const menu = document.getElementById('menu');
const manuAparecer = document.getElementById('aparecer');
const media = window.matchMedia("(min-width: 1024px)");
const media_primera = window.matchMedia("(max-width: 1024px)");

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