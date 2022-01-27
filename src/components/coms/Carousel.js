import React from "react";
import Slider from "react-slick";
import './Carousel.css'
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
        
        <Slider {...settings}>
          <div>
          <img src="https://i.pinimg.com/736x/7d/e4/6e/7de46e832eec81c15d454c01efdc768d.jpg" className="carousel-img" alt="Girl in a jacket" />
          </div>
          <div>
          <img src="https://i.pinimg.com/originals/18/9a/28/189a28c6932795435581a77158970aa1.jpg" className="carousel-img" alt="Girl in a jacket" />
          </div>
          <div>
          <img src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y294JTIwYmF6YXJ8ZW58MHx8MHx8&w=1000&q=80" className="carousel-img" alt="Girl in a jacket"/>
          </div>
          
        </Slider>
      </div>
    );
};

export default Carousel;