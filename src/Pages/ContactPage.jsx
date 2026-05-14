function ContactPage() {
  return (
    <section className="contact-page">
      <p>Kontakta oss</p>
      <h1>Starta ditt nästa webbprojekt med oss</h1>

      <div className="contact-page-grid">
        <div className="contact-info">
          <h2>Varför välja oss?</h2>
          <p>
            Vi hjälper företag att skapa moderna, responsiva och professionella
            hemsidor med fokus på design, funktionalitet och långsiktig support.
          </p>

          <ul>
            <li>Moderna hemsidor för företag</li>
            <li>Engångsprojekt eller månadsupplägg</li>
            <li>Support och underhåll vid behov</li>
            <li>Frontend, backend och API-lösningar</li>
          </ul>

          <div className="contact-packages">
            <article>
              <h3>Engångsprojekt Från 4 999 kr</h3>
              <p>
              Passar företag som vill beställa en modern och professionell hemsida.
              Paketet inkluderar responsiv design, kontaktformulär och grundläggande SEO.
                  </p>
              
            </article>

             <article>
              <h3>Företagspaket Från 9 999kr </h3>
              <p>För företag som behöver en mer avancerad webbplats med flera undersidor,
               specialanpassad design och möjlighet till API- eller databaskopplingar.</p>
            </article>

              <article>
              <h3>Uppgraderingspaket Från 800kr/h </h3>
              <p>Ett löpande supportavtal där vi hjälper till med uppdateringar,
                 felsökning, säkerhet och tekniskt underhåll av webbplatsen.  
              </p>
            </article>

            <article>
              <h3>Månadsavtal Från 799kr/mån </h3>
              <p>Passar företag som vill ha löpande support och underhåll.</p>
            </article>
            

          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Namn" />
          <input type="email" placeholder="E-post" />
          <input type="text" placeholder="Företag" />

          <select>
            <option>Välj paket</option>
            <option>Startpaket</option>
            <option>Företagspaket</option>
            <option>Månadsavtal</option>
          </select>

          <textarea rows="6" placeholder="Berätta kort om ditt projekt..."></textarea>

          <button type="submit">Skicka förfrågan</button>
        </form>
      </div>
    </section>
  )
}

export default ContactPage