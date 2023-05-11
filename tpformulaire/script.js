let changecouleur = document.getElementById('color');
changecouleur.addEventListener("input", fchangecouleur);
let body = document.getElementById("body");

function fchangecouleur(couleur){
    body.style.background = couleur.target.value;
}
