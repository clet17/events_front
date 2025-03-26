import { useState, createContext } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    let navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleLogin = async (e, email, password) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/login', {email, password})
            if (response.status === 200) {
                localStorage.setItem('token', response.data)
                setIsAuthenticated(true)
                alert(response.data.message)
                navigate('/')
            }
        } catch (err) {
            console.log(err.response)
            if (err) {
                alert(err.response.data)
            }
        }
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}