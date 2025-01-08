

import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            {/* About */}
            <HashLink
                className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-blue-900 hover:border-blue-900 hover:text-white transition-all duration-300 ease-in-out font-medium"
                smooth
                to="/#about"
            >
                About
            </HashLink>

            {/* Services */}
            <HashLink
                className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-blue-900 hover:border-blue-900 hover:text-white transition-all duration-300 ease-in-out font-medium"
                smooth
                to="/#services"
            >
                Services
            </HashLink>

            {/* Products */}
            <HashLink
                className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-blue-900 hover:border-blue-900 hover:text-white transition-all duration-300 ease-in-out font-medium"
                smooth
                to="/#Products"
            >
                Products
            </HashLink>

            {/* Our Partners */}
            <HashLink
                className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-blue-900 hover:border-blue-900 hover:text-white transition-all duration-300 ease-in-out font-medium"
                smooth
                to="/#partners"
            >
                Our Partners
            </HashLink>

            {/* Contact Us */}
            <HashLink
                className="px-5 py-2 bg-blue-900 text-white rounded-md shadow-md hover:bg-green-500 hover:shadow-lg transition-all duration-300 ease-in-out font-semibold"
                smooth
                to="/contact-us"
            >
                Contact Us
            </HashLink>
        </div>
    );
};

export default NavLinks;
