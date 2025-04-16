import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios";


const ServiceDetails = () => {
    const {id} = useParams()
    const [service, setService] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchServicesByID = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/api/service/${id}`)
            if(response.status === 200){
                setService(response.data)
            }

        }catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchServicesByID()
    }, [])
    
    return (
        <div className="flex justify-center p-6">
            {!loading && service && (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                {/* Image réelle ou image par défaut */}
                <img
                  className="w-full h-48 object-cover"
                  src={
                    service.image
                      ? `http://localhost:8000/${service.image}`
                      : "https://www.w3schools.com/w3images/avatar2.png"
                  }
                  alt="Service"
                />
              
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{service.title}</div>
                  <p className="text-gray-700 text-base mb-2">{service.description}</p>
                  <p className="text-lg font-bold text-blue-600">{service.price}€</p>
                  <p className="text-sm text-gray-500">Catégorie: {service.category}</p>
                  <p className="text-sm text-gray-500">Adresse: {service.address}</p>
                  <p
                    className={
                      service.awaitbility
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {service.awaitbility ? "✅ Disponible" : "❌ Indisponible"}
                  </p>
                </div>
              </div>
              
            )}
        </div>
    );
}

export default ServiceDetails