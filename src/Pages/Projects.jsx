import { useState } from 'react'
import byggImg from '../assets/byggImg.png'
import gymImg from '../assets/gymImg.png'
import kommandeImg from '../assets/kommandeImg.png'
import restaurangImg from '../assets/resturangImg.png'

const projectImages = [
  {
    title: 'Nova Restaurant',
    image: restaurangImg,
    text: 'Modern restauranghemsida med meny och bokningssektion.'
  },

  {
    title: 'Nordic Build',
    image: byggImg,
    text: 'Professionell företagssida för byggbranschen.'
  },

  {
    title: 'Pixel Fitness',
    image: gymImg,
    text: 'Webbplats för träningsstudio med medlemskap och kontaktformulär.'
  },

  {
    title: 'Kommande Projekt',
    image: kommandeImg,
    text: 'Ett kommande projekt under utveckling.'
  }
]

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((currentIndex + 1) % projectImages.length)
  }

  const prevProject = () => {
    setCurrentIndex((currentIndex - 1 + projectImages.length) % projectImages.length)
  }

  const currentProject = projectImages[currentIndex]

  return (
    <section className="projects-page">
      <p>Projekt</p>
      <h1>Kommande och färdiga projekt</h1>

      <div className="project-showcase">
        <button className="carousel-btn" onClick={prevProject}>‹</button>

        <article className="showcase-card">
          <img src={currentProject.image} alt={currentProject.title} />

          <div className="showcase-content">
            <h2>{currentProject.title}</h2>
            <p>{currentProject.text}</p>
          </div>
        </article>

        <button className="carousel-btn" onClick={nextProject}>›</button>
      </div>

      <div className="carousel-dots">
        {projectImages.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'dot active-dot' : 'dot'}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <section className="templates-section">

  <p>Färdiga templates</p>
  <h2>Välj en design som passar ditt företag</h2>

  <div className="templates-grid">

<article className="template-card">
  <img src={restaurangImg} alt="Restaurant Template" />
  <h3>Restaurang</h3>
  <p>Perfekt för restauranger med meny, bokning och kontakt.</p>
  <button>Visa template</button>
</article>

    <article className="template-card">
      <img src={gymImg} alt="Gym Template" />
      <h3>Gym & Fitness</h3>
      <p>Modern design för gym och träningsstudios.</p>
      <button>Visa template</button>
    </article>

    <article className="template-card">
      <img src={byggImg} alt="Business Template" />
      <h3>Byggföretag</h3>
      <p>Professionell företagshemsida med tjänster och offert.</p>
      <button>Visa template</button>
    </article>

  </div>

</section>
    </section>

    
  )
}

export default Projects