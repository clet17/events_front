import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/authContext"
import axios from "axios"



const Profile = () => {

    const {tokenStorage, loading, setLoading} = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState(null)

    const token = localStorage.getItem('token')
    // console.log(token)

    const fetchUserProfile = async () => {
        try{
            const response = await axios.get('http://localhost:8000/api/profile', {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            })
            if(response.status === 200){
                setUserProfile(response.data)
            }
        }
        catch(err)
        {
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(token){
            fetchUserProfile()
        }
    }, []) 

    console.log(userProfile)

    return (
        <>
        {!loading && userProfile && (
            <>
            <h1>Mon nom est {userProfile.first_name} </h1>
            <img src={`http://localhost:8000/${userProfile.image}`} alt="" />
            </>
        )}
        </>
    )
}

export default Profile