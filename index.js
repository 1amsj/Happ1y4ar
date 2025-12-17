const modal = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const finala = document.getElementById("btn-accept1");
const finalb = document.getElementById("btn-accept2");
const btnForgotPassword = document.getElementById("forgot-password");
const span = document.querySelector(".close");
const span2 = document.getElementById("close-modal2");
const span3 = document.getElementById("close-modal3");
const entendido = document.getElementById("btn-accept");
const noentendido = document.getElementById("btn-noaccept");

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita enviar el formulario

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    // Credenciales permitidas
    const validUser = "caramelo";
    const validPass = "16082024";

    if (user === validUser && pass === validPass) {
        window.location.href = "main.html"; // Página a donde quieres redirigir
    } else {
        modal3.style.display = "block";
    }
});

btnForgotPassword.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "block";
}

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
finala.onclick = function () {
    modal.style.display = "none";
}
finalb.onclick = function () {
    modal3.style.display = "none";
}

noentendido.onclick = function () {
    modal.style.display = "none";
    modal2.style.display = "block";
}


span2.onclick = function () {
    modal2.style.display = "none";
}

span3.onclick = function () {
    modal3.style.display = "none";
}