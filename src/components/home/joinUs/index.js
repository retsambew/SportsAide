import React from 'react'
import './index.scss'
import people from '../../../assets/people.svg'
import FilledButton from '../../common/button/filled'
import HollowButton from '../../common/button/hollow'

const JoinUS = () => {
  return (
    <div className='joinSection'>
      <div className='joinImageSection'>
        <img src={people}/>
        <h1>Join SportAide today.</h1>
      </div>
      <div className='joinInfoSection'>
        <p>What are you waiting for join the largest community of local sports now!</p>
        <span>
          <FilledButton content='Join Today' padding='1.4rem 4rem'/>
          <HollowButton content='Contact us' padding='1.4rem 4rem'/>
        </span>
      </div>
    </div>
  )
}

export default JoinUS