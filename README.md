# 🌟 Portfólio Pessoal - React

Um portfólio moderno, interativo e responsivo construído com **React**, **HTML5** e **CSS3**. Design escuro elegante com cores vibrantes e animações suaves.

## 🎯 Características

✅ **Design Moderno Escuro**
- Paleta de cores profissional (preto, ciano e roxo)
- Animações suaves e transições elegantes
- Totalmente responsivo (desktop, tablet, mobile)

✅ **5 Páginas Completas**
- 🏠 **Início**: Hero section com apresentação
- 👤 **Sobre Mim**: Bio e habilidades principais
- 🎨 **Projetos**: Galeria de trabalhos
- 💼 **Atuação**: Áreas de expertise
- 📧 **Contato**: Formulário com validação

✅ **Interatividade**
- Navegação fluida entre páginas
- Menu responsivo (desktop e mobile)
- Formulário com validação em tempo real
- Notificações de sucesso/erro
- Scroll animations

✅ **Tecnologias**
- React 18+
- CSS3 (Flexbox, Grid, Animações)
- Componentes funcionais com Hooks

## 🚀 Começar

### Instalação

```bash
# Clonar/acessar a pasta
cd "c:\Users\otaku\Desktop\sobre mim"

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
npm start
```

Abre automaticamente em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
📦 sobre mim/
├── 📁 public/
│   └── 📄 index.html              # Template HTML do React
├── 📁 src/
│   ├── 📄 index.jsx               # Entry point
│   ├── 📄 index.css               # Estilos globais
│   ├── 📄 App.jsx                 # Componente raiz
│   ├── 📄 App.css
│   ├── 📁 components/             # Componentes reutilizáveis
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   └── 📁 pages/                  # Páginas
│       ├── Home.jsx & Home.css
│       ├── About.jsx & About.css
│       ├── Projects.jsx & Projects.css
│       ├── Work.jsx & Work.css
│       └── Contact.jsx & Contact.css
├── 📄 package.json                # Dependências
├── 📄 .env                        # Variáveis de ambiente
├── 📄 .gitignore
└── 📄 REACT_SETUP.md              # Guia detalhado
```

## 🎨 Personalização

### 1. Alterar Nome/Título
Edite `src/pages/Home.jsx`:
```jsx
<h1 className="hero-title">Seu Nome Aqui</h1>
```

### 2. Editar Sobre
Edite `src/pages/About.jsx` - modifique os parágrafos `<p>`

### 3. Adicionar Projeto
Em `src/pages/Projects.jsx`, adicione à array `projects`:
```jsx
{
  id: 5,
  title: 'Novo Projeto',
  description: 'Descrição aqui...',
  tags: ['React', 'CSS'],
}
```

### 4. Modificar Cores
Edite `src/App.css` - seção `:root`:
```css
--accent-color: #ff6b6b;         /* Vermelho */
--accent-secondary: #f97316;     /* Laranja */
```

### 5. Informações de Contato
Edite `src/pages/Contact.jsx`:
```jsx
<a href="mailto:seu-email@exemplo.com">seu-email@exemplo.com</a>
```

## 📱 Responsividade

Testa automaticamente em:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1200px)  
- ✅ Mobile (até 480px)

Use **F12 → Ctrl+Shift+M** no navegador para testar responsividade.

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

Ou conecte no painel: https://vercel.com

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=build
```

### GitHub Pages
1. Edite `package.json`:
```json
"homepage": "https://seu-usuario.github.io/seu-repo"
```

2. Instale:
```bash
npm install --save-dev gh-pages
```

3. Adicione à `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## 📚 Componentes

| Componente | Arquivo | Função |
|-----------|---------|--------|
| `<App>` | `src/App.jsx` | Componente raiz, gerencia navegação |
| `<Navbar>` | `src/components/Navbar.jsx` | Menu de navegação |
| `<Footer>` | `src/components/Footer.jsx` | Rodapé |
| `<Home>` | `src/pages/Home.jsx` | Página inicial (hero) |
| `<About>` | `src/pages/About.jsx` | Sobre você e habilidades |
| `<Projects>` | `src/pages/Projects.jsx` | Galeria de projetos |
| `<Work>` | `src/pages/Work.jsx` | Áreas de atuação |
| `<Contact>` | `src/pages/Contact.jsx` | Formulário de contato |

## 🔧 Scripts Disponíveis

```bash
npm start      # Dev server (localhost:3000)
npm run build  # Build de produção
npm test       # Executar testes
npm run eject  # Ejeta config (não recomendado)
```

## 🎓 Aprender Mais

- [React Documentation](https://react.dev)
- [Create React App](https://create-react-app.dev)
- [MDN Web Docs](https://developer.mozilla.org)

## 💡 Dicas

1. **State Management**: Use `useState` para formulários e seleção de página
2. **Performance**: Components são otimizados para re-renderização
3. **SEO**: Adicione meta tags no `public/index.html`
4. **Analytics**: Integre Google Analytics ou Vercel Analytics

## 📝 Licença

MIT - Livre para usar e modificar

---

**Desenvolvido com ❤️ usando React, HTML5 e CSS3**

Versão: 2.0 (React)  
Data: 2026
