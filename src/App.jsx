import { Routes, Route } from 'react-router-dom'
import Projects from './Pages/Projects'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Workflow from './Pages/Workflow'
import Home from './Pages/Home'
import Staff from './Pages/Staff'
import ContactPage from './Pages/ContactPage'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App