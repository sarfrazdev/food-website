import React from 'react'
import {  Container, Row,Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Section7() {
  return (
    <section className='contact_section'>
       <Container>
        <Row className='justify-content-center'>
            <Col sm={8} className="text-center">
            <h4>We Guarentee</h4>
            <h2>30 min Delivery</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ab rem. Iste illo dolor totam quae minus labore, fugit reprehenderit?</p>
            <Link to='./' className='btn btn_red px-4 py-2 pt-2 rounded-0'>call:999-888-7777</Link>
            </Col>
        </Row>
        </Container> 
       
    </section>
  )
}

export default Section7