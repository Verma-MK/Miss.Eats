import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='tomatologofooter' src={assets.logo} alt="" />


            {/* <img className='tomatologofooter' src="https://www.ubereats.com/_static/97c43f8974e6c876.svg" alt="" /> */}




            <p>All <em>INDIA </em> Food <em>Delivery</em> website, Get your <em>Food</em> All over <em>The NATION .</em> </p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CUSTOMER CARE</h2>
            <ul>
              <li>+XX-XXXXXXXXXX</li>
              <li>hello@Miss.Eats</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 © Miss.Eats - All rights reserved.</p>
    </div>
  )
}

export default Footer