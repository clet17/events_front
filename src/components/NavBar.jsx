import { Link } from "react-router-dom";
import { useContext } from "react";
import { ServicesContext } from "../context/servicesContext";
import { AuthContext } from "../context/authContext";

const NavBar = () => {
  const {services, setServices} = useContext(ServicesContext)
  const {isAuthenticated, setIsAuthenticated, logout} = useContext(AuthContext)
  return (
    <>
    <h1>Hello there is {services.length} events</h1>
            <ul className='bg-gray-500 flex justify-center space-x-4'>
                <Link to='/'><li>Home</li></Link>
                {!isAuthenticated ? (
                    <>
                        <Link to='/register'><li>Register</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                    </>
                )

                    : (
                        <>
                            <Link to='/addservice'><li>Ajouter</li></Link>
                            <Link to='/profile'><li>Profile</li></Link>
                            <Link to='/users'><li>Users</li></Link>
                            <li onClick={logout} className="cursor-pointer">logout</li>
                        </>
                    )
                    }
            </ul>
    </>
  );
};

export default NavBar;
