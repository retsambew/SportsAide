import React from 'react'

const HollowButton = (props) => {
  return (
    <button
     style={{
        color: props.color??'rgba(24, 160, 251, 1)',
        padding: props.padding??'0.7rem 2.6rem',
        background: props.background??'white',
        border: '0.1rem solid rgba(24, 160, 251, 1)',
        borderRadius: props.radius??'0.4rem',
        fontSize: '1.4rem',
        cursor: 'pointer',
     }}
     onClick={props.onClick}
    >
        {props.content}
    </button>
  )
}

export default HollowButton