function Pricing() {
  return (
    <section>
      <p>Priser & paket</p>
      <h2>Välj ett upplägg som passar ditt företag</h2>

      <div className="pricing-grid">
        <article className="pricing-card">
          <h3>Startpaket</h3>
          <p>För mindre företag som behöver en enkel och professionell hemsida.</p>
          <h4>Från 4 999 kr</h4>
          <ul>
            <li>1–3 sidor</li>
            <li>Responsiv design</li>
            <li>Kontaktformulär</li>
          </ul>
          <button>Boka konsultation</button>
        </article>

        <article className="pricing-card">
          <h3>Företagspaket</h3>
          <p>För företag som vill ha en mer komplett och anpassad webblösning.</p>
          <h4>Från 9 999 kr</h4>
          <ul>
            <li>Upp till 6 sidor</li>
            <li>SEO-grund</li>
            <li>API-koppling vid behov</li>
          </ul>
          <button>Boka konsultation</button>
        </article>

        <article className="pricing-card">
          <h3>Supportpaket</h3>
          <p>För företag som vill ha löpande underhåll och support.</p>
          <h4>Från 799 kr/mån</h4>
          <ul>
            <li>Uppdateringar</li>
            <li>Felsökning</li>
            <li>Teknisk support</li>
          </ul>
          <button>Boka konsultation</button>
        </article>
      </div>
      <section className="special-package">

  <span>Populär lösning</span>

  <h2>Speciallösningar & Uppgraderingar</h2>

  <p>
    För företag som vill modernisera sin nuvarande webbplats,
    förbättra prestanda eller lägga till nya funktioner.
  </p>

  <h3>Från 800 kr/h</h3>

  <div className="special-tags">
    <p>UI/UX</p>
    <p>SEO</p>
    <p>API Integration</p>
    <p>Performance</p>
    <p>Support</p>
  </div>

  <button>Boka konsultation</button>

</section>

    </section>

    
    
  )
}

export default Pricing