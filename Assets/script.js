// Código do SlideShow

let imageSlider = document.querySelectorAll('.slider-container .slider-box')
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav')
let btnAnterior = document.querySelector('#anterior')
let btnProxima = document.querySelector('#proxima')
let contadorImage = imageSlider.length
let imageAtiva = 0

// Botão para passar para a próxima imagem

btnProxima.addEventListener('click', () => {
    imageAtiva++
    if(imageAtiva >= contadorImage) {
        imageAtiva = 0
    }
    mostrarSlide()
})

// Botão para passar para a imagem anterior

btnAnterior.addEventListener('click', () => {
    imageAtiva--
    if(imageAtiva < 0) {
        imageAtiva = contadorImage - 1
    }
    mostrarSlide()
})

// Função que mostra o slide selecionado no momento

function mostrarSlide() {
    let antigaImage = document.querySelector('.slider-container .slider-box.ativo')
    let antigaBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo')
    antigaImage.classList.remove('ativo')
    antigaBtnNav.classList.remove('ativo')

    imageSlider[imageAtiva].classList.add('ativo')
    btnNav[imageAtiva].classList.add('ativo')
}

// Mostra o slide selecionado nos botões de navegação em baixo do texto

btnNav.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        imageAtiva = indice
        mostrarSlide()
    })
})