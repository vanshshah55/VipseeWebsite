


import React from "react";
import { Link } from 'react-router-dom';

const Portfolio = () => {


    

    return (
        <div className="my-4 py-4" id="portfolio">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
            </div>

            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Security Surveillance Products</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                            Ensure the safety of your premises with our state-of-the-art security surveillance solutions. Our range of advanced CCTV cameras and tailored systems provide 24/7 monitoring, helping you deter threats and safeguard what matters most. Whether for homes, businesses, or large-scale facilities, our reliable surveillance ensures peace of mind with seamless integration and real-time accessibility.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/cameras"
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Networking and Cybersecurity Products</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                            Safeguard your organization with advanced cybersecurity solutions. Our products protect against cyber threats like malware, ransomware, and unauthorized access, ensuring the security of your data, systems, and networks. Stay one step ahead of cybercriminals with our proactive and reliable protection.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/cyber-security"
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">IT Products</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                            Streamline your business operations with our comprehensive IT product solutions. From hardware to software, our products enhance productivity, improve efficiency, and support your organization's growth. Whether you're looking for networking devices, servers, or cloud services, we provide reliable, scalable solutions tailored to meet your unique business needs.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/it-products"
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>
                    </div>

                   

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Network Mobility Products</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                            Empower your business with our tailored mobility solutions. Our products enable seamless communication, collaboration, and productivity on the go. From mobile devices to secure connectivity and cloud services, we help your team stay connected and efficient anywhere, ensuring that your business remains agile and competitive in a rapidly evolving digital world.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/mobility"
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;