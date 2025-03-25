import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'


function App() {
  const [services, setServices] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const fetchServices = async () => {
    
    try{
      const response = await axios.get('http://localhost:8000/api/services')
      if(response.status === 200){
        setServices(response.data)
      }
    }
    catch(err)
    {

    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">Bienvenue sur le site</h1>
      {services && !loading && services.map(service => {
        return(
          <>
            <div key = {service._id}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <p>{service.price}</p>
              <p>{service.category}</p>
              <p>{service.address}</p>
              <p>{service.awaitbility ? "Disponible" : "Indisponible"}</p></div>
          </>
        )
      })}
    </>
  )
}

export default App
