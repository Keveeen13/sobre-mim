// ==================== VARIÁVEIS E ESTADO ==================== 
let currentTab = 'home';

// ==================== SELEÇÃO DE ELEMENTOS ==================== 
const navButtons = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');
const contactForm = document.getElementById('contactForm');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const ctaButton = document.querySelector('.cta-button');

// ==================== EVENT LISTENERS DE NAVEGAÇÃO ==================== 
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        switchTab(tabName);
        closeMenuIfOpen();
    });
});

// ==================== FUNÇÃO ALTERNAR ABAS ==================== 
function switchTab(tabName) {
    // Remove classe active de todos os botões
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    // Remove classe active de todos os conteúdos
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Adiciona classe active ao botão correto
    const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Adiciona classe active ao conteúdo correto
    const activeContent = document.getElementById(tabName);
    if (activeContent) {
        activeContent.classList.add('active');
    }
    
    currentTab = tabName;
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== MENU MOBILE ==================== 
menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar fora
document.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

function closeMenuIfOpen() {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}

// ==================== BOTÃO CTA ==================== 
ctaButton.addEventListener('click', function() {
    switchTab('contact');
});

// ==================== FORMULÁRIO DE CONTATO ==================== 
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    handleFormSubmit();
});

function handleFormSubmit() {
    const formData = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        subject: document.querySelector('#subject').value,
        message: document.querySelector('#message').value,
    };
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showNotification('Por favor, preencha todos os campos', 'error');
        return;
    }
    
    // Validação de email
    if (!isValidEmail(formData.email)) {
        showNotification('Por favor, insira um email válido', 'error');
        return;
    }
    
    // Simular envio
    showNotification('Mensagem enviada com sucesso! Obrigado pelo contato.', 'success');
    contactForm.reset();
}

// ==================== VALIDAÇÃO DE EMAIL ==================== 
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==================== NOTIFICAÇÕES ==================== 
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        zIndex: '1000',
        animation: 'slideIn 0.3s ease-out',
        color: 'white',
        fontWeight: '600',
    });
    
    if (type === 'success') {
        Object.assign(notification.style, {
            background: '#10b981',
            borderLeft: '4px solid #059669',
        });
    } else {
        Object.assign(notification.style, {
            background: '#ef4444',
            borderLeft: '4px solid #dc2626',
        });
    }
    
    document.body.appendChild(notification);
    
    // Remover notificação após 4 segundos
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// ==================== ANIMAÇÕES AO SCROLL ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos animáveis
const animatableElements = document.querySelectorAll(
    '.project-card, .work-item, .skill-item'
);
animatableElements.forEach(el => {
    observer.observe(el);
});

// ==================== ESTILOS DE ANIMAÇÃO DINÂMICOS ==================== 
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .animate {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
