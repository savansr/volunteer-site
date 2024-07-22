import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/donate" element={<Donate/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      
    </Routes>
       <Footer/>
        <ToastContainer/>
     </Router>
     
    </>
  )
}

export default App
