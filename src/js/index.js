/*

OBJETIVO 1 - quando o usuario clicar no botão de veja trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2-  quando o usuario clicar no X devemos fechar a maodal

OBJETIVO 1 
- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
- passo 2 - dar um jeito de identificar quando o usuario clicar no botão
- passo 3 - dar um jeito de pegar o elemento da modal no js
- passo 4 - abrir a modal na tela

OBJETIVO 2-
- passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js
- passo 2 - dar um jeito de identificar quando o usuario clicar no x
- passo 3 - fechar a modal

*/

console.log('mostrar o document',document);
//OBJETIVO 1 - quando o usuario clicar no botão de veja trailer, devemos abrir a modal com o video do trailer
//passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

//passo 2 - dar um jeito de identificar quando o usuario clicar no botão
botaoTrailer.addEventListener("click", () => {
    //passo 4 - abrir a modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

//passo 3 - dar um jeito de pegar o elemento da modal no js


// OBJETIVO 2-  quando o usuario clicar no X devemos fechar a maodal
// passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

//passo 2 - dar um jeito de identificar quando o usuario clicar no x
botaoFecharModal.addEventListener("click", () => {
    //passo 3 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
})

