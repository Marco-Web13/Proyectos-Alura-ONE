// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigo;
let listaDeAmigos = [];


function agregarAmigo(){
    nombreDeAmigo = document.getElementById('amigo').value

    listaDeAmigos.push(nombreDeAmigo);
    llenarLista();
}

function llenarLista() {
    cambiarTextos('#listaAmigos', ""+listaDeAmigos);
}

function cambiarTextos(elemento, texto) {
    let cambiarHTML = document.querySelector(elemento);
    cambiarHTML.innerHTML = texto;

    return;
}

function sortearAmigo() {
    let numeroRandom = parseInt(Math.random()*numeroMaximo)+1;

    if(numeroRandom === listaDeAmigos){}
}
