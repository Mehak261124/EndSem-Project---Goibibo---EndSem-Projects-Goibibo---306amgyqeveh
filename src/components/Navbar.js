import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <nav className="flex justify-between items-center bg-white shadow-md">
      <div className="logo m2-7">
        <img
          src="https://jsak.goibibo.com/pwa_v3/pwa_growth/images/og-goibibo.aba291ed.png"
          alt="Logo"
          className="h-16"
        />
      </div>
      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="flex items-center p-2 border-2 border-blue-500 rounded-md bg-white text-blue-500 text-base cursor-pointer transition duration-300 hover:bg-blue-500 hover:text-white mr-4"
        >
          <FontAwesomeIcon icon={faUser} className="mr-2" /> LOGOUT
        </button>
      ) : (
        <Link
          to="/signin"
          className="flex items-center p-2 border-2 border-blue-500 rounded-md bg-white text-blue-500 text-base cursor-pointer transition duration-300 hover:bg-blue-500 hover:text-white mr-4"
        >
          <FontAwesomeIcon icon={faUser} className="mr-2" /> LOGIN/REGISTER
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
