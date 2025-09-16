import React from 'react'
import Navbar from './Navbar'
import './laxmiSansStyles.css'
import FooterP from './FooterProject'
const Laxmisans = () => {
  return (
    <>
    <div>
      <Navbar></Navbar>
      <div className="image4">
        <div className="heading">
          <h1>LAXMI SANSKRUTI</h1>
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
              <a href='#location'>Location</a></li></div>
          {/* <div className="inner">

            <li className='com'>
              <a href='#amenities'>Amenities</a></li></div> */}
          <div className="inner">

            <li className='com'>
              <a href='#floorplan'>Floor Plan</a></li></div>

          <div className="inner">

            <li className='com'>
              <a href='shanskruti.pdf' download='shanskruti.pdf'>Download Brochure</a></li></div>
        </div>
      </div>
      <div className="features" id='project_over'>
        <div className="rows">
          <div className="text-col">
            <h2>LAXMI SANSKRUTI</h2>
            <p>Laxmi Sanskruti is a 7 storied Under Construction Project and the location is Jawahar Nagar, Goregaon West and is developed by The Laxmi Group. Laxmi Sanskruti was launched in and the possession of the same is likely to be in Mar 2023. Laxmi Sanskruti is RERA approved has the Registration Number bearing P51800034219. Laxmi Sanskruti is tagged as RERA Registered / Second Home / Lifestyle Property. Laxmi Sanskruti has 2 BHK-575 Sq.ft. Carpet Rs.1.69 Crore Configurations. Amenities like Power Backup High speed elevators Grand entrance lobby Gymnasium Intercom/CCTV Video Door Phones Aluminium Sliding Windows POP finished walls Imported Sanitary Fittings Concealed Plumbing Concealed Wiring Marble flooring Vitrified flooring Granite Platform are planned to be provided in Laxmi Sanskruti.</p>
          </div>
          <div className="img-col">
            <img src="https://www.mumbaipropertyexchange.com/images/builders/projects/28949_main.jpg?height=350" alt='lsans' />
          </div>
        </div>
        <hr style={{ opacity: "0.5" }} />
      </div>

      {/* <div id="gallery">
        <h1 style={{ textalign: "center" }}>Gallery</h1>
        <ImageSlider/>
      </div> */}

    

      {/* <div id="amenities">
        <h1 className='amen1'>Amenities</h1>
        <Slidelast/>
      </div> */}

        <div id='fitnesscenter' className='fc'>
          <h1>Fitness Center</h1>
          <img src="https://www.propertycrow.com/photos/7074/photo-31471.jpeg" alt="fitnessc" />
        </div>

        <div id='entrancelobby' className='el'>
        <h1>Entrance Lobby</h1>
        <img src="https://www.propertycrow.com/photos/7074/photo-31470.jpeg" alt="entrancel"/>
      </div>

      <div id='floorplan' className='fp'>
        <h1>FloorPlan</h1>
        <img src="https://www.propertycrow.com/photos/7074/photo-31472.jpeg" alt="floorPlan"/>
      </div>
      
    </div>

    <div id='location'>
          <h1 className='loch1'>How Get Here</h1>
          <div id="map-bar3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.883774660024!2d72.84530567510248!3d19.156564182064713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71c001e5acf%3A0x9d520fbd4021302c!2sLaxmi%20Sanskruti%20-%20The%20LAXMI%20GROUP!5e0!3m2!1sen!2sin!4v1686121923319!5m2!1sen!2sin" width="500" height="390"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>


    <div id="maha_rera">
      <p id="maha_p">MahaRERA Registration No : P51800020965 | Also available at <a id='maha_a' href="https://maharera.mahaonline.gov.in" target='_blank' rel='noreferrer'>maharera website</a></p>
    </div>

    <FooterP/>
    </>
  )
}

export default Laxmisans