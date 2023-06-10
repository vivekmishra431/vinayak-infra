import React from 'react'
import './Imagesliderstyles.css'
export default function ImageSlider() {
  return (
    <>
          <div className="slideshow-container">
  <div className="slideshow" data-transition="fade">
    <input type="radio" name="ss2" id="ss2-item-1" className="slideshow--bullet" defaultChecked="checked" />
    <div className="slideshow--item">
      <img src="http://www.thelaxmigroup.in/image/internal-amenities/Dinning%20Area.jpg" />
      <label htmlFor="ss2-item-3" className="slideshow--nav slideshow--nav-previous">Go to slide 3</label>
      <label htmlFor="ss2-item-2" className="slideshow--nav slideshow--nav-next">Go to slide 2</label>
    </div>
    <input type="radio" name="ss2" id="ss2-item-2" className="slideshow--bullet" />
    <div className="slideshow--item">
      <img src="http://www.thelaxmigroup.in/image/internal-amenities/kid's%20bedroom.jpg" />
      <label htmlFor="ss2-item-1" className="slideshow--nav slideshow--nav-previous">Go to slide 1</label>
      <label htmlFor="ss2-item-3" className="slideshow--nav slideshow--nav-next">Go to slide 3</label>
    </div>
    <input type="radio" name="ss2" id="ss2-item-3" className="slideshow--bullet" />
    <div className="slideshow--item">
      <img src="http://www.thelaxmigroup.in/image/internal-amenities/kitchen_01.jpg" />
      <label htmlFor="ss2-item-2" className="slideshow--nav slideshow--nav-previous">Go to slide 2</label>
      <label htmlFor="ss2-item-4" className="slideshow--nav slideshow--nav-next">Go to slide 4</label>
    </div>
    <input type="radio" name="ss2" id="ss2-item-4" className="slideshow--bullet" />
    <div className="slideshow--item">
      <img src="http://www.thelaxmigroup.in/image/internal-amenities/Living%20Room_01.jpg" />
      <label htmlFor="ss2-item-3" className="slideshow--nav slideshow--nav-previous">Go to slide 3</label>
      <label htmlFor="ss2-item-1" className="slideshow--nav slideshow--nav-next">Go to slide 1</label>
    </div>
    <input type="radio" name="ss2" id="ss2-item-5" className="slideshow--bullet" />
    <div className="slideshow--item">
      <img src="http://www.thelaxmigroup.in/image/internal-amenities/Master_bedroom.jpg" />
      <label htmlFor="ss2-item-4" className="slideshow--nav slideshow--nav-previous">Go to slide 4</label>
      <label htmlFor="ss2-item-2" className="slideshow--nav slideshow--nav-next">Go to slide 2</label>
    </div>
    <input type="radio" name="ss2" id="ss2-item-6" className="slideshow--bullet" />
    <div className="slideshow--item">
      <img src="http://www.thelaxmigroup.in/image/internal-amenities/study%20room%2002.jpg" />
      <label htmlFor="ss2-item-4" className="slideshow--nav slideshow--nav-previous">Go to slide 4</label>
      <label htmlFor="ss2-item-3" className="slideshow--nav slideshow--nav-next">Go to slide 3</label>
    </div>
  </div>
</div>

</>	
  )
}
