import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-top">
        <div className="footer-brand">
          <h2>NovaWeb</h2>
          <p>
            Vi skapar moderna, responsiva och professionella webblösningar för företag.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navigering</h3>
          <Link to="/">Hem</Link>
          <Link to="/projects">Projekt</Link>
          <Link to="/workflow">Hur vi arbetar</Link>
          <Link to="/staff">Personal</Link>
          <Link to="/contact">Kontakta oss</Link>
        </div>

        <div className="footer-links">
          <h3>Tjänster</h3>
          <a href="#">Webbutveckling</a>
          <a href="#">UI/UX Design</a>
          <a href="#">SEO-optimering</a>
          <a href="#">Support & underhåll</a>
        </div>

        <div className="footer-socials">
          <h3>Följ oss</h3>

          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NovaWeb. Alla rättigheter reserverade.</p>
        <p>Byggd med React, CSS och ASP.NET Core Web API.</p>
      </div>
    </footer>
  )
}

export default Footer