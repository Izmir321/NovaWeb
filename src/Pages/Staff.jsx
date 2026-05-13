function Staff() {
  return (
    <section className="staff-page">
      <p>Vårt team</p>

      <h1>Personalen bakom NovaWeb</h1>

      <div className="staff-grid">

        <article className="staff-card">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Frontend Developer"
          />

          <h3>Andreas Nilsson</h3>

          <span>Frontend Developer</span>

          <p>
            Specialiserad inom React, UI-design och moderna webbapplikationer.
          </p>
        </article>

        <article className="staff-card">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="UI Designer"
          />

          <h3>Emma Larsson</h3>

          <span>UI/UX Designer</span>

          <p>
            Ansvarar för användarupplevelse, design och responsiva gränssnitt.
          </p>
        </article>

        <article className="staff-card">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Backend Developer"
          />

          <h3>Johan Svensson</h3>

          <span>Backend Developer</span>

          <p>
            Arbetar med API:er, databaser och systemutveckling i .NET.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Staff