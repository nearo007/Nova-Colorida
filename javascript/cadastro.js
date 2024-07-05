import { userDataBase } from "../data/usuarios.js";

function getInputValue(inputClass) {
    return document.querySelector(inputClass).value;
}

const input1 = document.querySelector(".input-user");
const input2 = document.querySelector(".input-email");
const input3 = document.querySelector(".input-phone");
const input4 = document.querySelector(".input-password");
const showPassword = document.querySelector(".button-show-password");
const showPasswordIcon = document.querySelector(".eye-icon");

input1.addEventListener("focus", function() {
    input1.placeholder = "";
});

input1.addEventListener("blur", function() {
    if (input1.value === "") {
        input1.placeholder = "Usuário";
    }
});

input2.addEventListener("focus", function() {
    input2.placeholder = "";
});

input2.addEventListener("blur", function() {
    if (input2.value === "") {
        input2.placeholder = "E-mail";
    }
});

input3.addEventListener("focus", function() {
    input3.placeholder = "";
});

input3.addEventListener("blur", function() {
    if (input3.value === "") {
        input3.placeholder = "Telefone";
    }
});

input4.addEventListener("focus", function() {
    input4.placeholder = "";
});

input4.addEventListener("blur", function() {
    if (input4.value === "") {
        input4.placeholder = "Senha";
    }
});

showPassword.addEventListener("click", function() {
    if (input4.type === "password") {
        input4.type = "text";
        showPasswordIcon.src = "imagens/login_imagens/eye_open.png";
    } else {
        input4.type = "password";
        showPasswordIcon.src = "imagens/login_imagens/eye_close.png";
    }
});

const buttonCadastrar = document.querySelector(".button-cadastrar");
buttonCadastrar.addEventListener("click", signUp);

const buttonVoltar = document.querySelector(".button-voltar");
buttonVoltar.addEventListener("click", openLogin);

function signUp() {
    if (getInputValue(".input-user") === "" || getInputValue(".input-password") === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O campo de usuário e senha precisam ser preenchidos!',
            heightAuto: false,
            customClass: {
                popup: 'custom-popup',
            }
        });
    }
    else {
        let usuarioExistente = userDataBase.some(item => item.usuario === getInputValue(".input-user"));

        if (usuarioExistente) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'O usuário já existe no sistema!',
                heightAuto: false,
                customClass: {
                    popup: 'custom-popup',
                }
            });
        }
        else {
            userDataBase.push({
                usuario: getInputValue(".input-user"),
                email: getInputValue(".input-email"),
                telefone: getInputValue(".input-phone"),
                senha: getInputValue(".input-password")
            });
            localStorage.setItem('userDataBase', JSON.stringify(userDataBase));
            Swal.fire({
                icon: 'success',
                title: 'Sucesso',
                text: 'Usuário cadastrado com sucesso!',
                heightAuto: false,
                customClass: {
                    popup: 'custom-popup',
                }
            });
        }
    }
}

function openLogin() {
    window.location.href = 'index.html';
}
