import React from 'react'
import HeroAll from '../HeroAll'
import { Col, Container, Row } from 'react-bootstrap'
import b1 from "../../assets/banner.png"
import CntctGoogle from './CntctGoogle'
import ContactDetails from './ContactDetails'
import Pagination from '../Pagination'
import ContactSection from './ContactSection'

const Contact = () => {
  const image = b1;
  const heading = "#Contact_Us"
  const subheading = "LEAVE A MESSAGE, We love to hear from you!"
return (
    <>
      <HeroAll image={image} heading={heading} subheading={subheading} />
      <Container className='mt-5 mb-5'>
        <Row>
          <Col md={6} sm={12} >
              <ContactDetails/>
          </Col>  
          <Col md={6} sm={12} >
              <CntctGoogle/>
          </Col>  
        </Row> 
      </Container>
      <ContactSection/>
      <Pagination/>
    </>
  )
}

export default Contact
