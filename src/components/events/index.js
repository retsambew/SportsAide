import React from 'react'
import PosterJoin from '../common/posterJoin'
import cricketPoster from '../../assets/sports/cricketPoster.svg'
import hockeyPoster from '../../assets/sports/hockeyPoster.svg'
import Join from './join'

const Events = () => {
  return (
    <div>
        <PosterJoin image={cricketPoster} heading='Local Cricket Events!' direction='row-reverse' />
        <PosterJoin image={hockeyPoster} heading='Local Hockey Events!' />
        <Join/>
    </div>
  )
}

export default Events