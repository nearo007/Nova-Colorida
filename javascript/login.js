import { userDataBase } from "../data/usuarios.js";

const buttonCadastro = document.querySelector(".button-cadastro");
buttonCadastro.onclick = openCadastro;

function openCadastro() {
    window.location.href = 'cadastro.html';
}

const buttonLogin = document.querySelector(".button-login");
buttonLogin.addEventListener("click", () => {
    const user = getInputValue(".input-user");
    const password = getInputValue(".input-password");
    doLogin(user, password);
})

function doLogin(user, password) {
    let validLogin = false;
    for (let i = 0; i < userDataBase.length; i++) {
        const value = userDataBase[i];
        if (value.usuario === user) {
            if(value.senha === password) {
                window.location.href = "principal.html";
                validLogin = true;
            }
        }
    }
    if (!validLogin) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuário ou senha incorretos!',
            heightAuto: false,
            customClass: {
                popup: 'custom-popup',
            }
        });
    }
}

function getInputValue(inputClass) {
    return document.querySelector(inputClass).value;
}

const input = document.querySelector(".input-user");
const input2 = document.querySelector(".input-password");
const showPassword = document.querySelector(".button-show-password");
const showPasswordIcon = document.querySelector(".eye-icon");

input.addEventListener("focus", function() {
    input.placeholder = "";
});

input.addEventListener("blur", function() {
    if (input.value === "") {
        input.placeholder = "Usuário";
    }
});

input2.addEventListener("focus", function() {
    input2.placeholder = "";
});

input2.addEventListener("blur", function() {
    if (input2.value === "") {
        input2.placeholder = "Senha";
    }
});

showPassword.addEventListener("click", function() {
    if (input2.type === "password") {
        input2.type = "text";
        showPasswordIcon.src = "imagens/login_imagens/eye_open.png";
    } else {
        input2.type = "password";
        showPasswordIcon.src = "imagens/login_imagens/eye_close.png";
    }
});