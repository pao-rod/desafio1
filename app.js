// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo').value;

    if (nombreIngresado === '') {
        alert('Por favor inserte un nombre');
    } else {
        amigos.push(nombreIngresado);
        document.querySelector('#amigo').value = '';
        actualizarListaDeAmigos()
    }
    return
}

function actualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let numeroSorteado = Math.floor(Math.random()* amigos.length);
        let amigoElegido = amigos[numeroSorteado];
        let elegido = document.getElementById('resultado');
        elegido.innerHTML = amigoElegido;
    } else {
        alert("No hay amigos para sortear");
    }
}

