import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import StoreIos from "/Food_Assets/assets/shop/appstore.png";
import StoreGoogle from "/Food_Assets/assets/shop/googleplay.png";
import Download from "/Food_Assets/assets/shop/e-shop.png";
import Brand1 from "/Food_Assets/assets/brands/brand-11.png";
import Brand2 from "/Food_Assets/assets/brands/brand-12.png";
import Brand3 from "/Food_Assets/assets/brands/brand-13.png";
import Brand4 from "/Food_Assets/assets/brands/brand-14.png";
import Brand5 from "/Food_Assets/assets/brands/brand-15.png";
import Brand6 from "/Food_Assets/assets/brands/brand-16.png";
import Brand7 from "/Food_Assets/assets/brands/brand-17.png";
import Brand8 from "/Food_Assets/assets/brands/brand-18.png";

import { Carousel, Container, Row } from 'react-bootstrap';

function Section5() {
  return (
    <>
      {/* Download App Section */}
      <section className="shop_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile app</h4>
              <h2>Save up to 20%</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                officia doloribus modi illo accusamus natus cupiditate ad
                eligendi perspiciatis temporibus.
              </p>
              <Link to="./">
                <img src={StoreIos} alt="iOS" className="img-fluid store me-2" />
              </Link>
              <Link to="./">
                <img src={StoreGoogle} alt="Android" className="img-fluid store" />
              </Link>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img src={Download} alt="e-shop" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Carousel Section */}
      <section className="brand_section">
  <Container>
    <Row>
      {/* <div className="col-12"> */}
        <Carousel indicators={false} controls={true}>
          {/* First Slide */}
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-between flex-wrap-nowrap">
              {[Brand1, Brand2, Brand3, Brand4].map((brand, index) => (
                <div className="brand_img p-2" key={index}>
                  <img src={brand} alt={`Brand ${index + 1}`} className="img-fluid" />
                </div>
              ))}
            </div>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-between flex-wrap-nowrap">
              {[Brand5, Brand6, Brand7, Brand8].map((brand, index) => (
                <div className="brand_img p-2" key={index}>
                  <img src={brand} alt={`Brand ${index + 5}`} className="img-fluid" />
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      {/* </div> */}
    </Row>
  </Container>
</section>

    </>
  );
}

export default Section5;
