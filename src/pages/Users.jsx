import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router"



const Users = () => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log('test')
    
    const fetchUsers = async () => {
        try{
            const response = await axios.get('http://localhost:8000/api/users')
            setUsers(response.data)
        }   
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    return(
        <>
        <h1>Test</h1>
        {!loading && users && users.map(user => (
            <div key={user._id}>
            <Link to={`/user/${user._id}`}>
                <h1>{user.first_name}</h1>
            </Link>
            </div>
        ))}
        </>
    )
}

export default Users