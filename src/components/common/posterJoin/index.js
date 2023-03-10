import React from 'react'
import FilledButton from '../button/filled'
import './index.scss'

const PosterJoin = (props) => {
  return (
    <div
     className='posterJoinSection'
     style={{
      flexDirection: props.direction,
      backgroundColor: props.bgColor??'white',
     }}
    >
      <img src={props.image}/>
      <div className='posterJoinInfo'>
        <h2>{props.heading}</h2>
        <FilledButton content='Join Today' size='1.8rem' padding='1rem 3.2rem' {...props.btnProp} />
      </div>
    </div>
  )
}

export default PosterJoin