import React from 'react'
import FilledButton from '../../common/button/filled'
import HollowButton from '../../common/button/hollow'
import './index.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navInfo'>
        <h1 className='brand'>SportAide</h1>
        <div className='links'>
          <h2 className='link'>Featured</h2>
          <h2 className='link'>Sports Categories</h2>
          <h2 className='link'>Events</h2>
          <h2 className='link'>Support</h2>
        </div>
      </div>
      <div className='navUser'>
        <HollowButton content='Log in'/>
        <FilledButton content='Register'/>
      </div>
    </div>
  )
}

export default Navbar