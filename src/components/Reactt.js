import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo'
// import {  faCodeBranch, faImagePortrait, faKeyboard } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { NavLink } from 'react-router-dom'





export const Reactt = () => {
  return (
    <main className='layout__content'>
      <section className='headernav content__page content__portafolio'>
        

{/* recordar realizar javascript para elegir automaticamente la opcion isActive en este menu */}

<header className='resume__header'>
    <h1 className='resume__title'>Portafolio</h1>
  
    
    <nav className='portafolio__navbar'>
      
      <ul className=' portafolio__menu'>
        <li className='portafolio__option portafolio__option--active'>
            <NavLink to='/portafolio'>Todo</NavLink>
          </li>
        <li className='portafolio__option'>
          <NavLink to="../portafolio/Javascript">Javascript</NavLink>
          {/* <a href='#' className='portafolio__link'>Javascript</a> */}
        </li>
        <li className='portafolio__option portafolio__option--active'>
          <NavLink to='../portafolio/reactt'>React</NavLink>
          {/* <a href='#' className='portafolio__link'>React</a> */}
        </li>
      </ul>
    </nav>

        
        
        </header>
      
      <section className='portafolio__gallery'>
        <figure className='gallery__item'>
          <div className='gallery__container-image'>
            <a href='#' className='gallery__link'>
              <img alt='imagen-galeria' src='/galeria-1.jpg' className='gallery__image'/>
            </a>
          </div>

          <figcaption className='gallery__title'>Prueba1</figcaption>
          <i className='gallery__icon'><FontAwesomeIcon icon={faVideo} /> </i>
          <span className='gallery__category'>Videos</span>
        </figure>

        {/* <figure className='gallery__item'>
          <div className='gallery__container-image'>
            <a href='#' className='gallery__link'>
              <img src='/galeria-2.jpg' className='gallery__image'/>
            </a>
          </div>

          <figcaption className='gallery__title'>Prueba1</figcaption>
          <i className='gallery__icon'><FontAwesomeIcon icon={faCode} /> </i>
          <span className='gallery__category'>Javascript</span>
        </figure>

        <figure className='gallery__item'>
          <div className='gallery__container-image'>
            <a href='#' className='gallery__link'>
              <img src='/galeria-3.jpg' className='gallery__image'/>
            </a>
          </div>

          <figcaption className='gallery__title'>Prueba1</figcaption>
          <i className='gallery__icon'><FontAwesomeIcon icon={faKeyboard} /></i>
          <span className='gallery__category'>React</span>
        </figure>

        <figure className='gallery__item'>
          <div className='gallery__container-image'>
            <a href='#' className='gallery__link'>
              <img src='/galeria-4.jpg' className='gallery__image'/>
            </a>
          </div>

          <figcaption className='gallery__title'>Red social</figcaption>
          <i className='gallery__icon fa-solid'><FontAwesomeIcon icon={faTwitter}/></i>
          <span className='gallery__category'>Videos</span>
        </figure>

        <figure className='gallery__item'>
          <div className='gallery__container-image'>
            <a href='#' className='gallery__link'>
              <img src='/galeria-5.jpg' className='gallery__image'/>
            </a>
          </div>

          <figcaption className='gallery__title'>Logica de programacion</figcaption>
          <i className='gallery__icon fa-solid'><FontAwesomeIcon icon={faCodeBranch}/></i>
          <span className='gallery__category'>Videos</span>
        </figure>

        <figure className='gallery__item'>
          <div className='gallery__container-image'>
            <a href='#' className='gallery__link'>
              <img src='/galeria-6.jpg' className='gallery__image'/>
            </a>
          </div>

          <figcaption className='gallery__title'>Imagenes</figcaption>
          <i className='gallery__icon'><FontAwesomeIcon icon={faImagePortrait}/></i>
          <span className='gallery__category'>Videos</span>
        </figure> */}
      </section>

      </section>


    </main>
  )
}
