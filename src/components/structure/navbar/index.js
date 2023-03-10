import React from 'react'
import { Link } from 'react-router-dom'
import FilledButton from '../../common/button/filled'
import HollowButton from '../../common/button/hollow'
import './index.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navInfo'>
        <h1 className='brand'>SportAide</h1>
        <div className='links'>
          <Link className='link' to='/'>Featured</Link>
          <Link className='link' to='/events'>Sports Categories</Link>
          <Link className='link' to='/events'>Events</Link>
          <Link className='link' to='/'>Support</Link>
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