import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaArrowUp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  // Scroll state
  const [isVisible, setVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    const heightToHidden = 250; 
    const winScroll =
      document.documentElement.scrollTop;

    setVisible(winScroll > heightToHidden);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>505 Waterford District</p>
                <p>Dr, Miami FL 33126</p>
                <p>United States</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00 AM - 10:00 PM</p>
                <p>Saturday: 10:00 AM - 8:30 PM</p>
                <p>Sunday: 12:00 PM - 5:00 PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                  <Link to="tel:99999877" className="calling">
                    Calling: 999997777
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>Stay connected with us.</p>
                <ul className="list-unstyled text-center mt-2 d-flex justify-content-center gap-3 fs-2">
                  <li>
                    <Link to="./" aria-label="Facebook">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="./" aria-label="Instagram">
                      <IoLogoInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="./" aria-label="YouTube">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link to="./" aria-label="LinkedIn">
                      <CiLinkedin />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="./">
                      © 2023 <span>CODE4EDUCATION</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="./">About Us</Link>
                  </li>
                  <li>
                    <Link to="./">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="./">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* SCROLL TO TOP */}
      <div
        className="scroll_top"
        onClick={scrollTop}
        style={{
          
          opacity: isVisible ? 1 : 0,
         
        }}
      >
        <FaArrowUp />
      </div>
    </>
  );
}

export default Footer;
