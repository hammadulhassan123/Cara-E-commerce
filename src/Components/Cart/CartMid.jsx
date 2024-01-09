import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CartTotal from './CartTotal'
import "./cart.css"

const CartMid = () => {
  return (
    <>
        <section className="cart-add" >
            <Container>
                <Row>
                    <Col lg={6} md={12} >
                        <div className="coupon">
                        <h3>Apply Coupon</h3>
                        <Form className='couponForm'>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Enter Your Coupon" />
                            </Form.Group>
                            <Button variant="primary" className="simple mx-2">
                                Apply
                            </Button>
                        </Form>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <CartTotal/>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default CartMid
