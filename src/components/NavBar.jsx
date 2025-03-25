import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">Accueil</Link>
        </li>
        <li>
          <Link to="/profile" className="text-blue-600 hover:text-blue-800">Profil</Link>
        </li>
        <li>
          <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
        </li>
        <li>
          <Link to="/register" className="text-blue-600 hover:text-blue-800">S'inscrire</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
