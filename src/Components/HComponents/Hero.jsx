import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <>
    <div className='hero'>
      <h4>Trade-in-offer</h4>
      <h2>Super Value Deals</h2>
      <h1>On All Products</h1>
      <p>Save more with coupons & upto 70% off!</p>
      <button><FontAwesomeIcon className='icon' icon={faShoppingCart}/> Shop Now</button>
    </div>
    </>
  )
}

export default Hero
