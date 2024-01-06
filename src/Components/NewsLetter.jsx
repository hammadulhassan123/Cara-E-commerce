import React from 'react'
import { Button, Form } from 'react-bootstrap'
import b14 from "../assets/b14.png"

const NewsLetter = () => {
  return (
    <>
        <section id='newsfeed' className='newsLetter' style={{backgroundImage: `url(${b14})`}} >
          <div className="newsText">
            <h4>
              SignUp for our Newsletter
            </h4>
            <p>
              Get E-mail about our latest shop and <span style={{color: 'goldenrod'}} >special offers</span>
            </p>
          </div>
          <Form className='newsForm'>
            <input type="text" name="" id="" placeholder='Your Email Address'/>
            <Button className="newsBtn btn-light" >Sign-Up</Button>
          </Form>
        </section> 
    </>
  )
}

export default NewsLetter
