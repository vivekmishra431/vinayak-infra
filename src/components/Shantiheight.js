import React from 'react'
import Navbar from './Navbar'
import './Shantiheight.css'
import FooterP from './FooterProject'
import floor from '../assests/shantifloorplan.jpg'
import gym from '../assests/gym.png'
import gym1 from '../assests/gym1.png'
const Santiheight = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="image4">
          <div className="heading">
            <h1>SHANTI HEIGHT </h1>
            {/* <p>A Symbol of Classical Elegance</p> */}
          </div>
        </div>
        {/* <Responsivetabs/> */}
        <div className="main">
          <div id="outer">
            <div className="inner">

              <li className='com'>
                <a href='#project_over'>Project Overview</a></li></div>
            {/* <div className="inner">

            <li className='com'>
              <a href='#gallery'>Gallery</a></li></div> */}

            <div className="inner">

            <li className='com'>
              <a href='#shanti_ami'>Amenities</a></li></div>

            <div className="inner">
              <li className='com'>
                <a href='#floorplan4'>Floor Plan</a></li></div>

                <div className="inner">
              <li className='com'>
                <a href='#location'>Location</a></li></div>


            <div className="inner">

              <li className='com'>
                <a href='Shanti.pdf' download='Shanti.pdf'>Download Brochure</a></li></div>
          </div>
        </div>
        <div className="features" id='project_over'>
          <div className="rows">
            <div className="text-col">
              <h2>SHANTI HEIGHT</h2>
              <p>Shanti height is a 7 storied Under Construction Project and the location is Jawahar Nagar, Goregaon West and is developed by The Laxmi Group. Laxmi Sanskruti was launched in and the possession of the same is likely to be in Mar 2023. Laxmi Sanskruti is RERA approved has the Registration Number bearing P51800034219. Laxmi Sanskruti is tagged as RERA Registered / Second Home / Lifestyle Property. Laxmi Sanskruti has 2 BHK-575 Sq.ft. Carpet Rs.1.69 Crore Configurations. Amenities like Power Backup High speed elevators Grand entrance lobby Gymnasium Intercom/CCTV Video Door Phones Aluminium Sliding Windows POP finished walls Imported Sanitary Fittings Concealed Plumbing Concealed Wiring Marble flooring Vitrified flooring Granite Platform are planned to be provided in Laxmi Sanskruti.</p>
            </div>
            <div className="img-col">
              <img src="https://www.mumbaipropertyexchange.com/images/builders/projects/28949_main.jpg?height=350" alt='lsans' />
            </div>
          </div>
          <hr style={{ opacity: "0.5" }} />
        </div>

        <div id="shanti_ami">
          <h1>Amenities</h1>
        <div id='fitnesscenter' className='fc'>
          {/* <h1>Fitness Center</h1> */}
          <img src={gym} alt="fitnessc" />
        </div>


        <div id='entrancelobby' className='el'>
          {/* <h1>Entrance Lobby</h1> */}
          <img src={gym1} alt="entrancel" />
        </div>
        </div>

        <div id='floorplan4' className='fp'>
          <h1>FloorPlan</h1>
          <img src={floor} alt="floorPlan" />
        </div>

        <div id='location'>
          <h1 className='loch1'>How Get Here</h1>

          <div className="map" id="map-bar4"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.883711422919!2d72.84536227361446!3d19.156566949441476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64b85bcff23%3A0x6bd8319b895d4c4e!2s314%2C%20Rd%20Number%2017%2C%20Jawahar%20Nagar%2C%20Goregaon%20West%2C%20Mumbai%2C%20Maharashtra%20400104!5e0!3m2!1sen!2sin!4v1685895615727!5m2!1sen!2sin" width="500" height="390" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='infra-vinayak'></iframe>
          </div>
        </div>

      </div>


      <div id="maha_rera">
        <p id="maha_p">MahaRERA Registration No : P51800020965 | Also available at <a id='maha_a' href="https://maharera.mahaonline.gov.in" target='_blank' rel='noreferrer'>maharera website</a></p>
      </div>

      <FooterP />
    </>
  )
}

export default Santiheight