function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">Varahi</div>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Creative digital experiences</p>
          <h1>Designing modern websites and brands with impact</h1>
          <p className="hero-text">
            Varahi builds elegant, responsive web experiences for businesses and
            creative teams. Clean design, focused content, and conversion-driven
            storytelling.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Start a project</a>
            <a className="button secondary" href="#services">View services</a>
          </div>
        </div>
        <div className="hero-visual" />
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <p>Services</p>
          <h2>What we do</h2>
        </div>
        <div className="cards-grid">
          <article className="card">
            <h3>Web Design</h3>
            <p>Fast, polished websites with modern layouts and an intuitive user journey.</p>
          </article>
          <article className="card">
            <h3>Brand Identity</h3>
            <p>Clear brand visuals and messaging that support consistency and recognition.</p>
          </article>
          <article className="card">
            <h3>Digital Strategy</h3>
            <p>Website strategy, content flow, and performance plans built around your goals.</p>
          </article>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading">
          <p>Selected work</p>
          <h2>Featured projects</h2>
        </div>
        <div className="work-grid">
          <div className="work-card">
            <div className="work-thumbnail" />
            <div>
              <h3>Product launch platform</h3>
              <p>A conversion-focused site for a launch campaign and audience growth.</p>
            </div>
          </div>
          <div className="work-card">
            <div className="work-thumbnail" />
            <div>
              <h3>Services showcase</h3>
              <p>An elegant digital presence for a premium service brand.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p>Connect</p>
          <h2>Let’s build something together</h2>
        </div>
        <p className="contact-copy">
          Share your project scope and timeline, and we’ll propose a website strategy
          tailored to your needs.
        </p>
        <a className="button primary" href="mailto:hello@varahi.com">hello@varahi.com</a>
      </section>

      <footer className="site-footer">
        <p>Varahi © 2026</p>
      </footer>
    </div>
  )
}

export default App
