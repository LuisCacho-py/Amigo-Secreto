// Estado de la app
const amigos = [];

// Cache de elementos
const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const zonaResultado = document.getElementById("resultado");

// Utilidad: trim y colapsar espacios
const limpiarNombre = (s) => s.replace(/\s+/g, " ").trim();

// Render de la lista visible
function renderLista() {
  lista.innerHTML = "";
  amigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

// Limpia el resultado del sorteo
function limpiarResultado() {
  zonaResultado.innerHTML = "";
}

// Agregar nombre con validación
function agregarAmigo() {
  const nombre = limpiarNombre(input.value);

  if (!nombre) {
    alert("Por favor, ingresa un nombre válido.");
    input.focus();
    return;
  }

  amigos.push(nombre);
  input.value = "";
  input.focus();

  limpiarResultado();
  renderLista();
}

// Sorteo aleatorio
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Primero agrega al menos un nombre.");
    return;
  }

  const idx = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[idx];

  zonaResultado.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = `🎉 Amigo secreto: ${ganador}`;
  zonaResultado.appendChild(li);
}

// Exponer funciones globales para los onclick del HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;

// Soporte Enter en el input
document.addEventListener("DOMContentLoaded", () => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") agregarAmigo();
  });
});
