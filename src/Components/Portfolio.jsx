function Portfolio() {
  return (
    <section>
      <p>Tidigare projekt</p>
      <h2>Några exempel på våra webblösningar</h2>

      <div className="portfolio-grid">
        <article className="portfolio-card">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="Projekt 1"
            width="300"
          />

          <h3>Restaurang hemsida</h3>

          <p>
            Modern och responsiv hemsida för restaurang med meny,
            bokningsfunktion och kontaktformulär.
          </p>
        </article>

        <article className="portfolio-card">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="Projekt 2"
            width="300"
          />

          <h3>Byggföretag</h3>

          <p>
            Professionell företagshemsida för byggfirma med tjänster,
            referenser och offertförfrågan.
          </p>
        </article>

        <article className="portfolio-card">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt="Projekt 3"
            width="300"
          />

          <h3>E-handel</h3>

          <p>
            Enkel och stilren e-handelsdesign med fokus på användarvänlighet
            och mobilanpassning.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Portfolio