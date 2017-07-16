import React from 'react'
import './Header.scss'
import alfie from './assets/alfie.svg'
import amani from './assets/amani.svg'
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
      <h1 className='Header__title Header__title--ingrid'>Ingrid</h1>
      <h1 className='Header__title Header__title--lenert'>Lenert</h1>
      <div className='Header__img Header__img--alfie'>
        <img src={alfie} alt=' '/>
      </div>
      <div className='Header__img Header__img--amani'>
        <img src={amani} alt=' '/>
      </div>
      <div className='Header__img Header__img--shape01'>
        <img src={shape01} alt=' '/>
      </div>
      <div className='Header__img Header__img--shape02-bg'></div>
      <div className='Header__img Header__img--shape02'>
        <img src={shape02} alt=' '/>
      </div>
      <div className='Header__img Header__img--shape03'>
        <img src={shape03} alt=' '/>
      </div>
      <div className='Header__img Header__img--shape04'>
        <img src={shape04} alt=' '/>
      </div>
      <div className='Header__img Header__img--shape05'>
        <img src={shape05} alt=' '/>
      </div>
      <div className='Header__img Header__img--shape06'>
        <img src={shape06} alt=' '/>
      </div>
      <div className='Header__img Header__img--shape07'>
        <img src={shape07} alt=' '/>
      </div>
    </div>
  </div>
)

export default Header