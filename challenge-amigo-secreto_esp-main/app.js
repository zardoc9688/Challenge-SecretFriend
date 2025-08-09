let listaAmigos = [];
let sorteoRealizado = false;

function agregarAmigo() {
    const campoEntrada = document.getElementById('amigo');
    const nombre = campoEntrada.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    if (sorteoRealizado) {
        listaAmigos = [];
        sorteoRealizado = false; 
        document.getElementById('resultado').innerHTML = ""; 
    }

    listaAmigos.push(nombre);
    campoEntrada.value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;

    sorteoRealizado = true; 
}
