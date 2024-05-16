import React from 'react'
import {Routes, BrowserRouter} from 'react-router-dom'
import {HeaderNav} from '../layout/HeaderNav'


export const MisRutas = () => {
  return (
    <BrowserRouter>
        <HeaderNav/>

        <section className='layout__content'>
            <Routes>

            </Routes>
        </section>
    </BrowserRouter>
  )
}


