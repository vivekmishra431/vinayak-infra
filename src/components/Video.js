import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import heroVideo from '../assests/hero.mp4'
const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={heroVideo} type='video/mp4'/>
        </video>

    <div className="content">
       <h1>Our Mission</h1> 
       <p>To be the most trusted supplier partner to the construction</p>
    


    <div>
        <Link to='/projects' className='btn-light'>Read More</Link>
    </div>
    </div>
    </div>
  )
}

export default Video
