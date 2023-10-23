function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.btn-hamburguer').src = "./src/Responsive/menu.svg"
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.btn-hamburguer').src = "./src/Responsive/close.svg"
    }
}

