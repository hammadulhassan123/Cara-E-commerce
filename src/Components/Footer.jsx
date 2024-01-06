import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClock, faHome, faEnvelope, faPhone, faPrint,faCopyright } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"
import apple from '../assets/apple.jpg'
import play from '../assets/play.jpg'
import pay from '../assets/pay.png'
import "./components.css"

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start ">
      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={4} lg={4} className="mx-auto mb-4">
              <div className="m-3">
                <img src={logo} alt="" />
              </div>
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-3" /> New York, NY
                10012, US
              </p>
              {/* <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                hammadghost98@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPrint} className="me-3" /> +92-123-1234567
              </p> */}
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" /> +92-123-1234567
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} className="me-3" /> 10:00-18:00 | MON-SAT
              </p>
              <h6>Follow Us:</h6>
              <div className="flwIcons text-center text-md-start d-flex gap-3">
                <FontAwesomeIcon className='icons' icon={faFacebookF} />
                <FontAwesomeIcon className='icons' icon={faXTwitter} />
                <FontAwesomeIcon className='icons' icon={faInstagram} />
                <FontAwesomeIcon className='icons' icon={faPinterestP} />
                <FontAwesomeIcon className='icons' icon={faYoutube} />
              </div>
            </Col>

            <Col md={4} lg={2} mx-auto mb-4>
              <h6 className="text-uppercase fw-bold mt-3 ">Products</h6>
              <div className='abtUs mt-4'>
              <p>
                 About us
              </p>
              <p>
                  Privacy Policy
              </p>
              <p>
                  Delivery Information
              </p>
              <p>
                  Terms & Conditions
              </p>
              <p>
                  Contact Us
              </p>
              </div>
            </Col>

            <Col md={4} lg={2}   mx-auto mb-4>
              <h6 className="text-uppercase fw-bold mt-3 ">My Account</h6>
              <div className='abtUs mt-4'>
              <p>
                  Sign In
              </p>
              <p>
                  View Cart
              </p>
              <p>
                  My Wishlist
              </p>
              <p>
                  Track My Order
              </p>
              <p>
                  Help
              </p>
              </div>
            </Col>

            <Col className='install' md={4} lg={4}   mx-auto mb-4>
              <h6 className="text-uppercase fw-bold mt-3 ">Products</h6>
              <div className='abtUs mt-4'>
              <p>From Appstore Or Google Play</p>
              </div>
              <Col className='column d-flex gap-3'>
                <img src={apple} alt="" />
                <img src={play} alt="" />
              </Col>
              <p>Secured Payment Gateways</p>
               <img src={pay} alt="" style={{ border:'none' }} /> 
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
      >
        <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} CARA |
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
