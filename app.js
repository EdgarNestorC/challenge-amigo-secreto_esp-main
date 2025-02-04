// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = "";
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    mostrarResultado(amigoSeleccionado);
}

function mostrarResultado(amigoSeleccionado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es: ${amigoSeleccionado} `;
    resultado.appendChild(li);
}

