import React from 'react'
import Navbar from './Navbar'

import './LSstyles.css'

import FooterP from './FooterProject'

import ShrushtiLaxmiGy from './ShrustiLaxmiGy'

import floorplanImg from '../assests/editImage1.png'


const Laxmishru = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="image3">
          <div className="heading">
            <h1>LAXMI SHRUSTHI</h1>
          </div>
        </div>
        {/* <Responsivetabs/> */}
        <div className="main">
          <div id="outer">
            <div className="inner">

              <li className='com'>
                <a href='#project_over'>Project Overview</a></li></div>
            <div className="inner">

              <li className='com'>
                <a href='#row'>Gallery</a></li></div>

            <div className="inner">

              <li className='com'>
                <a href='#floorplan2'>Floor Plan</a></li></div>

            
            <div className="inner">

              <li className='com'>
                <a href='#location'>Location</a></li></div>

            <div className="inner">

              <li className='com'>
                <a href='Claim Form.pdf' download='Claim Form.pdf'>Download Brochure</a></li></div>
          </div>
        </div>
        <div className="features" id='project_over'>
          <div className="rows">
            <div className="text-col">
              <h2>LAXMI SHRUSTHI</h2>
              <p>Goregaon is an upscale neighbourhood in the western suburbs of Mumbai. It is very well connected to most of Mumbai. By investing in a home at Goregaon you get an all-around experience with the most happening lifestyle encounter. Finally get your dream home you were looking for. Amidst superb road, rail and upcoming metro connectivity with an easy access to all the necessary amenities for a luxurious life, this project is the perfect choice for your dream home. Laxmi Shrushti is well connected with the supermarkets, hospitals,schools, parks and more to reveal your vicinity.</p>
            </div>
            <div className="img-col">
              <img src="http://www.thelaxmigroup.in/laxmishrushti/assets/images/about.png" alt='ls' />
            </div>
          </div>
          <hr style={{ opacity: "0.5" }} />
        </div>

        <div id='row'>
        
          <div className='col-6 '>
          <h1>Gallery</h1>
            <ShrushtiLaxmiGy />
            {/* sideicon */}
            <div className="sideicon">
            </div>
          </div>
          <div className='col-6'>
            <div className='map' id="map-bar">
              <div className='lists'></div>
              <ul className='myUl'>
                <li>Beautiful Park</li>
                <li>Kids Playing Zone</li>
                <li>Gym</li>
                <li>Indoor Basketball Area</li>
                <li>Indoor Gaming Area</li>
                <li>Exclusive Terrace</li>
              </ul>
            </div>
          </div>
          
        </div>

        
        <div id='floorplan2'>
          <div id="temh1">
          <img src={floorplanImg} alt="floorPlan" />
          </div>
        </div>

      <div id='location'>
        <h1 className='loch1'>How Get Here</h1>

        <div className="map1" id="map-bar1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.664115146726!2d72.8373625748761!3d19.166174582057042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b714fe4a64ad%3A0x17d3370a96d870f1!2sLaxmi%20Shrushti%20-%20THE%20LAXMI%20GROUP!5e0!3m2!1sen!2sin!4v1686031577046!5m2!1sen!2sin" width="500" height="390" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div></div>


      <div id="maha_rera">
        <p id="maha_p">MahaRERA Registration No : P51800020965 | Also available at <a id='maha_a' href="https://maharera.mahaonline.gov.in" target='_blank' rel='noreferrer'>maharera website</a></p>
      </div>

      <FooterP />
    </div>
    </>
  )
}

export default Laxmishru
