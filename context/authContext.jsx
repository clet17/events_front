import { useState, useEffect, createContext, Children } from "react";

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthContext value={[isAuthenticated, setIsAuthenticated]}>
            {children}
        </AuthContext>
    )
}