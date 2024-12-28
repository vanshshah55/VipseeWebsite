// import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const MobilityProducts = () => {
    const products = [
        {
            name: 'Data Storage Products',
            description: 'Explore advanced mobility solutions to empower your business and improve connectivity.',
            link: '/mobility-products-details', // Link to detailed mobility products page
        },
        {
            name: 'R-App',
            description: 'Discover R-App for enhanced mobility management and seamless app integration.',
            link: '/r-app-details', // Link to R-App details page
        },
        
    ];

    return (
        <>
      <div>
        <NavBar />
      </div>
      <div className="bg-gray-100 py-16 mt-24">
                      <div className="container mx-auto px-6">
                          <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">Network Mobility Products</h1>
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
                      </div>
                  </div>
            <Footer />
        </>
    );
};

export default MobilityProducts;
