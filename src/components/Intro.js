




import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sonicwallSDWANimg from "../images/website images/sonicwall secure SDWAN.webp";
import UNVdomeimg from "../images/website images/UNVdomeimg.png";
import unvnvrimg from "../images/website images/unvnvrimg.png";
import unvptzimg from "../images/website images/unvptzimg.png";
import VideoconfA30 from "../images/product images/camera product images/VideoconfA30.png";
import unvptzimg2 from "../images/website images/unvptzimg2.png";
import asustornasimg from "../images/website images/asustornasimage.webp";
import uniarchindoorcamera from "../images/product images/camera product images/uniarch indoor camera.png";


import { HashLink } from "react-router-hash-link";



const Intro = () => {
  const settings = {
    dots: true, // Enable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#02457A",
        }}
      ></div>
    ),
  };

  return (
    <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
      <div
        className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
        data-aos="fade-up"
      >
        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
          <div className="carousel-container w-full border-1 border-blue-900 rounded-xl p-2 max-w-sm">
            <Slider {...settings}>
              {[sonicwallSDWANimg,UNVdomeimg,uniarchindoorcamera,unvnvrimg,unvptzimg2, asustornasimg,unvptzimg,VideoconfA30].map(
                (img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="carousel-image rounded-xl w-full h-[200px] object-cover"
                    />
                  </div>
                )
              )}
            </Slider>
          </div>
        </div>
        <div
          className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h3 className="text-3xl text-blue-900 font-bold">
            Vipsee Infotech specializes in
          </h3>
          <h3 className="text-3xl text-blue-900 font-bold">top-quality surveillance,</h3>
          <h3 className="text-3xl text-blue-900 font-bold">
            networking enhancement, and computer solutions.
          </h3>

          <div>
            <p className="my-3 text-xl text-gray-600 font-semibold">
              We offer Wholesale-Retail CCTV cameras, Networking equipment, and
              Laptops/Pcs, along with reliable Maintenance services.
            </p>
          </div>
          <div>
            <p className="my-3 text-xl text-gray-600 font-semibold">
              Our products come from leading Global vendors, ensuring Innovation and
              Efficiency.
            </p>
          </div>

          <div>
            <p className="my-3 text-xl text-gray-600 font-semibold">
              We deliver tailored solutions to enhance Security, Connectivity, and
              Productivity for businesses and individuals.
            </p>
          </div>


          <HashLink
            to="/contact#aboutus"
            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
          >
            Know More
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-2"
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
          </HashLink>
        </div>
      </div>
    </div>
  );
};
export default Intro;
