import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2><em>Cook </em> Food,<br />Serve <em>LOVE ...</em></h2>
            <p>Choose from a diverse menu featuring a delactable array of dishes crafted with the finest ingredients and satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <a href="#explore-menu"><button className='buttonwl'>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header