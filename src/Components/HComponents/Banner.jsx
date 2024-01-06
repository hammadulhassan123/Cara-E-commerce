import React from 'react'
import { Button, Container } from 'react-bootstrap'
import bgImg from "../../assets/b2.jpg"

const Banner = () => {
  return (
    <>
      <div className='banner' style={{backgroundImage: `url(${bgImg})`}}>
            <h4>Repair Services</h4>
            <h2>Upto <span className='text-danger fs-1' >70% off</span> on All T-shirts and Accessories </h2>
            <Button className='bnrBtn btn-light'>Explore More</Button>
      </div>
    </>
  )
}

export default Banner
