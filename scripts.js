let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
// document = html
// querySelector = pegador / selecionador

function mudarVisual(cor, imagem){
    
    body.style.background = cor
    tenis.src = imagem
}

