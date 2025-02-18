import React from 'react'

import { Carousel, Container, Row } from 'react-bootstrap';
import User1 from "/Food_Assets/assets/blog/review-author-1.jpg";
import User2 from "/Food_Assets/assets/blog/review-author-2.jpg";
import User3 from "/Food_Assets/assets/blog/review-author-3.jpg";
import User4 from "/Food_Assets/assets/blog/review-author-5.jpg";
import { GoStarFill } from "react-icons/go";
function Section6() {
  return (
   <section className='blog_section'>
        <Container>
            <Row>
            <Carousel>
                 <Carousel.Item>
                    <Carousel.Caption className="position-static d-flex flex-column align-items-center">
                        <div className="user_img">
                           <img src={User1} alt="brand-1" className='img-fluid'  />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam deleniti error, pariatur nihil nesciunt consequatur modi tempore earum neque!
                        </p>
                        <div className="item_rating mb-2">
                          <GoStarFill/>
                          <GoStarFill/>
                          <GoStarFill/>
                          <GoStarFill/>
                     
                        </div>
                        <h5>BY AMELIE NEWLOVE</h5>
                       
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption className="position-static d-flex flex-column align-items-center">
                        <div className="user_img">
                           <img src={User2} alt="brand-2" className='img-fluid' />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam deleniti error, pariatur nihil nesciunt consequatur modi tempore earum neque!
                        </p>
                        <div className="item_rating mb-2">
                          <GoStarFill/>
                          <GoStarFill/>
                          <GoStarFill/>
                          <GoStarFill/>
                     
                        </div>
                        <h5>sarah </h5>
                       
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption className="position-static d-flex flex-column align-items-center">
                        <div className="user_img">
                           <img src={User3} alt="brand-3" className='img-fluid' />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam deleniti error, pariatur nihil nesciunt consequatur modi tempore earum neque!
                        </p>
                        <div className="item_rating mb-2">
                          <GoStarFill/>
                          <GoStarFill/>
                          <GoStarFill/>
                          <GoStarFill/>
                     
                        </div>
                        <h5>Michael</h5>
                       
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption className="position-static d-flex flex-column align-items-center">
                        <div className="user_img">
                           <img src={User4} alt="brand-4" className='img-fluid'  />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam deleniti error, pariatur nihil nesciunt consequatur modi tempore earum neque!
                        </p>
                        <div className="item_rating mb-2">
                          <GoStarFill/>
                          <GoStarFill/>
                          <GoStarFill/>
                          <GoStarFill/>
                     
                        </div>
                        <h5>Ellis perry</h5>
                       
                    </Carousel.Caption>
                  </Carousel.Item>
             </Carousel>          
            </Row>
        </Container>

   </section>
  )
}

export default Section6