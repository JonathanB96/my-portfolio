import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'



export default function NavBar() {
  return (
    <div className=' menu-container fixed-top'>
      <div><nav className="container">

    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
  

    

    <div className="menu">
      <a href="/" class="menu-logo">
      <h1>jonbola.dev</h1>
      </a>
  
      <ul>
        <li> <a
        to="/"
        exact
        activeStyle={{
            color: "#599bb3",
            
        }}
        >
        HOME
        </a>
        </li>
    
        <li><a
        to="/about"
        exact
        activeStyle={{
            color: "#599bb3",
        }}
        >
        ABOUT
        </a></li>
      
        <li>
            <a
            to="/"
            exact
            activeStyle={{
                color: "#599bb3",
            }}
            >
           PROJECTS
           </a>
      </li>
      <li>
            <a
            to="/footer"
            onClick={()=>{
              window.scrollTo({
                top: 1000,
                behavior: "smooth"
              })
            }
            }
            exact
            activeStyle={{
                color: "#599bb3",
            }}
            >
           CONTACT
           </a>
      </li>
   
    </ul>

   
    </div>
  </nav>
  </div>
  </div>
  )
}
