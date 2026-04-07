import React from 'react';
import './About.css';

function About() {
  const skills = [
    { icon: '💻', name: 'Frontend' },
    { icon: '⚙️', name: 'Backend' },
    { icon: '🎨', name: 'Design UI/UX' },
    { icon: '📱', name: 'Mobile' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Sou um desenvolvedor apaixonado por criar soluções web inovadoras e interfaces
              elegantes. Com experiência em desenvolvimento web e Design UI/UX, tenho dedicado meu tempo
              para estudar e dominar as tecnologias mais modernas.
            </p>
            <p>
              Minha jornada começou com curiosidade sobre como as coisas funcionam na web,
              e evoluiu para a criação de projetos que impactam pessoas de verdade.
            </p>
            <p>
              Quando não estou codificando, estou aprendendo novas tecnologias, contribuindo
              para a comunidade de desenvolvimento ou buscando inspiração em projetos criativos.
            </p>
          </div>
          <div className="skills-list">
            <h3>Habilidades Principais</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
