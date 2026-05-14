import { Link } from 'react-router-dom'





function Navbar() {
  return (
    <nav className="navbar">
      <h1>Web Agency</h1>

<div className="nav-links">
  <Link to="/">Hem</Link>
  <Link to="/staff">Personal</Link>
  <Link to="/workflow">Hur vi arbetar</Link>
  <Link to="/projects">Projekt</Link>
  <Link to="/contact">Kontakta oss</Link>
</div>
    </nav>
  )
}

export default Navbar