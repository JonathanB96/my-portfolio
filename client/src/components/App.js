import React from 'react';
import Home from './Home'
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import NavBar from './NavBar';
import '../styles/App.css'
import Footer from './Footer'

function App() {
  return (
    <div>
      <div className='header'>
        <NavBar/>
      </div>
      
      
      <div className="container wrapper">
        <Home/>
       <About/>
       <Projects/>
       <Contact/>
      
      </div>
      <Footer/>
      
       
    </div>
    )}


export default App;
