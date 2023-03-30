import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'



export default function NavBar() {

  function navigateTo(pixels){

   
  }
  return (
    <div className=''>
                <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top
                shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Jonbola.dev</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" aria-current="page" href="#" onClick={()=>{
                   window.scrollTo({
                    top:  "10",
                    bihavior: "smooth"
                  })
                }}>HOME</a>
                <a className="nav-link"  onClick={()=>{
                   window.scrollTo({
                    top:  "300",
                    bihavior: "smooth"
                  })
                }}>ABOUT</a>
                <a className="nav-link" onClick={()=>{
                   window.scrollTo({
                    top:  "800",
                    bihavior: "smooth"
                  })
                }}>PROJECTS</a>
                <a className="nav-link"  onClick={()=>{
                   window.scrollTo({
                    top:  "2000",
                    bihavior: "smooth"
                  })
                }}>CONTACT</a>
              </div>
            </div>
          </div>
        </nav>
      
  </div>
  )
}
