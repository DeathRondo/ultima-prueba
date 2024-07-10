import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'



export const HeaderNav = () => {
  return (
    <header className='layout__aside'>
      <div >
      <div className='container-image'>
        <img src='view.jpg' alt='imagen' className='user__image'/>
      </div>
      
        <h2 className='__name'>Edgardo Cruz</h2>
        <h4 className='__job'>Desarrollador Web </h4>
      </div>
      <div>
      
      </div>
        <nav className='layout__menu'>
            <ul className='menu__list'>
                <li className='menu__option'>
                  <NavLink to="inicio">Inicio</NavLink>    
                </li>
                <li className='menu__option'>
                  <NavLink to="portafolio">Portafolio</NavLink>    
                </li>
                <li className='menu__option'>
                  <NavLink to="curriculum">Curriculum</NavLink>    
                </li>
                <li className='menu__option'>
                  <NavLink to="contacto">Contacto</NavLink>    
                </li>
            </ul>
        </nav>
        <div className='user-links'>
          <ul className='link-social'>
            <li className='social-option'>
              <a href='portafolio.js'><FontAwesomeIcon icon={faLinkedin} /> </a>
            </li>
            <li className='social-option'>
              <a href='portafolio.js'><FontAwesomeIcon icon={faGithub} /> </a>
            </li>
            <li className='social-option'>
              <a href='portafolio.js'><FontAwesomeIcon icon={faInstagram} /> </a>
            </li>
          </ul>
        </div>
      <footer>
        &copy; 2024 Edgardo Cruz
      </footer>
    </header> 
  ) 
} 
