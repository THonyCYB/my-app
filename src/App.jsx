import './App.css';  // Assicurati che il tuo file CSS sia importato

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Zeus</h1>
        </div>
        <div className="navbar-center">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h2>Proteggi ciò che conta di più</h2>
          <p>Con le nostre soluzioni assicurative, garantiamo tranquillità per te e la tua famiglia.</p>
          <button className="cta-button">Scopri di più</button>
        </div>
      </header>

      {/* Servizi Section */}
      <section className="services">
        <h2>I nostri Servizi</h2>
        <div className="service-card">
          <h3>Assicurazione Auto</h3>
          <p>Proteggi la tua auto con polizze su misura che ti offrono sicurezza in ogni situazione.</p>
        </div>
        <div className="service-card">
          <h3>Assicurazione Vita</h3>
          <p>Un futuro sereno per te e la tua famiglia, con soluzioni pensate per ogni esigenza.</p>
        </div>
        <div className="service-card">
          <h3>Assicurazione Casa</h3>
          <p>Proteggi la tua casa da ogni imprevisto con polizze pensate per ogni evenienza.</p>
        </div>
      </section>

      {/* Testimonianze Section */}
      <section className="testimonials">
        <h2>Cosa dicono i nostri clienti</h2>
        <div className="testimonial-card">
          <p>Zeus Assicurazioni mi ha dato la tranquillità di cui avevo bisogno. Un servizio davvero eccellente!</p>
          <span>- Giovanni R.</span>
        </div>
        <div className="testimonial-card">
          <p>Mi sono trovato benissimo, hanno risolto ogni mia esigenza con professionalità e rapidità.</p>
          <span>- Maria P.</span>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Ottieni il tuo Preventivo Gratuito</h2>
        <button className="cta-button">Richiedi un Preventivo</button>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Zeus Assicurazioni | Contatti: info@zeusassicurazioni.com</p>
      </footer>
    </div>
  );
}

export default App;
