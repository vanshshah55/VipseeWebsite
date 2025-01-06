

import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import "./AboutUs.css"; // Link to your CSS file for styling

const Information = () => {
  useDocTitle("About Us | Vipsee Infotech");

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24" id="aboutus">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="flex">
              <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                About Us
              </h1>
            </div>
            
            {/* Our Information Section */}
            <section className="about-us-introduction mt-8">
              <h2 className="text-2xl font-semibold text-blue-900">Our Information</h2>
              <p className="text-gray-700 mt-4">
                Founded in 2002, <span className="font-bold">Vipsee Infotech</span> has more than 20 years of experience in delivering innovative IT, Networking, and Surveillance solutions. We specialize in high-quality products, including CCTV cameras, networking equipment, and laptops, catering to the diverse needs of businesses and individuals. Our team is dedicated to providing customized solutions that enhance security, optimize connectivity, and boost productivity. With strong partnerships with global vendors, we offer cutting-edge technology and exceptional customer service, ensuring our clients stay ahead in a fast-changing digital landscape.
              </p>
            </section>

            {/* About the Owner Section */}
            <section className="about-us-owner mt-8">
              <h2 className="text-2xl font-semibold text-blue-900">About the Owner</h2>
              <p className="text-gray-700 mt-4">
                <span className="font-bold">Vipsee Infotech</span> is led by <span className="font-bold">Vipul Shah</span>, a visionary entrepreneur with over two decades of experience in the networking and technology sector. Vipul Shah began his journey by establishing the company's first office in Fort, besides Bombay Stock Exchange, where the foundation for success was laid. With a passion for technology and innovation, he expanded the business over the years, opening an additional office in Andheri, covering the hubs of Mumbai city.
              </p>
              <p className="text-gray-700 mt-4">
                His dedication to providing high-quality solutions in networking, surveillance, and IT services has driven Vipsee Infotech’s growth, making it a trusted name in the industry. With a focus on customer satisfaction and continuous improvement, the company offers exceptional products and services.
              </p>
            </section>

            {/* Our Mission Section */}
            <section className="about-us-mission mt-8">
              <h2 className="text-2xl font-semibold text-blue-900">Our Mission</h2>
              <p className="text-gray-700 mt-4">
                At Vipsee Infotech, our mission is to empower businesses and individuals with cutting-edge technology solutions that simplify lives, enhance security, and drive productivity. We aim to provide services that are not only reliable but also tailored to meet the unique needs of each client.
              </p>
            </section>

            {/* Services Section */}
            <section className="about-us-services mt-8">
              <h2 className="text-2xl font-semibold text-blue-900">What We Do</h2>
              <div className="service-cards grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="service-card bg-gray-100 p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-blue-900">CCTV Surveillance Solutions</h3>
                  <p className="text-gray-700 mt-2">
                    We specialize in the wholesale and retail of CCTV cameras, offering advanced security solutions for homes, businesses, and industrial setups. From installation to maintenance, we ensure comprehensive surveillance to safeguard what matters most.
                  </p>
                </div>
                <div className="service-card bg-gray-100 p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-blue-900">Networking Services</h3>
                  <p className="text-gray-700 mt-2">
                    With expertise in designing and implementing robust networking solutions, we help businesses stay connected efficiently. From small offices to large enterprises, our solutions are scalable and future-proof.
                  </p>
                </div>
                <div className="service-card bg-gray-100 p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-blue-900">Computer Services</h3>
                  <p className="text-gray-700 mt-2">
                    From sourcing high-quality laptops and computers to providing maintenance and repair services, we are your one-stop shop for all computer-related needs.
                  </p>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="about-us-values mt-8">
              <h2 className="text-2xl font-semibold text-blue-900">Our Values</h2>
              <ul className="list-disc ml-6 text-gray-700 mt-4">
                <li><strong>Integrity:</strong> Building trust through transparency and ethical practices.</li>
                <li><strong>Innovation:</strong> Staying ahead of the curve by embracing the latest technological advancements.</li>
                <li><strong>Commitment:</strong> Delivering excellence consistently with a focus on customer satisfaction.</li>
              </ul>
            </section>

            {/* Why Choose Us */}
            <section className="about-us-why-choose-us mt-8">
              <h2 className="text-2xl font-semibold text-blue-900">Why Choose Us?</h2>
              <ul className="list-disc ml-6 text-gray-700 mt-4">
                <li>Proven expertise with over two decades of experience.</li>
                <li>Customer-centric approach tailored to your needs.</li>
                <li>High-quality products and services from leading brands.</li>
                <li>Affordable pricing without compromising on quality.</li>
              </ul>
            </section>

            {/* Looking Ahead */}
            <section className="about-us-contact mt-8">
              <h2 className="text-2xl font-semibold text-blue-900">Looking Ahead</h2>
              <p className="text-gray-700 mt-4">
                As technology evolves, so do we. Vipsee Infotech is constantly innovating to bring you the best solutions in surveillance, networking, and computing. Our goal is to remain your preferred partner for all things tech for years to come.
              </p>
              <div className="contact-cta mt-4">
                <h3 className="text-lg font-semibold text-blue-900">Get in Touch</h3>
                <p className="text-gray-700 mt-2">
                  Whether you're looking to enhance your security, upgrade your network, or source reliable computer systems, our team is ready to help.
                </p>
                <a href="/DemoProduct" className="contact-button mt-4 inline-block px-6 py-2 bg-blue-900 text-white rounded shadow hover:bg-blue-700">
                  Contact Us
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Information;
