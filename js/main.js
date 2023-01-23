// OWL CAROUSEL EFECTS

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// SCROLL REVEAL EFECTS

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 250,
});

sr.reveal(`.imgBanner`, {origin: 'left'})
sr.reveal(`.textBanner`, {origin: 'right'})
sr.reveal(`.efectoNails`, {origin: 'bottom'})
sr.reveal(`.efectoTrabajos`)
sr.reveal(`.efectoOtros`)
sr.reveal(`.efectoDepilacion`, {origin: 'left'})
sr.reveal(`.efectoLaminado`, {origin:'right'})
sr.reveal(`.efectoContacto`)
sr.reveal(`.efectoForm`, {origin: 'left'})
sr.reveal(`.efectoMap`, {origin: 'right'})

// EMAIL JS

const btn = document.getElementById('button');
const msjConfirm = document.getElementById("msjConfirm");

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = ' Enviando... ';

const serviceID = 'default_service';
const templateID = 'template_09idt1o'; 

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        msjConfirm.innerHTML = "Mensaje enviado correctamente"
        setTimeout(function(){
            msjConfirm.innerHTML = ""
        },5000)
        form.reset()
    }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
        });
});

// SCROLL UP

const scrollUp = () => {
    const scrollUp = document.getElementById('scrollUp')
    this.scrollY >= 1500 ? scrollUp.classList.add('showScroll')
                        : scrollUp.classList.remove('showScroll')
}

window.addEventListener('scroll', scrollUp);