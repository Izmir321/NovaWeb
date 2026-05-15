import heroImg from '../assets/NovaHero.jpg'

function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-image">
        <img src={heroImg} alt="Webbyrå arbete" />
      </div>

      <div className="feature-content">
        <span>Varför välja oss</span>

        <h2>Vi hjälper företag att växa digitalt</h2>

        <p>
          Vi bygger moderna och användarvänliga webbplatser med fokus på design,
          prestanda och användarupplevelse. Våra lösningar är anpassade för både
          små och stora företag.
        </p>

        <ul>
          <li>Responsiv design</li>
          <li>SEO-optimering</li>
          <li>Support & underhåll</li>
          <li>Snabba laddningstider</li>
        </ul>

       
      </div>
    </section>
  )
}

export default FeatureSection