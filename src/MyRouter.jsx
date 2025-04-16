import {Routes, Route, useNavigate} from 'react-router'
import App from './App'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'
import Register from './pages/Register'
import Login from './pages/Login'
import AddService from './pages/AddService'
import ServiceDetails from './pages/ServicesDetails'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import ProtectedRoute from './utils/ProtectedRoute'
import UserDetails from './pages/UserDetails'
import Users from './pages/Users'

const MyRouter =  () => {
    let navigate = useNavigate()
    return(
        <>
        <NavBar />
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/profile' element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            } />  
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user/:id' element={<UserDetails />} />
            <Route path='/addservice' element={<AddService />} />
            <Route path='/service/:id' element={<ServiceDetails />} />
            <Route path='*' element={<p>404 not found</p>} />
        </Routes>
        </>
    )
}

export default MyRouter