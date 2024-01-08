import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';

const ContactSection = () => {
  return (
    <>
      <section className="form-details">
        <Container>
          <Row>
            <Col lg={8} md={12}>
              <Form>
                <span>LEAVE A MESSAGE</span>
                <h2>We love to hear from you</h2>
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>
                <Form.Group controlId="formSubject">
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className='simple'>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={4} md={12}>
              <div className="people">
                <div>
                  <img src={img1} alt="" />
                  <p>
                    <span>John Doe</span>Senior Marketing Manager <br /> Phone:
                    + 000 123 000 77 88
                    <br />
                    Email: contact@example.com
                  </p>
                </div>
                <div>
                  <img src={img2} alt="" />
                  <p>
                    <span>William Smith</span>Senior Marketing Manager <br />{" "}
                    Phone: + 000 123 000 77 88
                    <br />
                    Email: contact@example.com
                  </p>
                </div>
                <div>
                  <img src={img3} alt="" />
                  <p>
                    <span>Emma Stone</span>Senior Marketing Manager <br />{" "}
                    Phone: + 000 123 000 77 88
                    <br />
                    Email: contact@example.com
                  </p>
                </div>
                {/* Repeat similar structures for other people */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactSection;
