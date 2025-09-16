import React from 'react'
import './FooterStyles.css'
import { FaFacebook,FaPhone,FaSearchLocation,FaMailBulk,FaInstagram,FaLinkedin} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
              <div className="left">
                  <div className="location">
                      <FaSearchLocation size={20} style={{ color: 'white', marginRight: '2rem' }} />
                      <div>
                          <h4>32 Suyog Sadan, Mahakali Caves Road,</h4>
                          <h4>Andheri East, Mumbai 93</h4>
                      </div>
                  </div>
                  <div className="phone">
                    <h4><FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }}/>+91 7208431022</h4>
                  </div>
                  <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }}/>vinayak_infra@gmail.com</h4>
                  </div>
              </div>
              <div className="right">
                  <h4>About the Company</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quaerat cum, qui doloribus iusto nihil.</p>
                  <div className="social">
                    <FaFacebook size={30} style={{ color: 'white', marginRight: '1rem' }}/>
                    <FaInstagram size={30} style={{ color: 'white', marginRight: '1rem' }}/>
                    <FaLinkedin size={30} style={{ color: 'white', marginRight: '1rem' }}/>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Footer
