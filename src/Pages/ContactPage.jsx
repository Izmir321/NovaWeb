import { useState } from 'react'
import toast from 'react-hot-toast'


function ContactPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    package: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const response = await fetch('http://localhost:5198/api/ContactRequests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {

       toast.success('Förfrågan skickad!')

        setFormData({
          name: '',
          email: '',
          company: '',
          package: '',
          message: ''
        })

      } else {
        alert('Något gick fel.')
      }

    } catch (error) {
      console.error(error)
      toast.error('Något gick fel.')
    }
  }

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
              <h3>Företagspaket Från 9 999 kr</h3>

              <p>
                För företag som behöver en mer avancerad webbplats med flera undersidor,
                specialanpassad design och möjlighet till API- eller databaskopplingar.
              </p>
            </article>

            <article>
              <h3>Uppgraderingspaket Från 800 kr/h</h3>

              <p>
                Ett löpande supportavtal där vi hjälper till med uppdateringar,
                felsökning, säkerhet och tekniskt underhåll av webbplatsen.
              </p>
            </article>

            <article>
              <h3>Månadsavtal Från 799 kr/mån</h3>

              <p>
                Passar företag som vill ha löpande support och underhåll.
              </p>
            </article>

            <article>
              <h3>Färdiga Templates</h3>

              <p>
                För kunder som vill komma igång snabbt erbjuder vi färdiga templates
                som kan anpassas med färger, texter, bilder och funktioner efter företagets behov.
              </p>
            </article>

          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Namn"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="E-post"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Företag"
            value={formData.company}
            onChange={handleChange}
          />

          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
          >
            <option value="">Välj paket</option>
            <option value="Startpaket">Startpaket</option>
            <option value="Företagspaket">Företagspaket</option>
            <option value="Månadsavtal">Månadsavtal</option>
            <option value="Färdig Template">Färdig Template</option>
          </select>

          <textarea
            name="message"
            rows="6"
            placeholder="Berätta kort om ditt projekt..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Skicka förfrågan
          </button>

          <p>Vi återkommer vanligtvis inom 24 timmar.</p>

        </form>

      </div>
    </section>
  )
}

export default ContactPage