import React from 'react';
import './Work.css';

function Work() {
  const workItems = [
    {
      id: 1,
      icon: '💼',
      title: 'Desenvolvimento Web',
      description: 'Criação de websites modernos, responsivos e otimizados para todas as plataformas. Especializado em desenvolvimento front-end.',
    },
    {
      id: 2,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Criação de interfaces visuais atraentes e intuitivas com foco em experiência do usuário. Desenvolvimento de wireframes, protótipos e designs responsivos que combinam estética e funcionalidade.',
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Prototipagem no Figma',
      description: 'Desenvolvimento de protótipos interativos no Figma com fidelidade alta. Criação de fluxos de usuário, testes de usabilidade e documentação de design para facilitar a implementação.',
    },
    {
      id: 4,
      icon: '🚀',
      title: 'Integração e Deployment',
      description: 'Configuração de CI/CD, testes automatizados e deploy contínuo. Garantindo qualidade e estabilidade em produção.',
    },
    {
      id: 5,
      icon: '📊',
      title: 'Análise de Dados',
      description: 'Criação de dashboards interativos e visualizações de dados. Transformando dados brutos em insights acionáveis.',
    },
    {
      id: 6,
      icon: '🎓',
      title: 'Mentoria e Ensino',
      description: 'Compartilhamento de conhecimento com desenvolvedores. Criação de conteúdo educativo e orientação de carreira.',
    },
  ];

  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">No que Eu Trabalho</h2>
        <div className="work-content">
          {workItems.map((item) => (
            <div key={item.id} className="work-item">
              <div className="work-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
