# 🚀 Portfólio React - Guia de Instalação e Uso

Bem-vindo ao seu novo portfólio construído com **React**! Este projeto foi completamente refatorado para usar React em vez de TypeScript vanilla.

## 📋 Conteúdo

- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Personalização](#personalização)
- [Deployment](#deployment)
- [Componentes](#componentes)

## 💻 Instalação

### Pré-requisitos
- Node.js 14+ instalado
- npm ou yarn

### Passos

1. **Acesse a pasta do projeto:**
```bash
cd "c:\Users\otaku\Desktop\sobre mim"
```

2. **Instale as dependências:**
```bash
npm install
```

Isso instalará React, React DOM e todas as dependências necessárias.

## 🚀 Como Executar

### Modo de Desenvolvimento
Para desenvolver e testar localmente:

```bash
npm start
```

O projeto abrirá automaticamente em `http://localhost:3000` no seu navegador.

### Build para Produção
Para criar uma versão otimizada para produção:

```bash
npm run build
```

Isso cria uma pasta `build/` com todos os arquivos prontos para deploy.

## 📁 Estrutura do Projeto

```
📦 sobre mim/
├── 📁 public/
│   └── 📄 index.html          # HTML raiz do React
├── 📁 src/
│   ├── 📄 index.jsx           # Entry point do React
│   ├── 📄 index.css           # Estilos globais
│   ├── 📄 App.jsx             # Componente principal
│   ├── 📄 App.css             # Estilos do App
│   ├── 📁 components/
│   │   ├── 📄 Navbar.jsx      # Componente de navegação
│   │   ├── 📄 Navbar.css
│   │   ├── 📄 Footer.jsx      # Componente de rodapé
│   │   └── 📄 Footer.css
│   └── 📁 pages/
│       ├── 📄 Home.jsx        # Página inicial
│       ├── 📄 Home.css
│       ├── 📄 About.jsx       # Página sobre mim
│       ├── 📄 About.css
│       ├── 📄 Projects.jsx    # Página de projetos
│       ├── 📄 Projects.css
│       ├── 📄 Work.jsx        # Página de atuação
│       ├── 📄 Work.css
│       ├── 📄 Contact.jsx     # Página de contato
│       └── 📄 Contact.css
├── 📄 package.json            # Dependências e scripts
├── 📄 .env                    # Variáveis de ambiente
└── 📄 README.md              # Este arquivo
```

## 🎨 Personalização

### Mudar Informações Básicas

#### Nome/Título
Edite [src/pages/Home.jsx](src/pages/Home.jsx):
```jsx
<h1 className="hero-title">Olá, eu sou você</h1>
<p className="hero-subtitle">Seu Título Aqui</p>
```

#### Sobre Mim
Edite [src/pages/About.jsx](src/pages/About.jsx) - modifique os parágrafos:
```jsx
<p>Seu texto aqui...</p>
```

#### Adicionar Projetos
Edite [src/pages/Projects.jsx](src/pages/Projects.jsx) e adicione na array `projects`:
```jsx
{
  id: 5,
  title: 'Novo Projeto',
  description: 'Descrição do projeto.',
  tags: ['Tech1', 'Tech2'],
}
```

#### Adicionar Áreas de Trabalho
Edite [src/pages/Work.jsx](src/pages/Work.jsx) e adicione na array `workItems`:
```jsx
{
  id: 7,
  icon: '🎯',
  title: 'Sua Área',
  description: 'Descrição da sua área.',
}
```

#### Informações de Contato
Edite [src/pages/Contact.jsx](src/pages/Contact.jsx):
```jsx
<a href="mailto:seu-email@exemplo.com">seu-email@exemplo.com</a>
<a href="tel:+5511999999999">+55 (11) 9 9999-9999</a>
```

### Personalizar Cores

Edite [src/App.css](src/App.css) no início do arquivo:
```css
:root {
  --primary-dark: #0a0e27;        /* Cor de fundo */
  --accent-color: #00d4ff;         /* Cor principal (ciano) */
  --accent-secondary: #7c3aed;     /* Cor secundária (roxo) */
  /* ... outras cores */
}
```

**Exemplos de paletas:**
```css
/* Tema vermelho */
--accent-color: #ff6b6b;
--accent-secondary: #ee5a6f;

/* Tema verde */
--accent-color: #10b981;
--accent-secondary: #059669;

/* Tema laranja */
--accent-color: #f97316;
--accent-secondary: #ea580c;
```

## 🌐 Deployment

### Opção 1: Vercel (Recomendado para React)
```bash
npm i -g vercel
vercel
```

Ou conecte seu repositório GitHub no painel Vercel.

### Opção 2: Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=build
```

### Opção 3: GitHub Pages
1. Adicione ao `package.json`:
```json
"homepage": "https://seu-usuario.github.io/seu-repo"
```

2. Instale `gh-pages`:
```bash
npm install --save-dev gh-pages
```

3. Adicione scripts ao `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## 🧩 Componentes

### Navbar (`src/components/Navbar.jsx`)
- Navegação entre páginas
- Menu responsivo mobile
- Indicador de página ativa

### Footer (`src/components/Footer.jsx`)
- Créditos e links
- Responsivo

### Home (`src/pages/Home.jsx`)
- Hero section
- Animações de entrada
- Forma geométrica animada

### About (`src/pages/About.jsx`)
- Informações pessoais
- Grid de habilidades
- Cards interativos

### Projects (`src/pages/Projects.jsx`)
- Grid de projetos responsivo
- Cards com tags e links
- Hover effects

### Work (`src/pages/Work.jsx`)
- Cards de áreas de atuação
- Ícones e descrições
- Layout responsivo

### Contact (`src/pages/Contact.jsx`)
- Formulário com validação
- Campos de informações de contato
- Sistema de notificações
- Links sociais

## 📦 Dependências

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1"
}
```

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm test` - Executa testes
- `npm run eject` - Ejeta configurações (não recomendado)

## 🎯 Próximos Passos

1. ✅ Instale as dependências: `npm install`
2. ✅ Execute localmente: `npm start`
3. ✅ Personalize todas as informações
4. ✅ Teste em diferentes telas
5. ✅ Faça build: `npm run build`
6. ✅ Faça deploy

## 📞 Suporte

- Documentação React: https://react.dev
- Create React App: https://create-react-app.dev
- Vercel Docs: https://vercel.com/docs

---

**Boa sorte com seu portfólio React!** 🚀

Desenvolvido com ❤️ usando React, HTML e CSS
