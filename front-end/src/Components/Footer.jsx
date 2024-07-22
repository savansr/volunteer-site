import React from 'react';
import {Link} from 'react-router-dom';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
       <div>
          <img src='/logo.png' alt='logo'></img>
       </div>
       <div>
        <h4>Support</h4>
        <ul>
          <li>India</li>
          <li>crypto@gmail.com</li>
          <li>+xxxxxxxxxx</li>
        
        </ul>
       </div>
       <div>
          <h4>Quick Links</h4>
          <ul><li>
          <Link to="/">HOME</Link>
            </li>
            <li>
          <Link to='/donate'>Donate</Link>
            </li>
            
            <li>
          <Link to='/about'>About</Link>
            </li>
            <li>
          <Link to="/contact">Contact</Link>
            </li>
            </ul>
       </div>
       <div>
         <h4>Follow Us</h4>
         <ul>
          <li ><Link to="/"><span><FaSquareXTwitter /></span><span>X</span></Link>

          </li>
          <li ><Link to="/"><span><FaSquareInstagram /></span><span>Instagram</span></Link>
          
          </li>
          <li ><Link to="/"><span><FaSquareYoutube /></span><span>YouTube</span></Link>
          
          </li>
          <li ><Link to="/"><span><FaSquareFacebook /></span><span>FaceBook</span></Link>
          
          </li>
         
         
         </ul>
       </div>
    </footer>
  )
}

export default Footer;
