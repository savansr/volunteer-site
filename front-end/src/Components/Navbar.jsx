import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";

import { FaBitcoin, FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSquareFacebook } from "react-icons/fa6";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav className={`navbar ${show ? "show_navbar" : ""}`}>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="links">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/donate">DONATE US</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li>
            {!isAuthenticated ? (
              <button className="sign-in-button" onClick={() => loginWithRedirect()}>
                Sign In
              </button>
            ) : (
              <button 
                className="sign-out-button" 
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Sign Out
              </button>
            )}
          </li>
        </ul>
        <ul>
          <li><Link to="#"><FaSquareXTwitter /></Link></li>
          <li><Link to="#"><FaYoutube /></Link></li>
          <li><Link to="#"><FaSquareFacebook /></Link></li>
          <li><Link to="#"><BsInstagram /></Link></li>
        </ul>
      </div>
      <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
    </nav>
  );
};

export default Navbar;
