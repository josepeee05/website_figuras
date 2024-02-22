
function circulo() {
    let figura = document.getElementById("figura");

    figura.classList.toggle("circulo");

    // Con esto se cambia el texto desde js a HTML
    const h2 = document.getElementById("texto");
    h2.innerText = "Circulo";
}

function rectangulo(){
    let figura = document.querySelector("#figura");

    figura.classList.toggle("rectangulo")

    const h2 = document.getElementById("texto");
    h2.innerText = "Rectangulo";
}

function moveRight() {
    let figura = document.getElementById("figura");

    figura.classList.toggle("right");

    alert("Se esta moviendo el objeto a la derecha");

    const h2 = document.getElementById("texto");
    h2.innerText = "Mover a la derecha";
}

function moveLeft() {
    let figura = document.getElementById("figura");

    figura.classList.toggle("left");

    alert("Se esta moviendo el objeto a la izquierda");

    const h2 = document.getElementById("texto");
    h2.innerText = "Mover a la izquierda";
}

function degradado() {
    let figura = document.getElementById("figura");

    figura.classList.toggle("degradado");

    const h2 = document.getElementById("texto");
    h2.innerText = "Color con degradado";
}

function gif() {
    let figura = document.getElementById("figura");

    figura.classList.toggle("gif");

    const h2 = document.getElementById("texto");
    h2.innerText = "GIF";
}

function luna(){
    let figura = document.querySelector("#figura");

    figura.classList.toggle("luna");

    const h2 = document.getElementById("texto");
    h2.innerText = "Luna";
}

function estrella(){
    let figura = document.querySelector("#figura");

    figura.classList.toggle("estrella");

    const h2 = document.getElementById("texto");
    h2.innerText = "Estrella";
}

function triangulo(){
    let figura = document.querySelector("#figura");

    figura.classList.toggle("triangulo");

    const h2 = document.getElementById("texto");
    h2.innerText = "Triangulo";
}

function moveTop() {
    let figura = document.getElementById("figura");

    figura.classList.toggle("top");

    alert("Se esta moviendo el objeto a arriba");

    const h2 = document.getElementById("texto");
    h2.innerText = "Mover hacia arriba";
}

function moveBottom() {
    let figura = document.getElementById("figura");

    figura.classList.toggle("bottom");

    alert("Se esta moviendo el objeto a abajo");

    const h2 = document.getElementById("texto");
    h2.innerText = "Mover hacia abajo";
}

function moveDiagonal() {
    let figura = document.querySelector("#figura");

    figura.classList.toggle("diagonal");

    alert("Se esta moviendo el objeto en diagonal");

    const h2 = document.getElementById("texto");
    h2.innerText = "Mover en diagonal";
}

function bgGeneral() {
    let figura = document.querySelector("#fondo");

    figura.classList.toggle("bgcolor");

    const h2 = document.getElementById("texto");
    h2.innerText = "Cambio fondo general";
}


function bgUsuario() {
    let figura = document.querySelector("#fondo");

    figura.classList.toggle("noImg");

    color = prompt("Por favor, ingrese un color en ingles:");
    document.body.style.backgroundColor = color;

    
    const h2 = document.getElementById("texto");
    h2.innerText = "Fondo cambiado al color: "+ color;
}


function panelLateral() {
    let figura = document.getElementById("panel-lateral");

    figura.classList.toggle("active");

    const h2 = document.getElementById("texto");
    h2.innerText = "Panel Lateral";
}

function panelSuperior() {
    let figura = document.getElementById("panel-superior");

    figura.classList.toggle("active");

    const h2 = document.getElementById("texto");
    h2.innerText = "Panel Superior";
}