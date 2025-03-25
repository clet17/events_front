import {Routes, Route} from 'react-router-dom'
import App from './App'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'
import Register from './pages/Register'

const MyRouter =  () => {
    return(
        <>
        <NavBar />
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/profile' element={<Profile />} />  
            <Route path='/register' element={<Register />} />  
        </Routes>
        </>
    )
}

export default MyRouter