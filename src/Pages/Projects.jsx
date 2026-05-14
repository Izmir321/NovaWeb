import { useState } from 'react'

const projectImages = [
  {
    title: 'Nova Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    text: 'Modern restauranghemsida med meny och bokningssektion.'
  },
  {
    title: 'Nordic Build',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    text: 'Professionell företagssida för byggbranschen.'
  },
  {
    title: 'Pixel Fitness',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    text: 'Webbplats för träningsstudio med kontaktformulär.'
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
    </section>
  )
}

export default Projects