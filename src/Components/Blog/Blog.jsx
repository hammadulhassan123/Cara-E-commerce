import React from 'react'
import HeroAll from '../HeroAll'
import b1 from "../../assets/b19.jpg"
import Pagination from '../Pagination';
import c1 from "../../assets/blog1.jpg";
import c2 from "../../assets/blog2.jpg";
import c3 from "../../assets/blog3.jpg";
import c4 from "../../assets/blog4.jpg";
import c5 from "../../assets/blog5.jpg";
import BlogCard from './BlogCard';

const Blog = () => {
    const image = b1;
    const heading = "#Read_More"
    const subheading = "read all case studies about our products!"
    const cardData = [
      {
        image: c1,
        heading: "The Cotton-Jersey Zip-Up Hoodies",
        para: "Crafted for comfort and style, our cotton-jersey zip-up hoodies redefine casual wear with premium fabric and versatile designs, perfect for any occasion.",
      },
      {
        image: c2,
        heading: "How to Style a Quiff",
        para: "Master the art of the quiff effortlessly with our step-by-step guide, offering tips and tricks to achieve the perfect, fashionable hairstyle for any event.",
      },
      {
        image: c3,
        heading: "Must-Have Skater Girl Items",
        para: "Discover the essential skater girl collection featuring statement pieces and accessories, curated to elevate your skate style while blending urban edge and feminine flair.",
      },
      {
        image: c4,
        heading: "Runway-Inspired Trends",
        para: "Explore the latest runway-inspired trends curated by fashion experts, translating high-end couture into wearable and chic styles for your everyday fashion statement.",
      },
      {
        image: c5,
        heading: "AW20 Menswear Trends",
        para: "Dive into the AW20 menswear trends, unveiling sophisticated and versatile looks for the modern man, blending classic silhouettes with contemporary designs for a refined wardrobe.",
      },
    ];
    return (
    <>
      <HeroAll image={image} heading={heading} subheading={subheading} />
      {
        cardData.map((data,index)=>(
          <BlogCard key={index} image={data.image} heading={data.heading} para={data.para} />
        ))
      }
      <Pagination/>
    </>
  )
}

export default Blog
