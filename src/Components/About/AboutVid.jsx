import React from 'react'
import { Link } from 'react-router-dom'
import av from "../../assets/app video.mp4"

const AboutVid = () => {
  return (
    <>
      <section className='abtVid' >
            <h1>
                Download Our <Link to="" >App</Link>
            </h1>
            <div className="video">
                <video  autoPlay loop muted src={av}></video>
            </div>
      </section>
    </>
  )
}

export default AboutVid
