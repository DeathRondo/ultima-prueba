import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import {Inicio} from '../components/Inicio'
import {Portafolio} from '../components/Portafolio'
// import {Servicios} from '../components/Servicios'
import { Curriculum } from '../components/Curriculum'
import {Contacto} from '../components/Contacto'
import { HeaderNav } from '../layout/HeaderNav'
import { Reactt } from '../components/Reactt'
import { Javascript } from '../components/Javascript'



export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* Header y Navegacion */}
          <HeaderNav/>
        {/* Contenido Central */}
        <section className='layout__content'>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/portafolio' element={<Portafolio/>}/>
            <Route path='/curriculum' element={<Curriculum/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            
        </Routes>
        <Routes>
            <Route exact path='/portafolio/Reactt' element={<Reactt/>}/>
            <Route path='/portafolio/Javascript' element={<Javascript/>}/>
        </Routes>
        </section>
        
        {/* FOOTER */}
        
    </BrowserRouter>
  )
}