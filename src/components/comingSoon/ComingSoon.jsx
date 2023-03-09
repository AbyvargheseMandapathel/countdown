import React from 'react'
import './ComingSoon.css'

// components
import Countdown from '../countdown/Countdown'

// images
import LumiereLogo from '../../assets/LUMIERELOGO.png'
import Lumiere23Text from '../../assets/LUMIERETEXT.png'
import InstagramLogo from '../../assets/instagram.png'

const ComingSoon = () => {
  return (
    <div className='container-coming-soon'>
      <div className="lumiere-logo-sec">
        <img src={LumiereLogo} alt="Lumiere23 Logo" />
      </div>
      <div className="lumiere23-text-sec">
        <img src={Lumiere23Text} alt="" />
      </div>
        <h1 className='coming-soon-text'>Coming Soon</h1>
        <Countdown/>
        <footer className='footer-countdown'>
            <p>
                <img className='instagram-logo-footer' src={InstagramLogo} alt="instagram" />
                &nbsp;
                <a href="https://www.instagram.com/cek_lumiere/">@cek_lumiere</a>
            </p>
        </footer>
    </div>
  )
}

export default ComingSoon
