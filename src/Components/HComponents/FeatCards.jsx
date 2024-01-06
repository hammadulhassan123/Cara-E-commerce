import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import f1 from "../../assets/f1.png"
import f2 from "../../assets/f2.png"
import f3 from "../../assets/f3.png"
import f4 from "../../assets/f4.png"
import f5 from "../../assets/f5.png"
import f6 from "../../assets/f6.png"

const FeatCards = () => {
    const featureDetails=[
        {
            image: f1,
            heading: "Free Shipping",
            bgColor: '#fddde4',
        },   
        {
            image: f2,
            heading: "Online Order",
            bgColor: '#fddde4',
        },   
        {
            image: f3,
            heading: "Save Money",
            bgColor: '#cdebbc',
        },   
        {
            image: f4,
            heading: "Promotions",
            bgColor: '#cdd4f8',
        },   
        {
            image: f5,
            heading: "Happy Sell",
            bgColor: '#fddde4',
        },   
        {
            image: f6,
            heading: "Support",
            bgColor: '#fddde4',
        },   
    ]
  return (
    <>
      <Container>
        <Row>
            {featureDetails.map((ft)=>(
                    <Col key={ft.heading} className='mt-2' lg={2} md={6}>
                        <div className="ftbox">
                            <img src={ft.image} alt={ft.heading} />
                            <h6 style={{backgroundColor: ft.bgColor}}>{ft.heading}</h6>
                        </div>
                    </Col>
                ))}
        </Row>
      </Container>
    </>
  )
}

export default FeatCards
