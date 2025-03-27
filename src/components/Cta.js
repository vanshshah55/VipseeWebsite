import React from 'react';
import {Link} from 'react-router-dom';

const Cta = () => {
    // Using a high-quality, free-to-use external image URL
    const backgroundImageUrl = "https://images.unsplash.com/photo-1633269540827-728aabbb7646?q=80&w=1920&auto=format&fit=crop";
    
    return ( 
        <div 
            className="w-full flex items-center justify-center text-white cta" 
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(9, 30, 90, 0.8)), url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed' // This enables the parallax effect
            }}
        >
            <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">                    
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className="mb-4">
                        <p className='text-2xl md:text-4xl font-bold mb-4'>Looking for Reliable IT and Surveillance Solutions?</p>
                        <p className="text-lg md:text-2xl">Let us help you secure and streamline your operations with our <span className='font-black'>expertise in CCTV, networking, and IT services.</span></p>
                    </div>
                    
                    <div className="w-full lg:w-72 pt-6 lg:mx-12">
                        <Link to="/contact-us" className="bg-transparent border-2 hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">
                            Contact Us!
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Cta;


