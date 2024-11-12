import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCss3, FaHtml5 } from "react-icons/fa";

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container align-elements w-full">
      <Slider {...settings}>
        <div>
          <FaHtml5 className="text-5xl" />
        </div>
        <div>
          <FaCss3 className="text-5xl" />
        </div>
        <div>
          <FaCss3 className="text-5xl" />
        </div>
        <div>
          <FaCss3 className="text-5xl" />
        </div>
        <div>
          <FaCss3 className="text-5xl" />
        </div>
        <div>
          <FaCss3 className="text-5xl" />
        </div>
        <div>
          <FaCss3 className="text-5xl" />
        </div>
        <div>
          <FaCss3 className="text-5xl" />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
