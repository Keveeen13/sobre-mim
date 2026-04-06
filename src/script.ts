// ==================== TIPOS ==================== 
interface TabElement extends HTMLElement {
    id: string;
}

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// ==================== CLASSE PORTFOLIO ==================== 
class Portfolio {
    private currentTab: string = 'home';
    private navButtons: NodeListOf<HTMLElement>;
    private tabContents: NodeListOf<HTMLElement>;
    private contactForm: HTMLFormElement | null;
    private menuToggle: HTMLElement | null;
    private navMenu: HTMLElement | null;
    private ctaButton: HTMLElement | null;

    constructor() {
        this.navButtons = document.querySelectorAll('.nav-btn');
        this.tabContents = document.querySelectorAll('.tab-content');
        this.contactForm = document.getElementById('contactForm') as HTMLFormElement;
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.ctaButton = document.querySelector('.cta-button');

        this.init();
    }

    // Inicialização do portfolio
    private init(): void {
        this.setupNavigation();
        this.setupFormHandler();
        this.setupCTAButton();
        this.setupMobileMenu();
        this.addScrollAnimation();
    }

    // Setup da navegação entre abas
    private setupNavigation(): void {
        this.navButtons.forEach((button: HTMLElement) => {
            button.addEventListener('click', (e: Event) => {
                this.handleTabClick(e as MouseEvent);
            });
        });
    }

    // Handle clique em aba
    private handleTabClick(event: MouseEvent): void {
        const button = event.target as HTMLElement;
        const tabName = button.getAttribute('data-tab');

        if (!tabName) return;

        this.switchTab(tabName);
        this.closeMenuIfOpen();
    }

    // Alternar abas
    private switchTab(tabName: string): void {
        // Remove classe active de todos os botões e conteúdos
        this.navButtons.forEach((btn: HTMLElement) => {
            btn.classList.remove('active');
        });

        this.tabContents.forEach((content: HTMLElement) => {
            content.classList.remove('active');
        });

        // Adiciona classe active ao botão e conteúdo corretos
        const activeButton = document.querySelector(
            `[data-tab="${tabName}"]`
        ) as HTMLElement;
        const activeContent = document.getElementById(tabName) as TabElement;

        if (activeButton) {
            activeButton.classList.add('active');
        }

        if (activeContent) {
            activeContent.classList.add('active');
        }

        this.currentTab = tabName;

        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Setup do formulário de contato
    private setupFormHandler(): void {
        if (!this.contactForm) return;

        this.contactForm.addEventListener('submit', (e: SubmitEvent) => {
            e.preventDefault();
            this.handleFormSubmit();
        });
    }

    // Handle submissão do formulário
    private handleFormSubmit(): void {
        if (!this.contactForm) return;

        const formData: ContactFormData = {
            name: (this.contactForm.querySelector('#name') as HTMLInputElement)
                .value,
            email: (this.contactForm.querySelector('#email') as HTMLInputElement)
                .value,
            subject: (
                this.contactForm.querySelector('#subject') as HTMLInputElement
            ).value,
            message: (
                this.contactForm.querySelector('#message') as HTMLTextAreaElement
            ).value,
        };

        // Validação básica
        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            this.showNotification('Por favor, preencha todos os campos', 'error');
            return;
        }

        // Validação de email
        if (!this.isValidEmail(formData.email)) {
            this.showNotification('Por favor, insira um email válido', 'error');
            return;
        }

        // Simular envio
        this.showNotification(
            'Mensagem enviada com sucesso! Obrigado pelo contato.',
            'success'
        );
        this.contactForm.reset();
    }

    // Validar email
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Mostrar notificação
    private showNotification(message: string, type: 'success' | 'error'): void {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
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
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }

    // Setup botão CTA
    private setupCTAButton(): void {
        if (!this.ctaButton) return;

        this.ctaButton.addEventListener('click', () => {
            this.switchTab('contact');
        });
    }

    // Setup menu mobile
    private setupMobileMenu(): void {
        if (!this.menuToggle) return;

        this.menuToggle.addEventListener('click', () => {
            if (this.navMenu) {
                this.navMenu.classList.toggle('active');
            }
        });
    }

    // Fechar menu se aberto
    private closeMenuIfOpen(): void {
        if (this.navMenu && this.navMenu.classList.contains('active')) {
            this.navMenu.classList.remove('active');
        }
    }

    // Adicionar animação ao scroll
    private addScrollAnimation(): void {
        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observar elementos animáveis
        const animatableElements = document.querySelectorAll(
            '.project-card, .work-item, .skill-item'
        );
        animatableElements.forEach((el) => {
            observer.observe(el);
        });
    }
}

// ==================== EVENT LISTENERS GLOBAIS ==================== 

// Fechar menu ao clicar fora
document.addEventListener('click', (e: MouseEvent) => {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    if (
        navMenu &&
        menuToggle &&
        !navMenu.contains(e.target as Node) &&
        !menuToggle.contains(e.target as Node)
    ) {
        navMenu.classList.remove('active');
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
        }
    });
});

// ==================== INICIALIZAÇÃO ==================== 

// Aguardar o DOM estar carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Portfolio();
    });
} else {
    new Portfolio();
}

// Adicionar estilos de animação dinamicamente
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

    .notification-success {
        border-left: 4px solid #059669;
    }

    .notification-error {
        border-left: 4px solid #dc2626;
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
