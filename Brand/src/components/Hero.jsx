import React from 'react'
import '../App.css'
import Logo from '../assets/Logo.png'
import shoes from '../assets/shoes.png'
import flipkart from '../assets/flipkart.webp'
import amazon from '../assets/amazon.png'

const Hero = () => {
  return (
   <main className='hero container'>
    <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE YHR BEST AND WE'RE HERE TO HELP YOU WITH
            OUR 
            SHOES.
        </p>
        <div className="hero-button">
            <button className='fst-btn'>shop now</button>
            <button className='snd-btn'>category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src={amazon} alt="amazon" height='50px' />
                <img src={flipkart} alt="flipkart"  height='50px'/>
            </div>
        </div>
    </div>
    <div className='hero-img'>
        <img src={shoes} alt="shoes"  style={{height: "100%", maxHeight: "600px"}}  />
    </div>
   </main>
  )
}

export default Hero
