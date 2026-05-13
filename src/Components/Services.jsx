function Services() {
  return (
    <section>
      <p>Våra tjänster</p>
      <h2>Webblösningar för företag</h2>

      <div className="services-grid">
        <article>
          <h3>Hemsidor</h3>
          <p>Moderna och responsiva hemsidor anpassade efter företagets behov.</p>
        </article>

        <article className="service-card">
          <h3>Webbdesign</h3>
          <p>Design med fokus på användarvänlighet, tydlighet och professionellt intryck.</p>
        </article>

        <article className="service-card">
          <h3>Support & underhåll</h3>
          <p>Löpande uppdateringar, felsökning och teknisk support vid behov.</p>
        </article>
      </div>
    </section>
  )
}

export default Services