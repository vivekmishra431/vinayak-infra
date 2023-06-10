import React from 'react'
import './slidelast.css'
const Slidelast = () => {
  return (
    <>
    <div className="slid-cont">
              <div className="slid" data-transition="fade">
                  <input type="radio" name="ssss2" id="ssss2-im-1" className="slid--bullet" defaultChecked="checked" />
                  <div className="slid-im">
                      <img src="https://thelaxmigroup.in/laxmishrushti/assets/images/amenities1.png" />
                      <label htmlFor="ssss2-im-3" className="slid--naavi slid--naavi-previous">Go to slid 3</label>
                      <label htmlFor="ssss2-im-2" className="slid--naavi slid--naavi-next">Go to slid 2</label>
                  </div>
                  <input type="radio" name="ssss2" id="ssss2-im-2" className="slid--bullet" />
                  <div className="slid-im">
                      <img src="https://thelaxmigroup.in/laxmishrushti/assets/images/amenitiessss2.png" />
                      <label htmlFor="ssss2-im-1" className="slid--naavi slid--naavi-previous">Go to slid 1</label>
                      <label htmlFor="ssss2-im-3" className="slid--naavi slid--naavi-next">Go to slid 3</label>
                  </div>
                  <input type="radio" name="ssss2" id="ssss2-im-3" className="slid--bullet" />
                  <div className="slid-im">
                      <img src="https://thelaxmigroup.in/laxmishrushti/assets/images/aminities3.png" />
                      <label htmlFor="ssss2-im-2" className="slid--naavi slid--naavi-previous">Go to slid 2</label>
                      <label htmlFor="ssss2-im-4" className="slid--naavi slid--naavi-next">Go to slid 4</label>
                  </div>
                  <input type="radio" name="ssss2" id="ssss2-im-4" className="slid--bullet" />
                  <div className="slid-im">
                      <img src="https://thelaxmigroup.in/laxmishrushti/assets/images/amenities4.png" />
                      <label htmlFor="ssss2-im-3" className="slid--naavi slid--naavi-previous">Go to slid 3</label>
                      <label htmlFor="ssss2-im-1" className="slid--naavi slid--naavi-next">Go to slid 1</label>
                  </div>
                  <input type="radio" name="ssss2" id="ssss2-im-5" className="slid--bullet" />
                  <div className="slid-im">
                      <img src="https://thelaxmigroup.in/laxmishrushti/assets/images/amenities6.png" />
                      <label htmlFor="ssss2-im-4" className="slid--naavi slid--naavi-previous">Go to slid 4</label>
                      <label htmlFor="ssss2-im-2" className="slid--naavi slid--naavi-next">Go to slid 2</label>
                  </div>
                  <input type="radio" name="ssss2" id="ssss2-im-6" className="slid--bullet" />
                  <div className="slid-im">
                      <img src="https://thelaxmigroup.in/laxmishrushti/assets/images/amenities10.png" />
                      <label htmlFor="ssss2-im-4" className="slid--naavi slid--naavi-previous">Go to slid 4</label>
                      <label htmlFor="ssss2-im-3" className="slid--naavi slid--naavi-next">Go to slid 3</label>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Slidelast
