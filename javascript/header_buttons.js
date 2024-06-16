const buttonPrincipal = document.querySelector('.js-header-logo');
buttonPrincipal.onclick = openMain;

const buttonSobre = document.querySelector('.js-header-sobre');
buttonSobre.onclick = openMain;

const buttonParceiros = document.querySelector('.js-header-parceiros');
buttonParceiros.onclick = openParceiros;

const buttonBeneficios = document.querySelector('.js-header-beneficios');
buttonBeneficios.onclick = openBenefits;

const buttonContato = document.querySelector('.js-header-contato');
buttonContato.onclick = openContacts;

const buttonSair = document.querySelector('.dropdown-sair');
buttonSair.onclick = quit;

function openMain() {
    window.location.href = 'principal.html'
}

function openParceiros() {
    window.location.href = 'parceiros.html'
}

function openBenefits() {
    window.location.href = 'beneficios.html'
}

function openContacts() {
    window.location.href = 'contato.html'
}

function quit() {
    window.location.href = 'index.html'
}

