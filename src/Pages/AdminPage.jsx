import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
function AdminPage() {


  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('Alla')
  const [requests, setRequests] = useState([])

 const totalRequests = requests.length
 const newRequests = requests.filter(request => request.status === 'Ny').length
 const ongoingRequests = requests.filter(request => request.status === 'Pågående').length
 const completedRequests = requests.filter(request => request.status === 'Klar').length

  useEffect(() => {

    fetch('http://localhost:5198/api/ContactRequests')
      .then(res => res.json())
      .then(data => {
        setRequests(data)
      })
      .catch(error => console.error(error))

  }, [])

  const updateStatus = async (id, newStatus) => {

  try {

    await fetch(`http://localhost:5198/api/ContactRequests/${id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStatus)
    })

    setRequests(
      filteredRequests.map(request =>
        request.id === id
          ? { ...request, status: newStatus }
          : request
      )
    )

  } catch (error) {
    console.error(error)
  }
}
    const filteredRequests = requests.filter(request => {

  const matchesSearch =
    request.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.company?.toLowerCase().includes(searchTerm.toLowerCase())

  const matchesStatus =
    selectedStatus === 'Alla' ||
    request.status === selectedStatus

  return matchesSearch && matchesStatus
})

const deleteRequest = async (id) => {
  const confirmDelete = window.confirm('Vill du verkligen radera denna förfrågan?')

  if (!confirmDelete) {
    return
  }

  try {
    const response = await fetch(`http://localhost:5198/api/ContactRequests/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      setRequests(requests.filter(request => request.id !== id))
      toast.success('Förfrågan raderad')
    }
  } catch (error) {
    console.error(error)
    toast.error('Något gick fel')
  }
}
  return (
    <section className="admin-page">

      <p>Adminpanel</p>

      <h1>Inkomna kontaktförfrågningar</h1>

      <div className="admin-stats">
  <article>
    <h3>{totalRequests}</h3>
    <p>Totalt</p>
  </article>

  <article>
    <h3>{newRequests}</h3>
    <p>Nya</p>
  </article>

  <article>
    <h3>{ongoingRequests}</h3>
    <p>Pågående</p>
  </article>

  <article>
    <h3>{completedRequests}</h3>
    <p>Klara</p>
  </article>
</div>

          <div className="admin-toolbar">

  <input
    type="text"
    placeholder="Sök företag eller email..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  
</div>

      <div className="requests-grid">

        {requests.map((request) => (

          <article key={request.id} className={`request-card ${request.status.toLowerCase()}`}>

            

            <div className="request-top">

              <h3>{request.name}</h3>

              <span className={`status-badge ${request.status.toLowerCase()}`}>
                {request.status}
              </span>

            </div>

            <p>
              <strong>Email:</strong> {request.email}
            </p>

            <p>
              <strong>Företag:</strong> {request.company}
            </p>

            <p>
              <strong>Paket:</strong> {request.package}
            </p>

            <div className="request-message">

              <p><strong>Meddelande:</strong></p>

              <p>{request.message}</p>

            </div>

            <small>
              {new Date(request.createdAt).toLocaleString()}
            </small>
<div className="request-actions">



  <button
    onClick={() => updateStatus(request.id, 'Kontaktad')}
  >
    Kontaktad
  </button>

  <button
  onClick={() => updateStatus(request.id, 'Pågående')}
>
  Pågående
</button>

  <button
    onClick={() => updateStatus(request.id, 'Klar')}
  >
    Klar
  </button>

  <button
  className="delete-btn"
  onClick={() => deleteRequest(request.id)}
>
  Radera
</button>


</div>
          </article>

        ))}

      </div>

    </section>
  )
}

export default AdminPage