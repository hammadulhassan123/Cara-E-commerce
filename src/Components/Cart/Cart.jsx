import React from 'react'
import HeroAll from '../HeroAll';
// import b1 from '../../assets/bg-cart.jpg'
import b1 from '../../assets/BGcart.png'

const Cart = () => {
  const image = b1;
  const heading = "Your Cart"
  const subheading = "Shop smart, cart smarter - your treasures await!"
return (
    <>
        <HeroAll image={image} heading={heading} subheading={subheading}/>
        <h1>Your Cart</h1> 
    </>
  )
}

export default Cart
