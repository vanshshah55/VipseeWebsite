

import React, { useEffect } from "react";
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { FaLinkedin, FaInstagram, FaTree, FaWhatsapp } from 'react-icons/fa';
import { TbBrandGoogleMaps } from 'react-icons/tb';
import { HashLink } from 'react-router-hash-link';

const ContactUs = () => {
    useDocTitle('Contact Us | Vipsee Infotech');

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
            <div id="contact-us" className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-6 lg:px-20">
                    {/* Contact Info */}
                    <div className="bg-white p-8 md:px-12 lg:w-8/12 mx-auto rounded-2xl shadow-lg">
                        <h1 className="font-bold text-center text-blue-900 uppercase text-4xl mb-4">Contact Us</h1>
                        <p className="text-center text-gray-600 mb-6">Feel free to reach out using the contact information below.</p>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Phone Number */}
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M2.93 2.93a10 10 0 1114.14 14.14 10 10 0 01-14.14-14.14zm1.415 1.414a8 8 0 1011.314 11.314 8 8 0 00-11.314-11.314z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-blue-900">Phone</p>
                                    <p className="text-gray-600">Work: +91 9321139367</p>
                                    <p className="text-gray-600">Office: 022 44508542</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M2.93 2.93a10 10 0 1114.14 14.14 10 10 0 01-14.14-14.14zm1.415 1.414a8 8 0 1011.314 11.314 8 8 0 00-11.314-11.314z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-blue-900">Email</p>
                                    <p className="text-gray-600">vipul@vipinfo.co.in</p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-blue-900">Business Hours</p>
                                    <p className="text-gray-600">Monday - Saturday: 11:00 AM - 7:00 PM</p>
                                    <p className="text-gray-600">Sunday: Closed</p>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="flex justify-center space-x-8 mt-6">
                                {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={24} className="text-blue-600 hover:text-blue-800" />
                                </a> */}
                                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={24} className="text-blue-400 hover:text-blue-600" />
                                </a> */}
                                <a href="https://www.linkedin.com/company/vipsee-infotech" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={24} className="text-blue-700 hover:text-blue-900" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={24} className="text-pink-500 hover:text-pink-700" />
                                </a>
                                <a href="https://wa.me/+919321139367" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp size={24} className="text-green-600 hover:text-green-800" />
                                </a>
                                <HashLink smooth to="#locations">
                                    <TbBrandGoogleMaps size={24} className="text-blue-600 hover:text-blue-800 transition-colors duration-300" />
                                </HashLink>
                            </div>

                            {/* Emphasized Linktree */}
                            <div className="mt-6 text-center flex justify-center space-x-6">
    {/* Linktree Button and Text */}
    <div className="flex flex-col items-center">
        <a
            href="https://linktr.ee/vipsee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition"
        >
            Visit Our Linktree <FaTree className="inline ml-2" />
        </a>
        <p className="text-sm text-gray-600 mt-2">Explore all our links in one place!</p>
    </div>
   {/* Enquiry Form Button and Text */}
   <div className="flex flex-col items-center">
        <a
            href="https://forms.gle/EC8bC5jDRmFrfRqo9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition"
        >
            Enquiry Form
        </a>
        <p className="text-sm text-gray-600 mt-2">Submit your enquiry now!</p>
    </div>
    </div>

                        </div>
                    </div>

                    {/* Location & Maps Section */}
                    <div className="mt-6">
                        <h2 className="font-bold text-center text-blue-900 text-3xl mb-8">Our Locations</h2>

                        <div id="locations" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Office 1 */}
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">Office 1: Andheri</h3>
                                <p className="text-gray-600 mb-4">Shop No.5, Sharma Compound,Old Nagardas Road, Andheri (E), Mumbai 400069</p>
                                <ul className="list-disc pl-5 mb-4 text-gray-600">
                                    <li>Handles wholesale/retail orders for surveillance equipment.</li>
                                    <li>Primary location for customer services.</li>
                                    <li>Stockroom for key inventory items.</li>
                                </ul>
                                <iframe
  title="Vipsee Infotech Location Map" // Add a descriptive title
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1884.8463080774425!2d72.8498738!3d19.1211362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9007a6440d9%3A0xd3181a1e202fc9e5!2sVipsee%20Infotech!5e0!3m2!1sen!2sin!4v1735135958268!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>

                            </div>

                            {/* Office 2 */}
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">Office 2: Fort</h3>
                                <p className="text-gray-600 mb-4">23/25 Singh House, 2nd Floor, Ambalal Doshi Marg, Fort, Churchgate, Mumbai 400001</p>
                                <ul className="list-disc pl-5 mb-4 text-gray-600">
                                    <li>Dedicated space for technical support operations.</li>
                                    <li>Supporting Firewall management and network security services.</li>
                                    <li>Regional hub for IT Sales and maintenance services.</li>
                                </ul>
                                <iframe
                                     title="Vipsee Infotech Location Map 2"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0283762711174!2d72.83005447523554!3d18.93013808224467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d114760838fd%3A0x21badc1e59ef8143!2sVIPSEE%20INFOTECH!5e0!3m2!1sen!2sin!4v1735751172401!5m2!1sen!2sin"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
