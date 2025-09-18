import React from 'react'
import './ImageSBSStyles.css'
const SBS = () => {
  return (
    <>
    <div className="slideshow-contain">
  <div className="slides" data-transition="fade">
    <input type="radio" name="sss2" id="sss2-item-1" className="slides--bullet" defaultChecked="checked" />
    <div className="slides-it">
      <img src="https://thelaxmigroup.in/laxmi-raajvilas/image/Podium%20Floor/Indoor%20game_Zone%20Image%2010.jpg" alt='' />
      <label htmlFor="sss2-it-3" className="slides--navi slides--navi-previous">Go to slide 3</label>
      <label htmlFor="sss2-it-2" className="slides--navi slides--navi-next">Go to slide 2</label>
    </div>
    <input type="radio" name="sss2" id="sss2-it-2" className="slides--bullet" />
    <div className="slides-it">
      <img src="https://thelaxmigroup.in/laxmi-raajvilas/image/First%20Floor/GYM%2001%20Image%2011.jpg" alt='' />
      <label htmlFor="sss2-it-1" className="slides--navi slides--navi-previous">Go to slide 1</label>
      <label htmlFor="sss2-it-3" className="slides--navi slides--navi-next">Go to slide 3</label>
    </div>
    <input type="radio" name="sss2" id="sss2-it-3" className="slides--bullet" />
    <div className="slides-it">
      <img src="https://thelaxmigroup.in/laxmi-raajvilas/image/Podium%20Floor/Kids%20play%20area.jpg" alt='' />
      <label htmlFor="sss2-it-2" className="slides--navi slides--navi-previous">Go to slide 2</label>
      <label htmlFor="sss2-it-4" className="slides--navi slides--navi-next">Go to slide 4</label>
    </div>
    <input type="radio" name="sss2" id="sss2-it-4" className="slides--bullet" />
    <div className="slides-it">
      <img src="https://thelaxmigroup.in/laxmi-raajvilas/image/Podium%20Floor/Swimming%20pool_1.jpg" alt='' />
      <label htmlFor="sss2-it-3" className="slides--navi slides--navi-previous">Go to slide 3</label>
      <label htmlFor="sss2-it-1" className="slides--navi slides--navi-next">Go to slide 1</label>
    </div>
    <input type="radio" name="sss2" id="sss2-it-5" className="slides--bullet" />
    <div className="slides-it">
      <img src="https://thelaxmigroup.in/laxmi-raajvilas/image/Podium%20Floor/last__podium.jpeg" alt='' />
      <label htmlFor="sss2-it-4" className="slides--navi slides--navi-previous">Go to slide 4</label>
      <label htmlFor="sss2-it-2" className="slides--navi slides--navi-next">Go to slide 2</label>
    </div>
    <input type="radio" name="sss2" id="sss2-it-6" className="slides--bullet" />
    <div className="slides-it">
      <img src="https://thelaxmigroup.in/laxmi-raajvilas/image/Podium%20Floor/Courtyard%20image%207.jpg"alt='' />
      <label htmlFor="sss2-it-4" className="slides--navi slides--navi-previous">Go to slide 4</label>
      <label htmlFor="ssss2-it-3" className="slides--navi slides--navi-next">Go to slide 3</label>
    </div>
  </div>
</div>
</>
  )
}

export default SBS
