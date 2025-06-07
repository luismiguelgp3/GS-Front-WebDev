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

// Troca de Cores do fundo

const moon = document.getElementById('moon')
const sun = document.getElementById('sun')
const dusk = document.getElementById('dusk')
const nav = document.querySelector('nav')
const nav_sections = document.querySelector('.nav-sections')
const first_section = document.querySelector('.first-section')
const first_section_text = document.querySelector('.first-section-text')
const second_section = document.querySelector('.second-section')
const third_section = document.querySelector('.third-section')
const third_section_text = document.querySelector('.third-section-text')
const fourth_section = document.querySelector('.fourth-section')
const fourth_section_text = document.querySelector('.fourth-section-text')
const fifth_section = document.querySelector('.fifth-section')
const fifth_section_text = document.querySelector('.fifth-section-text')
const sixth_section = document.querySelector('.sixth-section')
const sixth_section_text = document.querySelectorAll('.sixth-section-text')
const contato = document.getElementById('contato')

let ultimoElementoClicado = null;


// Troca o fundo para o dark

moon.addEventListener('click', () => {
    if(ultimoElementoClicado == 'sun'){
        nav.classList.remove('light')
        nav.classList.add('night')

        nav_sections.classList.remove('light')
        nav_sections.classList.add('night')
        
        first_section.classList.remove('light')
        first_section.classList.add('night')
        
        first_section_text.classList.remove('light')
        first_section_text.classList.add('night')
        
        second_section.classList.remove('light')
        second_section.classList.add('night')

        third_section.classList.remove('light')
        third_section.classList.add('night')
        
        third_section_text.classList.remove('light')
        third_section_text.classList.add('night')
        
        fourth_section.classList.remove('light')
        fourth_section.classList.add('night')
        
        fourth_section_text.classList.remove('light')
        fourth_section_text.classList.add('night')
        
        fifth_section.classList.remove('light')
        fifth_section.classList.add('night')
        
        fifth_section_text.classList.remove('light')
        fifth_section_text.classList.add('night')
        
        sixth_section.classList.remove('light')
        sixth_section.classList.add('night')
        
        sixth_section_text.classList.remove('light')
        sixth_section_text.classList.add('night')
        
        contato.classList.remove('light')
        contato.classList.add('night')
        
    } else if (ultimoElementoClicado == 'dusk'){
        nav.classList.remove('dusk')
        nav.classList.add('night')
       
        nav_sections.classList.remove('dusk')
        nav_sections.classList.add('night')
        
        first_section.classList.remove('dusk')
        first_section.classList.add('night')
        
        first_section_text.classList.remove('dusk')
        first_section_text.classList.add('night')
        
        second_section.classList.remove('dusk')
        second_section.classList.add('night')
        
        third_section.classList.remove('dusk')
        third_section.classList.add('night')
        
        third_section_text.classList.remove('dusk')
        third_section_text.classList.add('night')
        
        fourth_section.classList.remove('dusk')
        fourth_section.classList.add('night')
        
        fourth_section_text.classList.remove('dusk')
        fourth_section_text.classList.add('night')
        
        fifth_section.classList.remove('dusk')
        fifth_section.classList.add('night')
        
        fifth_section_text.classList.remove('dusk')
        fifth_section_text.classList.add('night')
        
        sixth_section.classList.remove('dusk')
        sixth_section.classList.add('night')
        
        sixth_section_text.classList.remove('dusk')
        sixth_section_text.classList.add('night')
        
        contato.classList.remove('dusk')
        contato.classList.add('night')
    
    } else {
        nav.classList.add('night')
        nav_sections.classList.add('night')
        first_section.classList.add('night')
        first_section_text.classList.add('night')
        second_section.classList.add('night')
        third_section.classList.add('night')
        third_section_text.classList.add('night')
        fourth_section.classList.add('night')
        fourth_section_text.classList.add('night')
        fifth_section.classList.add('night')
        fifth_section_text.classList.add('night')
        sixth_section.classList.add('night')
        sixth_section_text.classList.add('night')
        contato.classList.add('night')
    }
    ultimoElementoClicado = 'moon'
    return ultimoElementoClicado
})

// Troca o fundo para o light

sun.addEventListener('click', () => {
    if(ultimoElementoClicado == 'moon'){
        nav.classList.remove('night')
        nav.classList.add('light')

        nav_sections.classList.remove('night')
        nav_sections.classList.add('light')
    } else if (ultimoElementoClicado == 'dusk'){
        nav.classList.remove('dusk')
        nav.classList.add('light')

        nav_sections.classList.remove('dusk')
        nav_sections.classList.add('light')
    } else {
        nav.classList.add('light')
        nav_sections.classList.add('light')
    }
    ultimoElementoClicado = 'sun'
    return ultimoElementoClicado
})

// Troca o fundo para o dusk

dusk.addEventListener('click', () => {
    if(ultimoElementoClicado == 'moon'){
        nav.classList.remove('night')
        nav.classList.add('dusk')

        nav_sections.classList.remove('night')
        nav_sections.classList.add('dusk')
    } else if (ultimoElementoClicado == 'sun'){
        nav.classList.remove('light')
        nav.classList.add('dusk')

        nav_sections.classList.remove('light')
        nav_sections.classList.add('dusk')
    } else {
        nav.classList.add('dusk')
        nav_sections.classList.add('dusk')
    }
    ultimoElementoClicado = 'dusk'
    return ultimoElementoClicado
})

// Formulario do Trabalhe Conosco

const form   = document.getElementById('form');
    const campos = document.querySelectorAll('.required');
    const spans  = document.querySelectorAll('.span-required');
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        nameValidate();
        emailValidate();
    });

    function setError(index){
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }

    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }

    function nameValidate(){
        if(campos[0].value.length < 3)
        {
            setError(0);
        }
        else
        {
            removeError(0);
        }
    }

    function emailValidate(){
        if(!emailRegex.test(campos[1].value))
        {
            setError(1);
        }
        else
        {
            removeError(1);
        }
    }

// Funcionalidade do Mobile
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';

    // Links de Navegacao
    const navLinks = document.querySelectorAll('.nav-sections a');

    // Criando menu de items
    navLinks.forEach(link => {
        const menuItem = document.createElement('a');
        menuItem.href = link.href;
        menuItem.textContent = link.textContent;
        mobileMenu.appendChild(menuItem);
    });

    // Adiciona botao de fechar
    const closeButton = document.createElement('i');
    closeButton.className = 'fa-solid fa-xmark close-menu';
    closeButton.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
    mobileMenu.appendChild(closeButton);

    document.body.appendChild(mobileMenu);

    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = 'flex';
    });

    // Fecha o menu
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });