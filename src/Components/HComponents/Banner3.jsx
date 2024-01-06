import React from 'react'
import { Col, Container } from 'react-bootstrap'
import bg1 from "../../assets/b7.jpg"
import bg2 from "../../assets/b4.jpg"
import bg3 from "../../assets/b18.jpg"

const Banner3 = () => {
    const bnrData=[
        {
            img : bg1,
            h2: "Seasonal Sale",
            h3: "Winter Collection - 50% Off",
        },
        {
            img : bg2,
            h2: "New Footwear Collections",
            h3: "Spring/Summer 2023",
        },
        {
            img : bg3,
            h2: "T Shirts",
            h3: "Trendy Prices",
        },
    ]

  return (
    <>
        <div className="bnr3" >
            {
                bnrData.map((data)=>(
                    <Col className="mt-2" sm={12} md={4} lg={3} >
                        <div className="bnrBox" style={{backgroundImage: `url(${data.img})`}}>
                        <h2>{data.h2}</h2>
                        <h3>{data.h3}</h3>
                        </div>
                    </Col>
                ))
            }
        </div>
    </>
  )
}

export default Banner3
