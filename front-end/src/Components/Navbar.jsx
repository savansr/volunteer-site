import React, { useState } from 'react';
import 'react-icons';
import {Link } from 'react-router-dom';
const { SignedIn, SignedOut, SignInButton, UserButton }=window.Clerk;
import '../App.css'

import { FaBitcoin, FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSquareFacebook } from "react-icons/fa6";

const Navbar = () => {
  const [show, setShow] = useState(true);

  return (
    
    
      <nav className={`navbar ${show ? 'show_navbar' :' '}`}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="links">
              <ul>
              <li>
                 <Link to='/'>HOME</Link>
            </li>
            <li>
                 <Link to='/donate'>DONATE US</Link>
            </li>
            <li>
                 <Link to='/about'>ABOUT</Link>
            </li>
            <li>
                 <Link to='/contact'>CONTACT</Link>
            </li>
            <li>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="sign-in-button">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-10 h-10"
                    }
                  }}
                />
              </SignedIn>
            </li>
              </ul>
              <ul>
                 <li><Link to='#'><FaSquareXTwitter /></Link></li>
                 <li><Link to='#'><FaYoutube/></Link></li>
                 <li><Link to='#'><FaSquareFacebook /></Link></li>
                 <li><Link to='#'><BsInstagram/></Link></li>

              </ul>

        </div>

       
        <GiHamburgerMenu className='hamburger' onClick={()=>setShow(!show)} />
       
    </nav>
  );
}





export default Navbar;
