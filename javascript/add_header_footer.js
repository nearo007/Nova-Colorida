function addHeader() {
    const divHeader = document.querySelector('.header');
    divHeader.innerHTML = `        <div class="header-left">
    <button class="header-logo-button js-header-logo">
        <img class="header-logo" src="imagens/empresa_logos/logo.jpg">
    </button>
    <p class="logo-name">Mão Colorida</p>
</div>

<div class="header-right">
    <div class="header-button">
        <button class="js-header-sobre">
            Sobre
        </button>        
    </div>

    <div class="header-button">
        <button class="js-header-clientes">
            Clientes
        </button>      
    </div>

    <div class="header-button">
        <button class="js-header-funcionario">
            Funcionário
        </button>     
    </div>

    <div class="header-button">
        <button class="js-header-qualidade">
            Qualidade
        </button>      
    </div>

    <div class="header-button">
        <button class="js-header-beneficios">
            Benefícios
        </button>     
    </div>

    <div class="header-button">
        <button class="js-header-contato">
            Contato
        </button>       
    </div>

    <div class="header-button">
        <button class="user-button">
            <img class="user-image" src="imagens/empresa_logos/user_icon.png" alt="User Icon">
        </button> 
        <div class="dropdown-content">
            <button class="dropdown-sair">Sair</button>
        </div>      
    </div>
</div>`;
}
addHeader();

function addFooter() {
    const divFooter = document.querySelector('.footer');
    divFooter.innerHTML = `                <div class="footer-container">
                    <div class="footer-section1">
                        <h3>Contato</h3>
                        <ul>
                            <li>Endereço: R. Augusto Dias Paredes, 68 - Boqueirão, Curitiba</li>
                            <li>Telefone: (41) 3122-7550</li>
                            <li>E-mail: maocolorida@maocolorida.com.br</li>
                        </ul>
                    </div>
                    <div class="footer-section2">
                        <h3>Links Úteis</h3>
                        <ul>
                            <li><a href="https://www.maocolorida.com/pt/#QuemSomos">Sobre nós</a></li>
                            <li><a href="https://www.maocolorida.com/pt/#NossosServicos">Serviços</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="footer-section3">
                        <h3>Siga-nos</h3>
                        <div class="social-icons">
                            <ul>
                                <li><a href="https://www.facebook.com/profile.php?id=174725282587964&paipv=0&eav=Afb9SmsJE_S0rAQFf-WCoZDLJuAJp6XFuGT3ZxLeBnAcjfuK_CEWLQE5ZfHcZ7keqVQ&_rdr"
                                        target="_blank">Facebook</a></li>
                                <li><a href="linkedin.com.br/company/mão-colorida" target="_blank">LinkedIn</a></li>
                                <li><a href="https://www.instagram.com/maocoloridacv/" target="_blank">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-section4">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
                            <li><a href="/termos-de-uso">Termos de Uso</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    © 2024 <span>InovaTech</span>. Todos os direitos reservados.
                </div>`;
}
addFooter();