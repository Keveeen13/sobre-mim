# Portfólio Pessoal

Um portfólio moderno e responsivo desenvolvido com **HTML5**, **CSS3** e **JavaScript vanilla** puro.

## 🎨 Características

- **Design Escuro Moderno** - Tema escuro sofisticado com gradientes ciano e roxo
- **Totalmente Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **5 Seções Principais**:
  - 🏠 **Início** - Apresentação com hero section
  - 👤 **Sobre Mim** - Informações pessoais e habilidades
  - 💼 **Projetos** - Galeria de projetos com tags e links
  - 🎯 **Atuação** - Áreas de trabalho e especialidades
  - 📧 **Contato** - Formulário de contato e informações
  
- **Interatividade Completa**
  - Navegação com abas
  - Formulário de contato com validação
  - Menu mobile funcional
  - Animações suaves
  - Notificações visuais

✅ **Tecnologias**
- HTML5
- CSS3 (Flexbox, Grid, Animações, Gradientes)
- JavaScript Vanilla (sem frameworks)

## 🚀 Como Usar

### Abrir o Projeto
Simplesmente abra o arquivo `index.html` em seu navegador:

**No Windows (PowerShell):**
```powershell
# Navegue até a pasta do projeto
cd "sobre mim"

# Abra no navegador padrão
Start-Process .\index.html
```

**Ou manualmente:** Clique duas vezes em `index.html`

### Editar o Projeto

O projeto está totalmente organizado para edições fáceis:

1. **HTML** - Edite `index.html` para mudar conteúdo e estrutura
2. **CSS** - Edite `css/style.css` para ajustar cores, fonts e layouts
3. **JavaScript** - Edite `js/script.js` para alterar funcionalidades

## 📁 Estrutura do Projeto

```
sobre mim/
├── index.html          # Arquivo HTML principal
├── css/
│   └── style.css       # Todos os estilos
├── js/
│   └── script.js       # Toda a lógica JavaScript
├── README.md           # Este arquivo
└── .gitignore          # Configurações do Git
```

## 🎨 Personalização

### Mudar Cores
Abra `css/style.css` e localize a seção `:root`:
```css
:root {
    --accent-color: #00d4ff;        /* Mude aqui */
    --accent-secondary: #7c3aed;   /* Mude aqui */
    /* ... outras cores */
}
```

### Adicionar Novo Projeto
Em `index.html`, dentro da seção de Projetos, duplique um `.project-card` e atualize as informações.

### Mudar Informações de Contato
Em `index.html`, procure pela seção `id="contact"` e atualize emails, telefones e links de redes sociais.

## 🎨 Paleta de Cores

- **Fundo Principal**: `#0a0e27`
- **Fundo Secundário**: `#1a1f3a`
- **Texto Principal**: `#e0e6ff`
- **Texto Secundário**: `#a0a8c8`
- **Acento Ciano**: `#00d4ff`
- **Acento Roxo**: `#7c3aed`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints automáticos:
- **Desktop**: Acima de 1200px
- **Tablet**: Entre 768px e 1200px
- **Mobile**: Abaixo de 768px

## ✨ Funcionalidades JavaScript

- **Navegação por Abas**: Alternar entre seções sem recarregar
- **Menu Mobile**: Hamburger menu automático em telas pequenas
- **Validação de Formulário**: Email e campos obrigatórios
- **Notificações**: Feedback visual ao enviar mensagens
- **Animações**: Efeitos de entrada suaves em scroll
- **Observer API**: Detecção de elementos visíveis para animações

## 🔐 Segurança

- Sem dependências externas
- Sem bibliotecas JavaScript desnecessárias
- Validação de email com regex
- Proteção contra XSS (escaping automático)

## 📝 Notas

- Este é um portfólio **estático** - ideal para hospedagem rápida
- Sem servidor necessário - apenas serve HTML, CSS e JS
- Perfeito para integrar com serviços como **GitHub Pages**, **Vercel** ou **Netlify**

---

**Desenvolvido com ❤️ usando HTML, CSS e JavaScript Vanilla**
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
