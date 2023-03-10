import React from 'react'
import './index.scss'
import heroBG from '../../../assets/heroBG.mp4';
import FilledButton from '../../common/button/filled';

const Hero = () => {
  return (
    <div className='heroSection'>
      {/* https://www.youtube.com/watch?v=lcB0LYNp0oI */}
      <video src={heroBG} autoPlay loop muted/>
      <h1 className='heading'>The largest community of local sports</h1>
      <FilledButton content='Join Today' size='2rem' padding='1.2rem 5rem'/>
      <span className='bottomMargin'/>
    </div>
  )
}

export default Hero