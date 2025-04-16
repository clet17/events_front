import { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode'

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    let navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userInfo , setUserInfo] = useState(null)
    const [tokenStorage, setTokenStorage] = useState(null)
    const [loading, setLoading] = useState(true)

    let token = localStorage.getItem('token')

    useEffect(() => {
        
        if(token){
            const decotedToken = jwtDecode(token)
            setTokenStorage(token)
            setUserInfo(decotedToken)
            setIsAuthenticated(true)
        }
    }, [])

    const handleLogin = async (e, email, password) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/login', {email, password})
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                setIsAuthenticated(true)
                setTokenStorage(response.data.token)
                setLoading(false)
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

    const logout = async () => {
        //let navigate = useNavigate()

        try{
            localStorage.removeItem('token')
            setIsAuthenticated(false)
            navigate('/login')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin, logout, userInfo, tokenStorage, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}