import React from 'react'

export const HeaderNav = () => {
  return (
    <header className='layout__aside'>
      <div>
        <div className='container-image'>
          <img src='view.jpg' alt='img' className='user__image'/>
        </div>
        <h2 className='__name'>Edgardo Cruz</h2>
        <h4 className='__job'>Desarrolador Web</h4>
      </div>
    </header>
  )
}
