import React from 'react'
import Hero from './Hero'
import "./home.css"
import FeatCards from './FeatCards'
import Banner from './Banner'
import { Col, Row } from 'react-bootstrap'
import { faCartPlus, faMedal, faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card1 from '../Card1'
import Card2 from '../Card2'
import CardMain from '../CardMain'
import Banner2 from './Banner2'
import Banner3 from './Banner3'
import "./home.css"

const Home = () => {
  return (
    <div>
        <Hero/>
        <FeatCards/>
        <Row className='minHead justify-content-center m-2'>
                 <Col md={6} className='text-center text-dark' >
                      <h1 className='teamHead'>Featured Products <FontAwesomeIcon icon={faMedal} color='black' fade/></h1>
                      <p>Summer Collections New Modern Designs</p>
                </Col>
        </Row>
        <CardMain/>
        <Banner/>
        <Row className='minHead justify-content-center m-3'>
                 <Col md={6} className='text-center text-dark' >
                      <h1 className='teamHead'>New Arrivals <FontAwesomeIcon icon={faCartPlus} color='black' fade/></h1>
                      <p>Summer Collections New Modern Designs</p>
                </Col>
        </Row>
        <Card2/>
        <Banner2/>
        <Banner3/>
    </div>
  )
}

export default Home
