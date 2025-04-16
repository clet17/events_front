import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/authContext";


const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated){
        return <Navigate to='/login' replace />
    }

    return children
}

export default ProtectedRoute