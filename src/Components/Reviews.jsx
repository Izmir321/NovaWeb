function Reviews() {
  const reviews = [
    {
      name: 'Rebecca Koos',
      company: 'Restaurangägare',
      time: '8 timmar sedan',
      text: 'Vi fick en modern och professionell hemsida som gjorde det enklare för våra kunder att boka bord och hitta information.'
    },
    {
      name: 'Anders Nilsson',
      company: 'Byggföretag',
      time: '1 dag sedan',
      text: 'Tydlig kommunikation, snabb leverans och ett resultat som känns både modernt och seriöst.'
    },
    {
      name: 'Maria Lind',
      company: 'E-handel',
      time: '2 dagar sedan',
      text: 'Vi behövde uppgradera vår gamla webbplats och fick hjälp med både design, struktur och mobilanpassning.'
    },
    {
      name: 'Johan Eriksson',
      company: 'Konsultbolag',
      time: '3 dagar sedan',
      text: 'Väldigt nöjd med processen. Allt från första kontakt till färdig sida kändes professionellt.'
    }
  ]

  return (
    <section className="reviews-section">
      <p>Kundrecensioner</p>
      <h2>Vad våra kunder säger</h2>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <article className="review-row" key={index}>
            <div className="review-meta">
              <h3>{review.name}</h3>
              <p>{review.company}</p>
              <span>★★★★★</span>
            </div>

            <div className="review-text">
              <span>{review.time}</span>
              <p>{review.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews