



import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import NavBar from "../components/Navbar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cctvimg from "../images/website images/cctv camera ai.png";
import networkimg from "../images/website images/networking devices ai.png"
import firewallimg from "../images/website images/firewall ai.png";
import laptopimg from "../images/website images/laptops ai.png";
import cloud1img from "../images/website images/cloud 2 ai.png";
import connectivityimg from "../images/website images/connectivity ai.png"



const Hero = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    appendDots: (dots) => (
      <div
        style={{
          padding: "20px",
          position: "relative",
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <ul style={{ display: "flex", gap: "15px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="custom-dot">
        <div className="w-3 h-3 rounded-full bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out" />
      </div>
    ),
  };

  return (
    <>
      <div className="main" id="main">
        <NavBar />
        <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
          <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
            {/* Text Content */}
            <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                Redefining Network Excellence and Transforming Surveillance Solutions.
              </h1>
              <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                Driven by expertise, we craft innovative networking and surveillance solutions for a smarter future.
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/contact"
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Carousel Section */}
            <div
              className="flex lg:justify-end w-full lg:w-1/2 max-w-md"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="carousel-container w-full border-1 border-blue-900 rounded-xl p-2 max-w-sm">
               {/* style={{ transform: 'translateX(-5px)' }}> */}
                <Slider ref={sliderRef} {...settings}>
                  {[cctvimg,networkimg,firewallimg,laptopimg,cloud1img,connectivityimg].map((img, index) => (
                    <div key={index}>
                      <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="carousel-image rounded-xl w-full h-[200px] object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Custom arrow component with new button style and hover effect
const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`button absolute top-1/2 transform -translate-y-1/2 z-10 ${
        direction === "left" ? "left-3" : "right-3"
      }`}
    >
      <div className="button-box">
        <svg
          className="button-elem"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
        >
          {direction === "left" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          )}
        </svg>
      </div>
    </div>
  );
};

export default Hero;
