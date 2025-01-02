// import React from 'react';
import React, { useEffect } from "react";
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CameraProducts = () => {
    const products = [
       
        {
            name: 'Uniview Camera products',
            description: 'High-definition surveillance cameras with advanced features like AI detection, night vision, and seamless network integration for professional-grade security.',
            link: '/Unv-product-details', // Link to detailed mobility products page
        },
        {
            name: 'Uniarch Camera products',
            description: 'Affordable, easy-to-install cameras offering crystal-clear video quality, smart motion detection, and reliable performance for everyday security needs.',
            link: '/Uniarch-product-details', // Link to detailed mobility products page
        },
        {
            name: 'Network Video Recorders (NVR)',
            description: 'Robust network video recorders offering AI-powered analytics, large storage capacity, and smooth video playback for advanced surveillance management.',
            link: '/NVR-product-details', // Link to detailed mobility products page
        },
        {
            name: 'Video Conferrencing Products',
            description: 'With several audio and video core technologies, Unear video conferencing product is able to give users perfect meeting experience.',
            link: '/Video-Conferrencing-products-details', // Link to detailed mobility products page
        }
    ];
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

    return (
        <>
      <div>
        <NavBar />
      </div>
            <div className="bg-gray-100 py-8 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Uniview Products</h1>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-8">
                        {products.map((product, index) => (
                                                    <Link
                                                        key={index}
                                                        to={product.link}
                                                        className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
                                                    >
                                                        <h2 className="text-2xl font-semibold">{product.name}</h2>
                                                        <p className="mt-2">{product.description}</p>
                                                    </Link>
                                                ))}
                    </div>
                    <div className="text-center mt-10">
                                            <Link
                                                to="/security-surveillance-service" // Common related services page
                                                className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg rounded-full shadow-md hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                                            >
                                                Explore All Related Services
                                            </Link>
                                        </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CameraProducts;


