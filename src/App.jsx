import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './Components/Navbar';
import Home from './Components/HComponents/Home';
import Footer from './Components/Footer';
import NewsLetter from './Components/NewsLetter';


function App() {

  return (
    <>
      <NavBar/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
