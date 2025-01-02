
import React, { useEffect } from "react";
// import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const ITProducts = () => {
    const products = [
        {
            name: 'Laptop/Desktops',
            description: 'High-performance laptops for all your business and personal needs.',
            link: '/laptops', // Link to the Laptops page
        },
        {
            name: 'Printers/Scanners',
            description: 'Reliable and efficient printers for home and office use.',
            link: '/printers', // Link to the Printers page
        },
    ];

    
        useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // Enables smooth scrolling
            });
        }, []);
    

    return (
        <>
            <div>
                <NavBar />
            </div>

            <div className="bg-gray-100 py-20 mt-24">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">IT Products</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
                    {/* Common Button Below All Products */}
                    <div className="text-center mt-10">
                        <Link
                            to="/it-service" // Common related services page
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

export default ITProducts;
