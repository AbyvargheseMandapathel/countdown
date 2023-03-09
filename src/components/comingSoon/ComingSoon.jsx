import React from 'react'
import './ComingSoon.css'

// components
import Countdown from '../countdown/Countdown'

// images
import LumiereLogo from '../../assets/LUMIERELOGOwebp.webp'
import Lumiere23Text from '../../assets/LUMIERETEXTwebp.webp'
import InstagramLogo from '../../assets/instagram-logo.svg'
import FacebookLogo from '../../assets/facebook-logo.svg'

const ComingSoon = () => {
  return (
    <div className='container-coming-soon'>
      <div className="lumiere-logo-sec">
        <img src={LumiereLogo} alt="Lumiere23 Logo" />
      </div>
      <div className="lumiere23-text-sec">
        <img src={Lumiere23Text} alt="" />
        <h2>National Level Techno-Cultural Fest</h2>
      </div>
        <h1 className='coming-soon-text'>Coming Soon..</h1>
        <Countdown/>
        <footer className='footer-countdown'>
              <a className='social-links' href="https://www.instagram.com/cek_lumiere/">
                <img src={InstagramLogo} alt="CEK Lumiere Instagram" />
              </a>
              <a className='social-links' href="https://www.facebook.com/ceklumiere/">
                <img src={FacebookLogo} alt="CEK Lumiere Facebook" />
              </a>
        </footer>
    </div>
  )
}

export default ComingSoon