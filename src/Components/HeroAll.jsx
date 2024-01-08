import React from 'react'
import "./components.css"

const HeroAll = ({ image, heading, subheading }) => {
  return (
    <>
      <div className='heroAll' style={{backgroundImage: `url(${image})`}}>
            <h2>{heading}</h2>
            <p>{subheading}</p>
      </div>
    </>
  )
}

export default HeroAll
