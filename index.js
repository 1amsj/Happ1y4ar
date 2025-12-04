const modal = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const finala = document.getElementById("btn-finala");
const span = document.querySelector(".close");
const span2 = document.getElementById("close-modal2");
const entendido = document.getElementById("btn-accept");
const noentendido = document.getElementById("btn-noaccept");

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita enviar el formulario

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    // Credenciales permitidas
    const validUser = "admin";
    const validPass = "admin123";

    if (user === validUser && pass === validPass) {
        window.location.href = "main.html"; // Página a donde quieres redirigir
    } else {
        modal.style.display = "block";
    }
});

span.onclick = function () {
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

entendido.onclick = function () {
    modal.style.display = "none";
}
noentendido.onclick = function () {
    modal.style.display = "none";
    modal2.style.display = "block";
}

finala.onclick = function () {
    modal2.style.display = "none";
}

span2.onclick = function () {
    modal2.style.display = "none";
}