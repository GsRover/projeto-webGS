function mudarTema(tema) {
    // Limpa os temas adicionais
    document.body.classList.remove('tema-marte', 'tema-claro');
    
    // Se não for o padrão, adiciona a classe correspondente
    if (tema !== 'padrao') {
        document.body.classList.add(`tema-${tema}`);
    }
}

// --- LÓGICA DO SLIDESHOW ---
let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementsByClassName("slide").length > 0) {
        mostrarSlides(slideIndex);
    }
});

function mudarSlide(n) {
    mostrarSlides(slideIndex += n);
}

function mostrarSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex - 1].style.display = "block";  
}