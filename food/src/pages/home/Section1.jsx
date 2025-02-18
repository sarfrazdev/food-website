import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
// import Burger from '../../assets/images/burger.png'

function Section1() {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="position-relative">
              <img src="/Food_Assets/assets/hero/hero-2.png" alt="hero" className="img-fluid"/>
              <div className="price_badge">
                <div className="badge_text">
                    <h4 className='h4_xs'>only</h4>
                    <h4 className='h3_lg'>$6.99</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col lg-5">
              <div className="hero_text text-centre ">
                  <h1 className='text-white'>New Burger</h1>
                  <h2 className='text-white'>With Onion</h2>
                  <p className="text-white pt-2">
                    our new burger with onion is the best burger in town.it is made with fresh ingredients and is very delicious.so come and try it now.
                  </p>
                  <Link to='/' className="btn order_now">Order Now</Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
