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

    const body = document.body.id;

    setTimeout(function() {
        document.querySelector("header").classList.add('visible');
    }, 300);

    if (body === "main_page") {
        setTimeout(function() {
            document.querySelector("#principio .animated-section-down-up").classList.add('visible');
        }, 300);
    }
    else if (body === "caracteristicas_page") {
        const animaciones = document.querySelectorAll(".animation");
        setTimeout(function() {
            animaciones.forEach(element => {
                element.classList.add('visible');
            });
        }, 300);
    }

});

// Animacion mientras haces scroll que vayan apareciendo


document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll(".animation, .underline");
  
    window.addEventListener('scroll', () => {
      handleScroll(animatedElements);
    });
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight * 0.7 &&
        rect.bottom >= 0
      );
    }

    function underlinedAncor(encontrado) {

        const ancorsElements = document.querySelectorAll('header a');

        ancorsElements.forEach(ancor => {
            const encorId = ancor.getAttribute('href').substring(1);
            let antiguo_ancor = "";
            let antiguo_href = "";
            let contador = 0;

            if (encontrado == encorId) {
                ancor.classList.add('active');
                antiguo_ancor = ancor;
                antiguo_href = encorId;
            }

            contador++;

            if (ancor !== antiguo_ancor && encorId !== antiguo_href && contador > 10) {
                ancor.classList.remove('active');
            }

        });
    }
  
    function handleScroll(elements) {
  
      elements.forEach((element) => {
        const animationDirection = element.classList.contains('animated-section-left-right') ? 'left_right' :
          element.classList.contains('animated-section-right-left') ? 'right_left' : 'down_up';
  
        if (isInViewport(element)) {
            element.classList.add('visible');
            if (element.id != '') {
                underlinedAncor(element.id);
            }
        }
      });
    }
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
    const cells_container_850 =  document.querySelectorAll("#contact_us > div");

    if (media_500.matches) {
        animatedElements.forEach(element => {
            element.classList.add('visible');
        });
        cells_container_500.forEach(element => {
            element.classList.remove('container');
        });
    }
    if (media_850.matches) {
        cells_container_850.forEach(element => {
            console.log(element)
            element.parentNode.classList.add('flex');
            element.classList.remove('container');
        });
    }

});