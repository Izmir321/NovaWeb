import { Routes, Route } from 'react-router-dom'
import Projects from './Pages/Projects'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Workflow from './Pages/Workflow'
import Home from './Pages/Home'
import Staff from './Pages/Staff'
import ContactPage from './Pages/ContactPage'
import AdminPage from './Pages/AdminPage'
import ProtectedRoute from './Components/ProtectedRoute'
import LoginPage from './Pages/LoginPage'

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
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
      </Routes>

      <Footer />
    </>
  )
}

export default App