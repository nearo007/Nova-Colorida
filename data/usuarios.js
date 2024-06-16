export let userDataBase = JSON.parse(localStorage.getItem('userDataBase')) || [
    {usuario: 'admin', email: 'admin@gmail.com', telefone: '41912345678', senha: 'admin'},
    {usuario: 'user', email: 'user@gmail.com', telefone: '41912345678', senha: 'user'}
];