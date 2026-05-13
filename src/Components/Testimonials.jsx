function Testimonials() {
  return (
    <section>
      <p>Kundomdömen</p>
      <h2>Vad våra kunder säger</h2>

      <div className="testimonials-grid">
        <article className="testimonial-card">
          <p>
            "Vi fick en modern och professionell hemsida som verkligen
            förbättrade vårt företag online."
          </p>

          <h4>Anders Svensson</h4>
          <span>Byggfirma AB</span>
        </article>

        <article className="testimonial-card">
          <p>
            "Snabb support, bra kommunikation och ett väldigt snyggt resultat."
          </p>

          <h4>Maria Lind</h4>
          <span>Restaurang Helsingborg</span>
        </article>

        <article className="testimonial-card">
          <p>
            "Väldigt nöjd med både design och funktionalitet på vår nya hemsida."
          </p>

          <h4>Johan Eriksson</h4>
          <span>Nordic Consulting</span>
        </article>
      </div>
    </section>
  )
}

export default Testimonials