import { useEffect, useState } from 'react'

function AdminPage() {

  const [requests, setRequests] = useState([])

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
      requests.map(request =>
        request.id === id
          ? { ...request, status: newStatus }
          : request
      )
    )

  } catch (error) {
    console.error(error)
  }
}

  return (
    <section className="admin-page">

      <p>Adminpanel</p>

      <h1>Inkomna kontaktförfrågningar</h1>

      <div className="requests-grid">

        {requests.map((request) => (

          <article key={request.id} className="request-card">

            

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


</div>
          </article>

        ))}

      </div>

    </section>
  )
}

export default AdminPage