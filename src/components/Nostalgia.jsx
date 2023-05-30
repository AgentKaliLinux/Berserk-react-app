import React from 'react'
import img1 from "../assets/3.jpg"
import img2 from "../assets/5.jpg"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Nostalgia = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false}  interval={1000} >
        <div>
          <img src={img1} alt="Item1" />
          <p className='legend'>Black Swords Man</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className='legend'>Griffith</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Nostalgia