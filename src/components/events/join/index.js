import React from 'react'
import './index.scss'
import FilledButton from '../../common/button/filled'
import bgimg from '../../../assets/eventJoinBG.svg'

const Join = () => {
  return (
    <div className='joinEventSection'>
        <h2 className='heading'>Join now and participating in all the new fun sporting events all near you!</h2>
        <FilledButton content='Join Today' size='1.8rem' padding='1rem 3.2rem'/>
        <img src={bgimg} className='bgImg'/>
    </div>
  )
}

export default Join