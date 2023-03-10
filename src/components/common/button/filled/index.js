import React from 'react'
import '../animation.scss'

const FilledButton = (props) => {
  return (
    <button
     style={{
        color: props.color??'white',
        padding: props.padding??'0.7rem 2.6rem',
        background: props.background??'rgba(24, 160, 251, 1)',
        border: 'none',
        borderRadius: props.radius??'0.4rem',
        fontSize: props.size??'1.4rem',
        fontFamily: 'Montserrat',
        cursor: 'pointer',
     }}
     onClick={props.onClick}
    >
        {props.content}
    </button>
  )
}

export default FilledButton