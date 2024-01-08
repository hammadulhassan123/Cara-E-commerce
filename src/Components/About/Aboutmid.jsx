import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import ab from '../../assets/a6.jpg'
import "./about.css"

const Aboutmid = () => {
  return (
    <>
      <section className="about m-3 justify-content-center">
        <Container>
          <Row>
            <Col md={4} sm={12}>
              <div className="midImg img-fluid " >
                <Image src={ab} alt="Solar on a house" fluid />
              </div>
            </Col>
            <Col md={8} sm={12}>
              <div className="about-text mt-5">
                <h2 className="about-head ">Who We Are?</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                  accusamus repellendus voluptatem minima possimus expedita nisi
                  modi aut dolorum! A suscipit minus totam iusto odit libero
                  quibusdam explicabo natus aliquid quia, facilis qui, enim
                  officiis, aperiam deserunt dolorem at quae dolorum soluta
                  quisquam magnam nostrum. Officia enim culpa saepe! Suscipit.
                </p>
                <abbr title="" className='m-2'>
                  Create stunning images with as much or as little control as
                  you like thanks to a choice of Basic and Creative modes.
                </abbr>
                <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%" className='mt-2 ' >
                  Create stunning images with as much or as little control as
                  you like thanks to a choice of Basic and Creative modes.
                </marquee>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Aboutmid
