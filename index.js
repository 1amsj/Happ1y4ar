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
    e.preventDefault();

    const userInput = document.getElementById("username");
    const passInput = document.getElementById("password");

    // Normalización
    const user = userInput.value.trim().toLowerCase();
    const pass = passInput.value.trim();

    const validUser = "caramelo";   
    const validPass = "16082024";

    // Expresiones regulares
    const userRegex = /^[a-z0-9_]{4,20}$/;   // letras, números y _
    const passRegex = /^[0-9]{6,12}$/;       // solo números

    // Reset visual
    userInput.classList.remove("input-error");
    passInput.classList.remove("input-error");

    // Campos vacíos
    if (!user || !pass) {
        marcarError(userInput, passInput);
        mostrarModal("Completa todos los campos");
        return;
    }

    // Caracteres inválidos
    if (!userRegex.test(user)) {
        userInput.classList.add("input-error");
        mostrarModal("Usuario inválido (solo letras, números y _)");
        return;
    }

    if (!passRegex.test(pass)) {
        passInput.classList.add("input-error");
        mostrarModal("Contraseña inválida (solo números)");
        return;
    }

    // Credenciales incorrectas
    if (user !== validUser || pass !== validPass) {
        mostrarModal("Usuario o contraseña incorrectos");
        return;
    }

    // Login correcto
    window.location.href = "main.html";
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

function mostrarModal(mensaje){
    const modal = document.getElementById("modal3");
    const texto = modal.querySelector(".modal-text");
    texto.textContent = mensaje;
    modal.style.display = "block";
}
