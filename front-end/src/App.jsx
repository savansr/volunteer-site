import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";



import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Donate from './Components/Donate';
import NotFound from './Components/NotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <SignedIn>
                <Home/>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/about" element={<About/>} />
          <Route 
            path="/contact" 
            element={
              <SignedIn>
                <Contact/>
              </SignedIn>
            }
          />
          <Route 
            path="/donate" 
            element={
              <SignedIn>
                <Donate/>
              </SignedIn>
            }
          />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
        <ToastContainer/>
      </Router>
    </>
  )
}

export default App
