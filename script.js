window.sr = ScrollReveal({reset: true});

sr.reveal('.titulo',{duration: 2000})
sr.reveal('.img-1',{duration: 2000})
sr.reveal('.texto',{duration: 3000})
sr.reveal('#card-1',{duration:8000})
sr.reveal('#card-2',{duration:9000})
sr.reveal('#card-3',{duration:10000})

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu-icone')
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icone').src = "./img/close_white_36dp.svg";
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icone').src = "./img/Menu.svg";
    }
}

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {

        text.textContent = "Programador";

    }, 0);
    setTimeout(() => {

        text.textContent = "Hacking Etico";

    }, 4000);
    setTimeout(() => {

        text.textContent = "Universitario";

    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);