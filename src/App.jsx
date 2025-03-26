import { useContext } from 'react'
import { ServicesContext } from './context/servicesContext'
import './App.css'


function App() {
  const [services, setServices] = useContext(ServicesContext)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold underline mb-6">Bienvenue sur le site</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services && services.map(service => (
          <div 
            key={service._id} 
            className="border border-gray-300 shadow-md rounded-lg p-4 bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-lg font-bold text-blue-600">{service.price}€</p>
            <p className="text-sm text-gray-500">Catégorie: {service.category}</p>
            <p className="text-sm text-gray-500">Adresse: {service.address}</p>
            <p className={service.awaitbility ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
              {service.awaitbility ? "✅ Disponible" : "❌ Indisponible"}
            </p>
          </div>
        ))}
      </div>
    </div>
  )  
}

export default App
