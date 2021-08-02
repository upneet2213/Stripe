import React , {useContext} from 'react'
import { AppContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const {closeSubmenu}= useContext(AppContext)
  return <div className="hero" onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <div className="hero-info">
        <h1>Payments Infrastrucutre for the internet</h1>
        <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <button className="btn">Start Now</button>
      </div>
      <div className="hero-images">
      <img src={phoneImg} alt="" />
    </div>
    </div>
    
  </div>
}

export default Hero
