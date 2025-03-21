import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from '@auth0/auth0-react';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Donate from './Components/Donate';
import NotFound from './Components/NotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            isAuthenticated ? <Home/> : <Navigate to="/about" />
          } />
          <Route path="/about" element={<About/>} />
          <Route 
            path="/contact" 
            element={
              isAuthenticated ? <Contact/> : <Navigate to="/about" />
            }
          />
          <Route 
            path="/donate" 
            element={
              isAuthenticated ? <Donate/> : <Navigate to="/about" />
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
