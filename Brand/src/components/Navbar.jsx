import React from 'react'
import Logo from '../assets/Logo.png'
import '../App.css'

const App = () => {
  return (
    <div >
      <nav className='container'>
        <div className="logo">
          <img src={Logo} alt="logo" height='70px'/>
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <button className='button'>Login</button>
      </nav>
    </div>
  )
}

export default App
