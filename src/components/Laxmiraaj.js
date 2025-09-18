import React from 'react'
import Navbar from './Navbar'
import './LRstyles.css'
import ImageSlider from './ImageSlider'
import FooterP from './FooterProject'
import SBS from './SBS'

const Laxmiraaj = () => {
  return (
    <>
    <div>
      <Navbar></Navbar>
      <div className="image">
        <div className="heading">
          <h1>LAXMI RAJVILLAS</h1>
          <p>A Symbol of Classical Elegance</p>
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
              <a href='#gallery'>Gallery</a></li></div>
          
          <div className="inner">

            <li className='com'>
              <a href='#gallery2'>Amenities</a></li></div>


          <div className="inner">

            <li className='com'>
              <a href='#floorplan1'>Floor Plan</a></li></div>


            <div className="inner">

              <li className='com'>
                <a href='#location'>Location</a></li></div>

          <div className="inner">

            <li className='com'>
              <a href='Claim Form.pdf' download='Claim Form.pdf'>DOWNLOAD BROCHURE</a></li></div>
        </div>
      </div>
      <div className="features" id='project_over'>
        <div className="rows">
          <div className="text-col">
            <h2>LAXMI RAJVILLAS</h2>
            <p>Laxmi Raajvilas is the ultimate frontier of splendour. It is a perfect amalgamation of resplendent beauty with a heritage look and an architectural marvel beyond words. The property is an imposing architectural creation decked in breathtaking gardens, magnificent carvings, beautiful Chhatris, stunning Jharokhas, and designer parks. Imagine living in homes bathed in magnificent and aristocratic look with distinctly unique modern amenities and décor. The sheer grandeur of the classical abode welcomes you to the unrivalled world of exquisite living with stately amenities. Raajvilas, a Rajasthani-themed residential development on the Goregaon-Mulund Link Road at the Upper Sunder Nagar, Goregaon West, Mumbai, is regal in its demeanour and the experiences that it offers.</p>
          </div>
          <div className="img-col">
            <img src="http://www.thelaxmigroup.in/images/resources/splend.jpeg" alt='laar' />
          </div>
        </div>
        <hr style={{ opacity: "0.5" }} />
      </div>

      <div id="gallery">
        
        <div className="imgs">
        <h1 style={{ textalign: "center" }}>Gallery</h1>
        <ImageSlider/>
        </div>
        
      </div>

      <div id='gallery2'>
        <h1>Amenities</h1>
      <SBS/>
      </div>    

      <div id='floorplan1'>
        <h1>FloorPlan</h1>
        <img src="http://www.thelaxmigroup.in/laxmi-raajvilas/image/floorplans_jpeg/TYPICAL%20FLOOR%20PLAN.jpg" alt="floorPlan" />
      </div>
    </div>

    <div id='location'>
          <h1 className='loch1'>How Get Here</h1>
          
          <div className="map" id="map-bar">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60295.70689526698!2d72.76631084863283!3d19.174152800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6f87c434635%3A0x792a17347a0c5d58!2sLaxmi%20Raajvilas%20-%20THE%20LAXMI%20GROUP!5e0!3m2!1sen!2sin!4v1685897246227!5m2!1sen!2sin" width="500" height="390" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div></div>

    <div id="maha_rera">
      <p id="maha_p">MahaRERA Registration No : P51800020965 | Also available at <a id='maha_a' href="https://maharera.mahaonline.gov.in" target='_blank' rel='noreferrer'>maharera website</a></p>
    </div>

    <FooterP/>
    </>
  )
}

export default Laxmiraaj