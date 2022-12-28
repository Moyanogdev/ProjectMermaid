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