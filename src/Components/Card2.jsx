import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, CardFooter, Col, Container, Image, Row } from 'react-bootstrap'
import prod9 from "../assets/prod9.jpg"
import prod10 from "../assets/prod10.jpg"
import prod11 from "../assets/prod11.jpg"
import prod12 from "../assets/prod12.jpg"
import prod13 from "../assets/prod13.jpg"
import prod14 from "../assets/prod14.jpg"
import prod15 from "../assets/prod15.jpg"
import prod16 from "../assets/prod16.jpg"

const  Card2 = () => {
    const CardData = [
        {
            image: prod9,
        },
        {
            image: prod10,
        },
        {
            image: prod11,
        },
        {
            image: prod12,
        },
        {
            image: prod13,
        },
        {
            image: prod14,
        },
        {
            image: prod15,
        },
        {
            image: prod16,
        },
    ]
  return (
    <>
      <Container>
        <Row>
            {
                CardData.map((data,index)=>(
                <Col key={index} lg={3} md={6} sm={12} >
                    <Card className='prodCard'>
                        <Card.Body>
                            <Image className='prodImg' src={data.image}  alt="Product" />
                        </Card.Body>
                        <Card.Footer className='prodDet'>
                            <p>addidas</p>
                            <h5>Cartoon Astronaut T-Shirt</h5>
                            <div className='stars'>
                                <FontAwesomeIcon className='icons' icon={faStar}/>
                                <FontAwesomeIcon className='icons' icon={faStar}/>
                                <FontAwesomeIcon className='icons' icon={faStar}/>
                                <FontAwesomeIcon className='icons' icon={faStar}/>
                                <FontAwesomeIcon className='icons' icon={faStar}/>
                            </div>
                            <h4>$78</h4>
                            <FontAwesomeIcon className='cart' icon={faShoppingCart}/>
                        </Card.Footer>
                    </Card>
                </Col>
                ))

            }
        </Row>
      </Container>
    </>
  )
}

export default  Card2
