import React from "react";
import { Link } from "react-router-dom"; // If you are using React Router for navigation
import MyImg from "./../components/images/images";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img className="nav-logoimg" src={MyImg.Logo} alt="" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Menu One
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menutwo" className="nav-links">
              Menu Two
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menuthree" className="nav-links">
              Menu Three
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menufour" className="nav-links">
              Menu Four
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
