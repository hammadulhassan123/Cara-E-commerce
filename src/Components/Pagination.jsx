import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
  };
  

const Pagination = () => {
  return (
    <>
        <section id="pagination" className="pagination">
            <Link className="anchor" to="" onClick={scrollToTop} >1</Link>
            <Link className="anchor" to="" onClick={scrollToTop}>2</Link>
            <Link className="anchor" to="" onClick={scrollToTop}><FontAwesomeIcon icon={faArrowRight} /></Link>
        </section> 
    </>
  )
}

export default Pagination
