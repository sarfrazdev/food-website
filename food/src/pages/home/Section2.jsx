import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router';
import Pizza from "/Food_Assets/assets/about/pizza.png"
import Salad from "/Food_Assets/assets/about/salad.png"
import Delivery from "/Food_Assets/assets/about/delivery-bike.png"



// Mock Data Cards
const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    // Add more mock data objects as needed
  ];
  

function Section2() {
  return (
    <>
      <section className='about_section'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>The burger taste better when you eat it with your family</h2>
                    <p>
                    Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                    auctor an tempus feugiat dolor lacin<br/>ia cubilia curae integer
                    orci congue and metus integer primis in integer metus
                    </p>
                    <Link to='/' className='btn order_now btn_red'>
                        Explore full menu
                    </Link>
                </div>
            </div>
        </div>

    </section>
    <section className="about_wrapper">
  <div className="container">
    <div className="row justify-content-md-center">
      {mockData.map((cardData, index) => (
        <div key={index} className="col-md-4 lg-4 mb-4 mb-md-0">
          
          <div className="about_box text-center">
            <div className="about_icon">
                <img src={cardData.image} alt="icon" className='img-fluid' />
              <h4 className="card-title">{cardData.title}</h4>
              <p className="card-text">{cardData.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  

  )
}

export default Section2