import React from 'react'
import CardMain from '../CardMain'
import Card2 from '../Card2'
import b1 from '../../assets/b1.jpg'
import HeroAll from '../HeroAll'
import Pagination from '../Pagination'

const Shop = () => {
    const image = b1;
    const heading = "#Stay_Home";
    const subheading = "Save more with coupons & upto 70% off!";
  return (
    <>
      <HeroAll image={image} heading={heading} subheading={subheading} />
      <CardMain/>
      <Card2/>     
      <Pagination/>
    </>
  )
}

export default Shop
