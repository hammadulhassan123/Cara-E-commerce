import React from 'react'
import { Container } from 'react-bootstrap'
import "./contact.css"

const CntctGoogle = () => {
  return (
    <div>
        <Container>
            <div className="map-responsive">
                <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19758.471864184114!2d-1.2873257843750159!3d51.75481639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2s!4v1680513731866!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
         </Container>
    </div>
  )
}

export default CntctGoogle
