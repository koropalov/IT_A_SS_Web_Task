const burger = document.querySelector('.burger'),
    nav = document.querySelector('.menu-list'),
    links = document.querySelectorAll('.menu-list li');

function slider() {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active;');
        burger.classList.toggle('toggle');
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade .5s ease forwards ${index / 7 + 0.3}s`
            }
        })
    })

}

slider();




