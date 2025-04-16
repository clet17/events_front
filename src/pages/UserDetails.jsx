import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";




const UserDetails = () => {
    const {id} = useParams()
    const [userDetails, setUserDetails] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchUserDeatails = async () => {
        try{
            const response = await axios.get(`http://localhost:8000/api/user/${id}`)
            if(response.status === 200){
                setUserDetails(response.data)
            }

        }catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }
    

    useEffect(() => {
        fetchUserDeatails()
    }, [])

    return (
        <div className="flex justify-center p-6">
            {!loading && userDetails && (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">                   
                    <img
                        className="w-full h-48 object-cover"
                        src={userDetails.image ? `http://localhost:8000/${userDetails.image}` : "https://www.w3schools.com/w3images/avatar2.png"}
                        alt="User"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            {userDetails.first_name} {userDetails.last_name}
                        </div>
                        <p className="text-gray-700 text-base mb-2">
                            <strong>Email:</strong> {userDetails.email}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserDetails