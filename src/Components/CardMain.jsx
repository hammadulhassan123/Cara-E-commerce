import React from 'react'
import Card1 from './Card1'
import { Card, Col, Container, Row } from 'react-bootstrap'
import prod1 from "../assets/prod1.jpg"
import prod2 from "../assets/prod2.jpg"
import prod3 from "../assets/prod3.jpg"
import prod4 from "../assets/prod4.jpg"
import prod5 from "../assets/prod5.jpg"
import prod6 from "../assets/prod6.jpg"
import prod7 from "../assets/prod7.jpg"
import prod8 from "../assets/prod8.jpg"


const CardMain = () => {
    const CardData = [
        {
            name: 'Product 1',
            image: prod1,
        },
        {
            name: 'Product 2',
            image: prod2,
        },
        {
            name: 'Product 3',
            image: prod3,
        },
        {
            name: 'Product 4',
            image: prod4,
        },
        {
            name: 'Product 5',
            image: prod5,
        },
        {
            name: 'Product 6',
            image: prod6,
        },
        {
            name: 'Product 7',
            image: prod7,
        },
        {
            name: 'Product 8',
            image: prod8,
        },
    ]
  return (
    <>
        <Container>
            <Row>
                {
                    CardData.map((data,index)=>(
                    <Col key={index} lg={3} md={6} sm={12} >
                        <Card1 key={data.name} image={data.image} />
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default CardMain
