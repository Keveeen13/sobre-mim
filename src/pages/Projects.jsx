import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Nome do Projeto 1',
      description: 'Descrição breve do projeto. Tecnologias utilizadas: HTML, CSS, JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 2,
      title: 'Nome do Projeto 2',
      description: 'Descrição breve do projeto. Tecnologias utilizadas: React, Redux, Node.js.',
      tags: ['React', 'Redux', 'Node.js'],
    },
    {
      id: 3,
      title: 'Nome do Projeto 3',
      description: 'Descrição breve do projeto. Tecnologias utilizadas: Vue, Tailwind, Firebase.',
      tags: ['Vue', 'Tailwind', 'Firebase'],
    },
    {
      id: 4,
      title: 'Nome do Projeto 4',
      description: 'Descrição breve do projeto. Tecnologias utilizadas: Python, Django, PostgreSQL.',
      tags: ['Python', 'Django', 'PostgreSQL'],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Projeto {project.id}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a href="#" className="project-link">Ver Projeto →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
