function Contact() {
  return (
    <section>
      <p>Kontakt</p>
      <h2>Kontakta oss</h2>

      <form className="contact-form">
        <input type="text" placeholder="Namn" />

        <input type="email" placeholder="E-post" />

        <input type="text" placeholder="Företag" />

        <textarea
          placeholder="Berätta om ditt projekt..."
          rows="5"
        ></textarea>

        <button type="submit">Skicka förfrågan</button>
      </form>
    </section>
  )
}

export default Contact