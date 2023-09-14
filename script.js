// script.js

function updateHora() {
    const horaElement = document.getElementById("hora");
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    horaElement.textContent = `${hora}:${minutos}:${segundos}`;
}

// Actualizar la hora cada segundo
setInterval(updateHora, 1000);

// Inicializar la hora al cargar la página
updateHora();
