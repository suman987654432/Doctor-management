import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../css/Carousel.css"
import Book1 from "../assets/book1.jpg"
import Book2 from "../assets/book2.jpg"
import Book3 from "../assets/book3.jpg"
import Book4 from "../assets/book4.jpg"
const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Book1} 
          alt="First book"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Book2} // Replace with your book image URL
          alt="Second book"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Book3}
          alt="Third book"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Book4}
          alt="Fourth book"
        />
       
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
