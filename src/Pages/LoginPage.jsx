import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdminLoggedIn', 'true')
      toast.success('Inloggad')
      navigate('/admin')
    } else {
      toast.error('Fel användarnamn eller lösenord')
    }
  }

  return (
    <section className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <p>Admin</p>
        <h1>Logga in</h1>

        <input
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Logga in</button>
      </form>
    </section>
  )
}

export default LoginPage