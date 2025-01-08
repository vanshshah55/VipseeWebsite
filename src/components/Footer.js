

import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import vipseelogo from "../images/vipsee_logo_from_card-removebg-preview.png";
import { FaLinkedin, FaInstagram, FaTree, FaWhatsapp } from 'react-icons/fa';
import { TbBrandGoogleMaps } from 'react-icons/tb';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-4 border-blue-900 p-8 bg-[#f9f9f9] text-gray-600 text-center rounded-xl xl:w-80 mx-auto shadow-lg">
                            {/* <h3 className="font-bold text-4xl mb-4"></h3> */}
                            <div className="text-md font-medium text-gray-600">
                                <img
                                    src={vipseelogo}
                                    alt="exclusive-partner"
                                    className="h-auto max-h-20 w-auto mx-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                            <li className="mb-2">
                                <HashLink smooth to="/#about" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink smooth to="/#services" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink smooth to="/#Products" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Products</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink smooth to="/#partners" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Partners</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink smooth to="/contact-us" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">ContactUs</HashLink>
                            </li>                                
                        </ul>
                    </div>

                    {/* 3rd block */}
                    {/* 3rd Block: Enquiry Form */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto text-center">
    <h6 className="text-[#013289] text-xl font-bold mb-4">Enquire With Us</h6>
    <p className="text-md text-gray-700 mb-4">
        Have questions or need assistance? Reach out to us by filling out our enquiry form. We’ll get back to you promptly!
    </p>
    <div className="text-center">
        <a 
            href="https://forms.gle/EC8bC5jDRmFrfRqo9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#013289] text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
            Go to Enquiry Form
        </a>
    </div>
</div>



                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div className="text-xl mb-6">
                            Social Media 
                        </div>

                        <div className="flex justify-center space-x-8 mt-6">
                            <a href="https://wa.me/+919321139367" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={24} className="text-green-600 hover:text-green-800" />
                            </a>
                            <a href="https://www.linkedin.com/company/vipsee-infotech" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} className="text-blue-700 hover:text-blue-900" />
                            </a>
                            <a href="https://www.instagram.com/vipseeinfotech" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} className="text-pink-500 hover:text-pink-700" />
                            </a>
                            <HashLink smooth to="/contact-us#locations">
  <TbBrandGoogleMaps size={24} className="text-blue-600 hover:text-blue-800 transition-colors duration-300" />
</HashLink>

                        </div>

                        {/* Emphasized Linktree */}
                        <div className="mt-6 text-center">
                            <a
                                href="https://linktr.ee/vipsee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
                            >
                                Linktree <FaTree className="inline ml-2" />
                            </a>
                        </div>
                    </div>          

                    </div>

                    {/* Privacy Policy Section */}
                   {/* Privacy Policy Section */}
<Link to="/Privacy-Policy" className="block">
    <div className="bg-gray-200 py-8 border-t border-gray-300 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out">
        <div className="text-center mx-auto px-4 lg:px-6">
            <h6 className="text-[#013289] text-xl font-bold mb-4">Privacy Policy</h6>
            <p className="text-md text-gray-700 leading-relaxed max-w-3xl mx-auto">
                At Vipsee Infotech, we are committed to protecting your privacy and ensuring the security of your personal information. Click here for detailed information on our <span className="text-[#013289] hover:text-blue-600 transition duration-250 ease-in-out underline">Privacy Policy</span>.
            </p>
        </div>
    </div>
</Link>


                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-200 font-semibold py-1">
                                Copyright &copy; 2002 - {new Date().getFullYear()}{"  "}
                                <HashLink
                                    to="#"
                                    className=" hover:text-gray-900"
                                >
                                    Vipsee Infotech
                                </HashLink>. All rights reserved.
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;