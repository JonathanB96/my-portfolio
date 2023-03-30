import React from 'react'
import about from '../images/about-img.jpg'

export default function About() {
  return (
    <div className='about'>
        <div>
          <img src={about} className="rounded float-start"/>
        </div>
        <div className='text-section'>
          <h3>ABOUT ME</h3>
          <h2>A dedicated Full Stack Developer <br/>
based in Fort Worth, Texas 📍</h2>
          <p>As a Junior Full Stack Developer, I posses an impressive arsenal of skills in HTML, css,
           JavaScript, React, Bootstrap and Ruby on Rails. I excel in designing and maintaining responsive 
           websites that offer a smooth user experience. My expertise lies in crafting dynamic,
           engaging interfaces through writing clean and optimized code and techniques. I am also 
           a team player who thrives in collaborating with cross-functional teams to producd oustanding web applications.</p>
        </div>
    </div>
  )
}
