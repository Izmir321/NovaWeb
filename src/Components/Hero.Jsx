import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>Webbyrå & digital konsult</p>
        <h1>Vi bygger moderna hemsidor för företag</h1>
        <p>
          Vi hjälper företag att skapa professionella, responsiva och användarvänliga
          webbplatser med modern teknik.
        </p>

        <div className="hero-buttons">
          <button>Begär offert</button>
          <button>Se våra tjänster</button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero