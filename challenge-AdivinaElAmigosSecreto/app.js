// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigo;
let listaDeAmigos = [];

console.log(isNaN(nombreDeAmigo));//String

function agregarAmigo(){
    nombreDeAmigo = document.getElementById('amigo').value
    if(isNaN(nombreDeAmigo)){
        listaDeAmigos.push(nombreDeAmigo);
        llenarLista();

        document.querySelector('#amigo').value = '';
    }
    else{
        alert("Inserta un nombre valido");
        document.querySelector('#amigo').value = '';
    }
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
    let numeroRandom = parseInt(Math.random()*listaDeAmigos.length);

    cambiarTextos('#resultado', ""+listaDeAmigos[numeroRandom])
}
