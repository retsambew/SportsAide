import React from 'react'
import './index.scss'

const ImageInfoBar = (props) => {
  return (
    <div
     className='imageInfoBarSection'
     style={{
      flexDirection: props.direction,
      backgroundColor: props.bgColor??'white',
     }}
    >
      <img src={props.image}/>
      <div className='iibInfo'>
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
      </div>
    </div>
  )
}

  export default ImageInfoBar