import React from 'react'
import Featured from './featured'
import JoinUS from './joinUs'

import tennis from '../../assets/sports/tennis.svg'
import cricket from '../../assets/sports/cricket.svg'
import ImageInfoBar from '../common/imageInfoBar'

const Home = () => {
  const content={
    tennis:{
      image: tennis,
      heading: 'Tennis',
      para: 'SportAide provides live tennis scores and other tennis information from around the country including local and national tournaments and other online tennis results.',
    },
    cricket:{
      image: cricket,
      heading: 'Cricket',
      para: 'Get Live Cricket Scores, Scorecard, Schedules of local and Domestic cricket matches along with Latest News, Videos and updates.Join SportAide today.',
      direction: 'row-reverse',
      bgColor:'#f5f5f5',
    }
  }
  return (
    <div>
      <Featured/>
      <ImageInfoBar {...content.tennis}/>
      <ImageInfoBar {...content.cricket}/>
      <JoinUS/>
    </div>
  )
}

export default Home