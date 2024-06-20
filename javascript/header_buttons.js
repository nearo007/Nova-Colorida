const buttonPrincipal = document.querySelector('.js-header-logo');
buttonPrincipal.onclick = openMain;

const buttonSobre = document.querySelector('.js-header-sobre');
buttonSobre.onclick = openMain;

const buttonClientes = document.querySelector('.js-header-clientes');
buttonClientes.onclick = openClientes;

const buttonQualidade = document.querySelector('.js-header-qualidade');
buttonQualidade.onclick = openQualidade;

const buttonBeneficios = document.querySelector('.js-header-beneficios');
buttonBeneficios.onclick = openBenefits;

const buttonFuncionario = document.querySelector('.js-header-funcionario');
buttonFuncionario.onclick = openFuncionario;

const buttonContato = document.querySelector('.js-header-contato');
buttonContato.onclick = openContacts;

const buttonSair = document.querySelector('.dropdown-sair');
buttonSair.onclick = quit;

function openMain() {
    window.location.href = 'principal.html'
}

function openClientes() {
    window.location.href = 'clientes.html'
}

function openQualidade() {
    window.location.href = 'qualidade.html'
}

function openBenefits() {
    window.location.href = 'beneficios.html'
}

function openFuncionario() {
    window.location.href = 'funcionario.html'
}

function openContacts() {
    window.location.href = 'contato.html'
}

function quit() {
    window.location.href = 'index.html'
}

