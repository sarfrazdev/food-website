import React, { useState } from 'react';
import "../../styles/HeaderStyle.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BsFillHandbagFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // const[nav,setNav]= useState(false);
  // const changeValueOnScroll =()=>{
  //   //scroll navbar
  //   const scrollValue =doocument ?.documentElement ?.scrollTop;
  //   scrollValue >100 ?setNav(true) :setNav(false)

  // }
  // window.addEventListener("scroll",changeValueOnScroll)

  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="logo">
            <img src="./Food_Assets/assets/logo/logo.png" alt="Logo" className='img-fluid' />
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNavAltMarkup" 
            aria-expanded={isOpen} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/menu" className="nav-link">Our Menu</Link>
              <Link to="/shop" className="nav-link">Shop</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/" className="nav-link">
                <div className="cart">
                  <BsFillHandbagFill  />
                  <span className="roundpoint">0</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
