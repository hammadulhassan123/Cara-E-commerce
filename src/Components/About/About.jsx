import React from 'react'
import Pagination from '../Pagination'
import HeroAll from '../HeroAll'
import b1 from "../../assets/banner.png"
import FeatCards from '../HComponents/FeatCards'
import Aboutmid from './Aboutmid'
import AboutVid from './AboutVid'

const About = () => {
  const image = b1;
  const heading = "#Know_Us"
  const subheading = "Driven by Passion, Committed by Excellence"
return (
  <>
      <HeroAll image={image} heading={heading} subheading={subheading} />
      <Aboutmid/> 
      <AboutVid/>
      <FeatCards/>
  </>
  )
}

export default About
