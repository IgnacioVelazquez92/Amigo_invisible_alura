// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); // Eliminar espacios al inicio y al final

  // Validación del nombre
  if (nombre === "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  // Verificar si el nombre ya existe en la lista
  if (amigos.includes(nombre)) {
    alert("Este nombre ya ha sido agregado.");
    return;
  }

  // Agregar el nombre a la lista
  amigos.push(nombre);
  mostrarLista();

  // Limpiar el campo de entrada
  input.value = "";
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
  const listaElement = document.getElementById("listaAmigos");
  listaElement.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const li = document.createElement("li");
    li.textContent = amigos[index];
    listaElement.appendChild(li);
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "";

  if (amigos.length < 2) {
    alert("Debe haber al menos dos amigos para realizar el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const li = document.createElement("li");
  li.textContent = `El amigo secreto es: ${amigoSorteado}`;
  resultadoElement.appendChild(li);
}
