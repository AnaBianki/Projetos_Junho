function aplicarFiltro(filtro) {
    const imagens = document.querySelectorAll(".galeria img");
    imagens.forEach(img => {
        img.style.filter = filtro;
    });
}