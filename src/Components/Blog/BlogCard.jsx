import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import "./blog.css"
import { Link } from 'react-router-dom'

const BlogCard = ({image,heading,para}) => {
  return (
        <div className='blog'>
                    <div className="box">
                        <div className='boxImg img-fluid order-lg-1 order-md-1'>
                            <img src={image} alt="" />
                        </div>
                        <div className='boxTxt order-lg-2 order-md-2'>
                            <h4>{heading}</h4>
                            <p>{para}</p>
                            <Link to="" className='ancr' >CONTINUE READING </Link>
                        </div>
                        <h1 className='boxHead'>13/01</h1>
                    </div>
        </div>  
  )
}

export default BlogCard

