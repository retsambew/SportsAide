import React from 'react'
import './index.scss'

const Featured = () => {
  return (
    <div className='featuredSection'>
      <h2 className='featuredHeading'>What We Do</h2>
      <div className='featuredCards'>
        <div className='featuredCard'>
          <h3>Access to all sports events.</h3>
          <p>With SportAide, you get access to all the sports events happening in your area, so you never miss a game again.</p>
          <button>Learn More</button>
        </div>
        <div className='featuredCard'>
          <h3>Real-time updates.</h3>
          <p>Get real-time updates on all the sports events you are interested in, so you are always in the know.</p>
          <button>Learn More</button>
        </div>
        <div className='featuredCard'>
          <h3>Personalized alerts.</h3>
          <p>With personalized alerts, you get notifications about the events you're interested in, so you're always on top of the game.</p>
          <button>Learn More</button>
        </div>
        <div className='featuredCard'>
          <h3>Get exclusive event info.</h3>
          <p>As a SportAide user, you'll have access to exclusive event information, such as insider tips, athlete profiles, and even behind-the-scenes access.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured