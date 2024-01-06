import React from 'react'
import bg1 from "../../assets/b17.jpg"
import bg2 from "../../assets/b10.jpg"
import { Button, Col, Container, Row } from 'react-bootstrap'

const Banner2 = () => {
    const bnrData=[
        {
            image: bg1,
            head4: "Crazy Deals",
            head2: "Buy 1 Get 1 Free",
            para: "The best classic dress is on sale at Cara",
            btnTxt: "Learn More",
        },
        {
            image: bg2,
            head4: "Spring/Summer",
            head2: "Upcomming Season",
            para: "The best classic dress is on sale at Cara",
            btnTxt: "Shop Now",
        },
    ]

  return (
    <>
            <div className='bnr2 mt-4'>
            { 
                bnrData.map((data)=>(
                    <div className='mt-2' sm={12} md={6}>
                        <div className="bnrBox" style={{backgroundImage: `url(${data.image})`}}>
                            <h4>{data.head4}</h4>
                            <h2>{data.head2}</h2>
                            <span>{data.para}</span>
                            <button className='bnr2Btn' >{data.btnTxt}</button>
                        </div>
                    </div>
                ))
            }
            </div>
    </>
  )
}

export default Banner2
