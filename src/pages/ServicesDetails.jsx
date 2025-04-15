import { useEffect, useState } from "react"
import { useParams } from "react-router"


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
        <>
            {!loading && service && (<div>
                {/* a faire */}
                <h1>Les details de services</h1>
            </div>)}
        </>
    )
}

export default ServiceDetails