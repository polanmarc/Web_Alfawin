document.querySelectorAll('header a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    
    const down_up = document.querySelectorAll('.animated-section-down-up');
    const left_right = document.querySelectorAll('.animated-section-left-right');
    const right_left = document.querySelectorAll('.animated-section-right-left');

    down_up.forEach((element) => {
        if (element.classList[0] === 'animated-section-down-up') {
            window.addEventListener('scroll', () => handleScroll_down_up(element));
        }
    });

    left_right.forEach((element) => {
        if (element.classList[0] === 'animated-section-left-right') {
            window.addEventListener('scroll', () => handleScroll_right_left(element));
        }
    });

    right_left.forEach((element) => {
        if (element.classList[0] === 'animated-section-right-left') {
            window.addEventListener('scroll', () => handleScroll_left_right(element));
        }
    });

    // Izquierda a derecha

    function isInViewport_left_right(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  
    function handleScroll_left_right(element) {
        if (isInViewport_left_right(element)) {
            element.classList.add('visible');
        }
    }

    // Derecha a izquierda

    function isInViewport_right_left(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  
    function handleScroll_right_left(element) {
        if (isInViewport_right_left(element)) {
            element.classList.add('visible');
        }
    }

    // De abajo a arriba

    function isInViewport_down_up(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
  
    function handleScroll_down_up(element) {
        if (isInViewport_down_up(element)) {
            element.classList.add('visible');
        }
    }

});

/*

document.addEventListener('DOMContentLoaded', function () {
    
    const header_div = document.querySelector('header div');
    const header_nav = document.querySelector('header nav');
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('section > div');
    const sections_diferents = document.querySelectorAll('section > div > div')

    sections.forEach((element) => {
        if (element.classList[0] === 'animated-section-down-up') {
            window.addEventListener('scroll', () => handleScroll_down_up(element));
        }
        else if (element.classList[0] === 'animated-section-right-left') {
            window.addEventListener('scroll', () => handleScroll_right_left(element));
            console.log("hola")
        }
        else if (element.classList[0] === 'animated-section-left-right') {
            window.addEventListener('scroll', () => handleScroll_left_right(element));
        }
    });

    sections_diferents.forEach((element) => {
        if (element.classList[0] === 'animated-section-down-up') {
            window.addEventListener('scroll', () => handleScroll_down_up(element));
        }
        else if (element.classList[0] === 'animated-section-right-left') {
            window.addEventListener('scroll', () => handleScroll_right_left(element));
            console.log("hola")
        }
        else if (element.classList[0] === 'animated-section-left-right') {
            window.addEventListener('scroll', () => handleScroll_left_right(element));
        }
    });

    // Llamadas elemetnos header y footer

    if (header_div.classList[0] === 'animated-section-down-up' && header_nav.classList[0] === 'animated-section-down-up' && footer.classList[0] === 'animated-section-down-up') {
        window.addEventListener('scroll', () => handleScroll_down_up(header_div));
        window.addEventListener('scroll', () => handleScroll_down_up(header_nav));
        window.addEventListener('scroll', () => handleScroll_down_up(footer));
    }

    // Izquierda a derecha

    function isInViewport_left_right(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  
    function handleScroll_left_right(element) {
        if (isInViewport_left_right(element)) {
            element.classList.add('visible');
        }
    }

    // Derecha a izquierda

    function isInViewport_right_left(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  
    function handleScroll_right_left(element) {
        if (isInViewport_right_left(element)) {
            element.classList.add('visible');
        }
    }

    // De abajo a arriba

    function isInViewport_down_up(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
  
    function handleScroll_down_up(element) {
        if (isInViewport_down_up(element)) {
            element.classList.add('visible');
        }
    }

});

*/