import React, { useState, useEffect }  from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import card2 from "../utils/img/car-2.jpg"

const Carosel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: windowWidth <= 780 ? 1 : 3 && windowWidth <= 1080 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="main-carousel container">
      <h1 className="heading">Projeler</h1>
      <div>
       
        <Slider  {...settings}>
          <div className="card border-0">
            <h3></h3>
            <img className="car-img img-fluid" src={card2} alt="" />
          </div >
          <div className="card border-0">
            <h3></h3>
            <img className="car-img img-fluid" src={card2} alt="" />
          </div>
          <div className="card border-0">
            <h3></h3>
            <img className="car-img img-fluid" src={card2} alt="" />
          </div>
          <div className="card border-0">
            <h3></h3>
            <img className="car-img img-fluid" src={card2} alt="" />
          </div>
          <div className="card border-0">
            <h3></h3>
            <img className="car-img img-fluid" src={card2} alt="" />
          </div>
          <div className="card border-0">
            <h3></h3>
            <img className="car-img img-fluid" src={card2} alt="" />
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
        
        </div>
      </div>
      
    </div>
  );
};

export default Carosel;
