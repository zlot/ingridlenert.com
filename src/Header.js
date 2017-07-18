import React from 'react'
import shape01 from './assets/shape 01.svg'
import shape02 from './assets/shape 02.svg'
import shape03 from './assets/shape 03.svg'
import shape04 from './assets/shape 04.svg'
import shape05 from './assets/shape 05.svg'
import shape06 from './assets/shape 06.svg'
import shape07 from './assets/shape 07.svg'

const Header = () => (
  <div className="Header">
    <div className='Header__container'>
      <div id='Lucy_Mitsy'></div>
      <div id='Jessica'></div>
      <div id='Amani'></div> 
      <div id='Alfie'></div> 
      <h1 className='Header__title Header__title--ingrid'>Ingrid</h1>
      <h1 className='Header__title Header__title--lenert'>Lenert</h1>
      
      <img src={shape01} alt=' ' className='Header__img Header__img--shape01' />
      <div className='Header__img Header__img--shape02-bg'></div>
      <img src={shape02} alt=' ' className='Header__img Header__img--shape02' />
      <img src={shape03} alt=' ' className='Header__img Header__img--shape03' />
      <img src={shape04} alt=' ' className='Header__img Header__img--shape04' />
      <img src={shape05} alt=' ' className='Header__img Header__img--shape05' />
      <img src={shape06} alt=' ' className='Header__img Header__img--shape06' />
      <img src={shape07} alt=' ' className='Header__img Header__img--shape07' />
    </div>
  </div>
)

export default Header