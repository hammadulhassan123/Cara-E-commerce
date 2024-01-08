import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faBagShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import Home from './HComponents/Home';
import Shop from './Shop/Shop';
import Blog from './Blog/Blog';
import About from './About/About';
import Cart from './Cart/Cart'
import Page404 from './Page404';
import Contact from './Contact/Contact'
import "./components.css"

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant='light' className='navbarCustom' >
        <Container fluid className='ms-2'>
            <Navbar.Brand className="nav-brand ms-3 d-flex justify-space-evenly" >
                <NavLink to="/" className='active' style={{textDecoration:"none"}}>
                    <img src={logo} alt="CARA" className='navbarLogo mb-1 ' /> 
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-space-evenly'>
            <Nav className="ms-auto me-auto align-items-center ">
                <NavLink to="/" className="anchor mx-3 active">Home</NavLink>
                <NavLink to="/shop" className="anchor mx-3">Shop</NavLink>
                <NavLink to="/blog" className="anchor mx-3">Blog</NavLink>
                <NavLink to="/about" className="anchor mx-3">About</NavLink>
                <NavLink to="/contact" className="anchor mx-3">Contact</NavLink>
                <NavLink to="/cart" className="anchor mx-3"><FontAwesomeIcon icon={faBagShopping} /></NavLink>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/*' element={<Page404/>} />
        </Routes>
    </>
  )}
export default NavBar
