// import React from 'react';
// import { HashLink } from 'react-router-hash-link';

// const NavLinks = () => {
//     return (
//         <>
//             <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
//                 About
//             </HashLink>
//             <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
//                 Services
//             </HashLink>
//             <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#portfolio">
//                 Products
//             </HashLink>
//             <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
//                 Our Partners
//             </HashLink>
//             <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
//                 Contact Us
//             </HashLink>
//         </>
//     )
// }

// export default NavLinks;


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
                to="/#portfolio"
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
                to="/DemoProduct#contact-us"
            >
                Contact Us
            </HashLink>
        </div>
    );
};

export default NavLinks;
