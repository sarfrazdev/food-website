import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import  Image1  from "/Food_Assets/assets/menu/burger-11.jpg"
import  Image2  from "/Food_Assets/assets/menu/burger-12.jpg"
import  Image3 from "/Food_Assets/assets/menu/burger-13.jpg"
import  Image4 from "/Food_Assets/assets/menu/burger-14.jpg"
import  Image5 from "/Food_Assets/assets/menu/burger-15.jpg"
import  Image6  from "/Food_Assets/assets/menu/burger-16.jpg"
import  Image7 from "/Food_Assets/assets/menu/burger-17.jpg"
import  Image8 from "/Food_Assets/assets/menu/burger-18.jpg"
import Cards from '../../components/Cards';
import { Link } from "react-router-dom";
//import { FcRating } from "react-icons/fc";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { ImStarEmpty } from "react-icons/im";
import { GoStarFill } from "react-icons/go";


function Section3() {
  
 
// Mock Data Cards
const mockData = [
    {
      id: "0001",
      image: Image1,
      title: "Crispy Chicken",
      paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0002",
      image: Image2,
      title: "Ultimate Bacon",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 4.5,
      price: 99.32,
    },
    {
      id: "0003",
      image: Image3,
      title: "Black Sheep",
      paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
      rating: 4,
      price: 69.15,
    },
    {
      id: "0004",
      image: Image4,
      title: "Vegan Burger",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 3.5,
      price: 99.25,
    },
    {
      id: "0005",
      image: Image5,
      title: "Double Burger",
      paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
      rating: 3.0,
      price: 59.25,
    },
    {
      id: "0006",
      image: Image6,
      title: "Turkey Burger",
      paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 3,
      price: 79.18,
    },
    {
      id: "0007",
      image: Image7,
      title: "Smokey House",
      paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 2.5,
      price: 99.19,
    },
    {
      id: "0008",
      image: Image8,
      title: "Classic Burger",
      paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
      rating: 2.0,
      price: 89.12,
    },
    // Add more mock data objects as needed
  ];


const renderRatingIcons = (rating) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if(rating>0.5){
      stars.push(<GoStarFill key={i} />)
      rating --
    }
    else if(rating > 0  && rating <1){
      stars.push(<FaRegStarHalfStroke key={i} /> )
      rating --
     
  } 
    else{
    stars.push(<ImStarEmpty key={i} />)
    }
  }
  return stars
 
}


  return (
    <section className='menu_section'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center mb-5">
                    <h2>
                       OUR CRAZY BURGERS
                    </h2>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sunt <br/>iusto libero earum voluptate perferendis culpa ratione aspernatur delectus officia.</p>

                </div>
            </div>
            <div className="row">
                {mockData.map((cardData,index)=>(
                    <Cards 
                        key={index}
                        image={cardData.image}
                        rating={cardData.rating}
                        title={cardData.title}
                        paragraph={cardData.paragraph}
                        price={cardData.price}
                         renderRatingIcons={renderRatingIcons}
                        
                    />
                ))}
            </div>


            <div className="row pt-5">
              <div className="col sm-6 lg-5">
                <div className="ads_box ads_img1 mb-5 mb-md-0 ">
                  <h4 className='mb-0'>GET YOUR  FREE</h4>
                  <h5>CHEESE FRIES</h5>
                  <Link to='./' className='btn btn_red px-4 rounded-0'>
                      Learn more
                  </Link>
                </div>

              </div>
              <div className="col sm-6 lg-7">
                <div className="ads_box ads_img2 ">
                  <h4 className='mb-0'>GET YOUR  FREE</h4>
                  <h5>BURGER</h5>
                  <Link to='./' className='btn btn_red px-4 rounded-0'>
                      Learn more
                  </Link>
                </div>

              </div>
            </div>
        </div>
    </section>
  )
}

export default Section3