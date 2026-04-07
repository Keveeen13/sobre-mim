import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Olá, eu sou você</h1>
          <p className="hero-subtitle">Desenvolvedor | Criador | Inovador</p>
          <p className="hero-description">
            Bem-vindo ao meu portfólio! Aqui você encontrará informações sobre meus projetos,
            experiências e como posso ajudar você.
          </p>
          <button className="cta-button">Vamos Conversar</button>
        </div>
        <div className="hero-visual">
          <div className="geometric-shape"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
