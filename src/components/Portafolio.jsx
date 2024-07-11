import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo'
import { NavLink } from 'react-router-dom'



export const Portafolio = () => {
  return (
    <main className='layout__content'>
      <section className='headernav content__page content__portafolio'>
        <header className='resume__header'>
          <h1 className='resume__title'>Portafolio</h1>
        

{/* recordar realizar javascript para elegir automaticamente la opcion isActive en este menu */}
      <nav className='portafolio__navbar'>
        <ul className='portafolio__menu'>
          <li className='portafolio__option portafolio__option--active'>
            <a href='https://edg-site-prueba.netlify.app/' className='portafolio__link'>Todo</a>.
          </li>
          <li className='portafolio__option'>
          <NavLink to="javascript">Javascript</NavLink> 
          </li>
          <li className='portafolio__option'>
          <NavLink to="reactt">React</NavLink> 
          </li>
        </ul>
      </nav>
      </header>
      <section className='portafolio__gallery'>
        <figure className='gallery__item'>
          <div className='gallery__container-image'>
            <a href='https://edg-site-prueba.netlify.app/' className='gallery__link'>
              <img src='/galeria-1.jpg' alt='imagen-galeria' className='gallery__image'/>
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
