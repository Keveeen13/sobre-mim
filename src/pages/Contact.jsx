import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showNotification('Por favor, preencha todos os campos', 'error');
      return;
    }

    if (!isValidEmail(formData.email)) {
      showNotification('Por favor, insira um email válido', 'error');
      return;
    }

    showNotification('Mensagem enviada com sucesso! Obrigado pelo contato.', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Vamos nos conectar!</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Entre em Contato</h3>
            <p>Estou sempre aberto a novas oportunidades e conversas interessantes.</p>

            <div className="contact-methods">
              <a href="mailto:seu-email@exemplo.com" className="contact-method">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>seu-email@exemplo.com</p>
                </div>
              </a>
              <a href="tel:+5511999999999" className="contact-method">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Telefone</strong>
                  <p>+55 (11) 9 9999-9999</p>
                </div>
              </a>
              <div className="contact-method">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Localização</strong>
                  <p>São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Encontre-me em:</h4>
              <div className="social-icons">
                <a href="#" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
                <a href="#" target="_blank" rel="noreferrer" title="GitHub">gh</a>
                <a href="#" target="_blank" rel="noreferrer" title="Twitter">tw</a>
                <a href="#" target="_blank" rel="noreferrer" title="Instagram">ig</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
        </div>
      </div>

      {notification && (
        <div className={`notification notification-${notification.type}`}>
          {notification.message}
        </div>
      )}
    </section>
  );
}

export default Contact;
