import { useState } from 'react'

function Contact() {

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
        alert('Förfrågan skickad!')
        
        setFormData({
          name: '',
          email: '',
          company: '',
          package: '',
          message: ''
        })
      }

    } catch (error) {
      console.error(error)
      alert('Något gick fel')
    }
  }

  return (
    <section>
      <p>Kontakt</p>

      <h2>Kontakta oss</h2>

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

        <input
          type="text"
          name="package"
          placeholder="Valt paket"
          value={formData.package}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Berätta om ditt projekt..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Skicka förfrågan
        </button>

      </form>
    </section>
  )
}

export default Contact