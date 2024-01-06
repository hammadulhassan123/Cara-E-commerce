import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, CardFooter, Col, Container, Image, Row } from 'react-bootstrap'
import prod1 from "../assets/prod1.jpg"
import prod2 from "../assets/prod2.jpg"
import prod3 from "../assets/prod3.jpg"
import prod4 from "../assets/prod4.jpg"
import prod5 from "../assets/prod5.jpg"
import prod6 from "../assets/prod6.jpg"
import prod7 from "../assets/prod7.jpg"
import prod8 from "../assets/prod8.jpg"



const Card1 = ({image}) => {
  return (
    <>
        <Card className='prodCard'>
        <Card.Body>
            <Image className='prodImg' src={image} alt="Product" />
        </Card.Body>
        <Card.Footer className='prodDet'>
            <p>addidas</p>
            <h5>Cartoon Astronaut T-Shirt</h5>
            <div className='stars'>
            <FontAwesomeIcon className='icons' icon={faStar} />
            <FontAwesomeIcon className='icons' icon={faStar} />
            <FontAwesomeIcon className='icons' icon={faStar} />
            <FontAwesomeIcon className='icons' icon={faStar} />
            <FontAwesomeIcon className='icons' icon={faStar} />
            </div>
            <h4>$78</h4>
            <FontAwesomeIcon className='cart' icon={faShoppingCart} />
        </Card.Footer>
        </Card>
    </>
  )
}

export default Card1
