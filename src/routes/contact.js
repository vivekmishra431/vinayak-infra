import React from 'react' 
import "../components/contactStyles.css"
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
// import FooterP from '../components/FooterProject'
import Form from '../components/Form' 
import twitter from '../images/twitter.svg'
import insta from '../images/instagram.svg'
import whatsapp from '../images/whatsapp.svg'
import youtube from '../images/youtube.svg'
import location from '../images/location.svg'
import mail from '../images/mail.svg'
import phone from '../images/phone.svg'

const contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimage heading="Contact Us" text="Always Happy To Help"></Heroimage>
      
      <div className='contact-container'>
        
        {/* sideicon */}
       
        
        {/* main content */}
        <div className='row'> 
          <div className='col-6 '>
          <Form/>
          {/* sideicon */}
          <div className="sideicon">
                <div className="followus">
              FOLLOW<span style={{color:'transparent'}}>_</span>US
                </div>
                <div class="vl"></div>
                <img src={youtube} className='pointer ' alt='y1'/>
                <img src={insta} className='pointer' alt='i1'/>
                <img src={whatsapp} className='pointer' alt='w1'/>
                <img src={twitter} className='pointer' alt='t1'/>
       
          </div>
          </div>
          <div className='col-6'>
            <div className='map'  id="map-bar"> 
              <div className='frame-buddy'></div>
              <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7535.160977095637!2d72.841629!3d19.213517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6d18bfbad33%3A0x2681ff5e5420d427!2sXth%20Central%20Mall%2C%20Kandivali%2C%20Satya%20Nagar%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1684249003933!5m2!1sen!2sin" width="500" height="390" title="Iframe Example"  ></iframe>
            </div>
          </div> 
        </div>
  
        <div className="contact-collection" > 
          <div className="col-4-loc">
            <img className='contact-icons' src={location} alt='c1'/> 
         
          <div className='mail' style={{margin:'auto 0'}} ><h4>location</h4>
          <div>X-th central mall mahavir nagar kandivali-west </div>
          </div>
          </div>
          <div className="col-4-mail">
            <img className='contact-icons' src={mail} alt='c1'  /> 
          <div className='mail' style={{margin:'auto 0'}} ><h4>E-Mail</h4>
          <div>Vinayakinfra@gmail.com</div>
          </div>
          </div>   
          <div className="col-4-phone">
            <img className='contact-icons' src={phone} alt='c1'/>
         
          <div className='mail' style={{margin:'auto 0'}} ><h4>phone</h4>
          <div>+91 123456789</div>
          </div>
          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default contact
