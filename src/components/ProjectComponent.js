import React from 'react'
import './ProjectCStyles.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer2 from './FooterProject'
// import 'bootstrap/dist/css/bootstrap.min.css'

const ProjectComponent = () => {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="image1">
          <div className="heading">
            <h1 className='comh1'>Completed Projects</h1>
          </div>
        </div>
      </div>

      <div className="main">
        <div id="outer">
          <div className="inner">

            <li className='pressong1'>
              <Link to='/projectsong' className='temp'>Ongoing</Link></li></div>
          <div className="inner">

            <li className='presscom1 active1'>
              <Link to='/projectscom' className='temp'>Completed</Link></li></div>
        </div>
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src="https://www.addressofchoice.com/aoc_assets/elevation/48183/1578379400_lax_elevation1.jpeg" className='img1' alt='laxmi callista' /></div>
              <div className="card_content">
                <h2 className="card_title">LAXMI CALLISTA</h2>
                <p className="card_text">Off. S.V Road,Goregaon(W), Mumbai</p>
                <button className="btn card_btn"> <span class="material-symbols-outlined">
                  download</span>DOWNLOAD BROCHURE</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src="https://www.smcrealty.com/images/microsites/slideshow/7654.jpg" className='img2' alt='laxmi heights' /></div>
              <div className="card_content">
                <h2 className="card_title">LAXMI HEIGHTS</h2>
                <p className="card_text">Jawahar Nagar, Goregaon(W)</p>
                <button className="btn card_btn"> <span class="material-symbols-outlined">
                  download
                </span>DOWNLOAD BROCHURE</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src="https://is1-2.housingcdn.com/4f2250e8/e76103a39f61f465bc82c0001652b641/v0/fs/laxmi_enclave-malad_west-mumbai-reputed_builder.jpg" className='img3' alt='laxmi enclave' /></div>
              <div className="card_content">
                <h2 className="card_title">LAXMI ENCLAVE</h2>
                <p className="card_text">Nadiadwala Colony, Malad(W)</p>
                <button className="btn card_btn"> <span class="material-symbols-outlined">
                  download
                </span>DOWNLOAD BROCHURE</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src="https://www.linkpicture.com/q/samrath-shrusti_1.png" className='img4' alt='samrath shrusti' /></div>
              <div className="card_content">
                <h2 className="card_title">SAMRATH SHRUSHTI</h2>
                <p className="card_text">M.G. Road, Goregaon(W)</p>
                <button className="btn card_btn"> <span class="material-symbols-outlined">
                  download
                </span>DOWNLOAD BROCHURE</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src="https://www.addressofchoice.com/aoc_assets/elevation/52781/1608179892_villa-elevation-17456516.jpeg" className='img5' alt='laxmi villa' /></div>
              <div className="card_content">
                <h2 className="card_title">LAXMI VILLA</h2>
                <p className="card_text">Jawahar Nagar, Goregaon(W)</p>
                <button className="btn card_btn"> <span class="material-symbols-outlined">
                  download
                </span>DOWNLOAD BROCHURE</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src="https://www.commonfloor.com/is/a/c/655x525/public/images/apartments/original_img/p7qhya.gif" className='img5' alt='chamunda jewel' /></div>
              <div className="card_content">
                <h2 className="card_title">CHAMUNDA JEWEL</h2>
                <p className="card_text">Yeshawant Nagar, Goregaon(W)</p>
                <button className="btn card_btn"> <span class="material-symbols-outlined">
                  download
                </span>DOWNLOAD BROCHURE</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Footer2></Footer2>
    </>
  )
}




export default ProjectComponent