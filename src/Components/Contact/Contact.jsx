import React from 'react'
import HeroAll from '../HeroAll'
import { Pagination } from 'react-bootstrap'
import b1 from "../../assets/banner.png"

const Contact = () => {
  const image = b1;
  const heading = "#Contact_Us"
  const subheading = "LEAVE A MESSAGE, We love to hear from you!"
return (
    <>
      <HeroAll image={image} heading={heading} subheading={subheading} />
      <h1>Contact Us</h1> 
      <Pagination/>
    </>
  )
}

export default Contact
