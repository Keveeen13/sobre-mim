// ==================== CLASSE PORTFOLIO ==================== 
var Portfolio = /** @class */ (function () {
    function Portfolio() {
        this.currentTab = 'home';
        this.navButtons = document.querySelectorAll('.nav-btn');
        this.tabContents = document.querySelectorAll('.tab-content');
        this.contactForm = document.getElementById('contactForm');
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.ctaButton = document.querySelector('.cta-button');
        this.init();
    }
    // Inicialização do portfolio
    Portfolio.prototype.init = function () {
        this.setupNavigation();
        this.setupFormHandler();
        this.setupCTAButton();
        this.setupMobileMenu();
        this.addScrollAnimation();
    };
    // Setup da navegação entre abas
    Portfolio.prototype.setupNavigation = function () {
        var _this = this;
        this.navButtons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                _this.handleTabClick(e);
            });
        });
    };
    // Handle clique em aba
    Portfolio.prototype.handleTabClick = function (event) {
        var button = event.target;
        var tabName = button.getAttribute('data-tab');
        if (!tabName) return;
        this.switchTab(tabName);
        this.closeMenuIfOpen();
    };
    // Alternar abas
    Portfolio.prototype.switchTab = function (tabName) {
        // Remove classe active de todos os botões e conteúdos
        this.navButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        this.tabContents.forEach(function (content) {
            content.classList.remove('active');
        });
        // Adiciona classe active ao botão e conteúdo corretos
        var activeButton = document.querySelector("[data-tab=\"" + tabName + "\"]");
        var activeContent = document.getElementById(tabName);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        if (activeContent) {
            activeContent.classList.add('active');
        }
        this.currentTab = tabName;
        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // Setup do formulário de contato
    Portfolio.prototype.setupFormHandler = function () {
        var _this = this;
        if (!this.contactForm) return;
        this.contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            _this.handleFormSubmit();
        });
    };
    // Handle submissão do formulário
    Portfolio.prototype.handleFormSubmit = function () {
        if (!this.contactForm) return;
        var formData = {
            name: this.contactForm.querySelector('#name').value,
            email: this.contactForm.querySelector('#email').value,
            subject: this.contactForm.querySelector('#subject').value,
            message: this.contactForm.querySelector('#message').value,
        };
        // Validação básica
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            this.showNotification('Por favor, preencha todos os campos', 'error');
            return;
        }
        // Validação de email
        if (!this.isValidEmail(formData.email)) {
            this.showNotification('Por favor, insira um email válido', 'error');
            return;
        }
        // Simular envio
        this.showNotification('Mensagem enviada com sucesso! Obrigado pelo contato.', 'success');
        this.contactForm.reset();
    };
    // Validar email
    Portfolio.prototype.isValidEmail = function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    // Mostrar notificação
    Portfolio.prototype.showNotification = function (message, type) {
        var notification = document.createElement('div');
        notification.className = "notification notification-" + type;
        notification.textContent = message;
        // Estilo inline para notificação
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            zIndex: '1000',
            animation: 'slideIn 0.3s ease-out',
        });
        if (type === 'success') {
            Object.assign(notification.style, {
                background: '#10b981',
                color: 'white',
            });
        } else {
            Object.assign(notification.style, {
                background: '#ef4444',
                color: 'white',
            });
        }
        document.body.appendChild(notification);
        // Remover notificação após 4 segundos
        setTimeout(function () {
            notification.remove();
        }, 4000);
    };
    // Setup botão CTA
    Portfolio.prototype.setupCTAButton = function () {
        var _this = this;
        if (!this.ctaButton) return;
        this.ctaButton.addEventListener('click', function () {
            _this.switchTab('contact');
        });
    };
    // Setup menu mobile
    Portfolio.prototype.setupMobileMenu = function () {
        var _this = this;
        if (!this.menuToggle) return;
        this.menuToggle.addEventListener('click', function () {
            if (_this.navMenu) {
                _this.navMenu.classList.toggle('active');
            }
        });
    };
    // Fechar menu se aberto
    Portfolio.prototype.closeMenuIfOpen = function () {
        if (this.navMenu && this.navMenu.classList.contains('active')) {
            this.navMenu.classList.remove('active');
        }
    };
    // Adicionar animação ao scroll
    Portfolio.prototype.addScrollAnimation = function () {
        var observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
        };
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);
        // Observar elementos animáveis
        var animatableElements = document.querySelectorAll('.project-card, .work-item, .skill-item');
        animatableElements.forEach(function (el) {
            observer.observe(el);
        });
    };
    return Portfolio;
}());

// ==================== EVENT LISTENERS GLOBAIS ==================== 

// Fechar menu ao clicar fora
document.addEventListener('click', function (e) {
    var navMenu = document.querySelector('.nav-menu');
    var menuToggle = document.querySelector('.menu-toggle');
    if (navMenu && menuToggle &&
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
        }
    });
});

// ==================== INICIALIZAÇÃO ==================== 

// Aguardar o DOM estar carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        new Portfolio();
    });
} else {
    new Portfolio();
}

// Adicionar estilos de animação dinamicamente
var style = document.createElement('style');
style.textContent = "\n    @keyframes slideIn {\n        from {\n            transform: translateX(400px);\n            opacity: 0;\n        }\n        to {\n            transform: translateX(0);\n            opacity: 1;\n        }\n    }\n\n    .notification-success {\n        border-left: 4px solid #059669;\n    }\n\n    .notification-error {\n        border-left: 4px solid #dc2626;\n    }\n\n    .animate {\n        animation: fadeInUp 0.6s ease-out forwards;\n    }\n\n    @keyframes fadeInUp {\n        from {\n            opacity: 0;\n            transform: translateY(20px);\n        }\n        to {\n            opacity: 1;\n            transform: translateY(0);\n        }\n    }\n";
document.head.appendChild(style);
