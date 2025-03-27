import React from "react";
import { Link } from 'react-router-dom';
// Import images (you'll need to add these to your project)
import securityImg from "../images/product images/camera product images/Uniview 2mp Owlview Dome(1).png"; // Add image path for security products
import networkingImg from "../images/product images/sonicwall product.webp"; // Add image path for networking products
import itImg from "../images/product images/windows11pc image.webp"; // Add image path for IT products
import mobilityImg from "../images/product images/nas product images.png"; // Add image path for mobility products

const Products = () => {
    // Product data with key features and benefits
    const products = [
        {
            title: "Security Surveillance Products",
            keyFeatures: [
                "CCTV Cameras",
                "Network Video Recorders",
                "Video Conferencing Devices",
                "POE Switches"
            ],
            cta: "View Surveillance Products →",
            link: "/cameras",
            image: securityImg,
            alt: "Security surveillance camera"
        },
        {
            title: "Networking & Cybersecurity Products",
            keyFeatures: [
                "Firewalls",
                "Antivirus Software",
                "Network Appliances",
                "Security Solutions"
            ],
            cta: "Explore Networking Products →",
            link: "/cyber-security",
            image: networkingImg,
            alt: "Network security devices"
        },
        {
            title: "IT Products",
            keyFeatures: [
                "Laptops & Desktops",
                "Printers & Scanners",
                "Wifi Devices",
                "Office Equipment"
            ],
            cta: "Browse IT Hardware →",
            link: "/it-products",
            image: itImg,
            alt: "IT hardware and equipment"
        },
        {
            title: "Network Mobility Products",
            keyFeatures: [
                "Data Storage",
                "Remote Access Solutions",
                "Cloud Services",
                "Connectivity Devices"
            ],
            cta: "Discover Mobility Solutions →",
            link: "/mobility",
            image: mobilityImg,
            alt: "Network attached storage NAS image"
        }
    ];

    // Structured Data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Security Surveillance Products",
                "url": "https://vipinfo.co.in/cameras",
                "description": "Security surveillance solutions including CCTV cameras, NVRs, Video conferrencing and tailored systems for 24/7 monitoring."
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Networking and Cybersecurity Products",
                "url": "https://vipinfo.co.in/cyber-security",
                "description": "Advanced networking and cybersecurity products to protect your organization from cyber threats and unauthorized access."
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "IT Products",
                "url": "https://vipinfo.co.in/it-products",
                "description": "Comprehensive IT product solutions including hardware and software for enhanced business operations."
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Network Mobility Products",
                "url": "https://vipinfo.co.in/mobility",
                "description": "Tailored mobility solutions including data storage, secure connectivity, and cloud services for seamless collaboration."
            }
        ]
    };

    return (
        <>
            {/* SEO Metadata */}
            <head>
                <title>Products | Vipsee Infotech - Networking, IT, and Security Surveillance Solutions</title>
                <meta name="description" content="Explore Vipsee Infotech's wide range of products, including security surveillance, networking, IT solutions, and mobility products. Tailored for businesses of all sizes, our products ensure security, efficiency, and productivity." />
                <meta name="keywords" content="security surveillance, CCTV cameras, networking products, cybersecurity, IT products, network mobility, Vipsee Infotech, IT solutions, business security, NVR, Remote cloud connection, Data storage, laptop, Uniview" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Vipsee Infotech" />
            </head>

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            <div className="bg-gray-100 shadow-lg py-12" id="Products">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className="flex justify-center">
                    <div className="w-24 border-b-4 border-blue-900"></div>
                </div>
                <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900 mb-2">
                    Premium solutions designed to enhance your security, connectivity, and productivity.
                </h2>

                <div className="px-4 pt-6" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {products.map((product, index) => (
                            <Link to={product.link} key={index} className="group relative block h-full">
                                <div className="bg-white transition-all ease-in-out duration-400 text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-4 h-full">
                                    <div className="flex flex-col h-full">
                                        {/* Product Title */}
                                        <h4 className="font-semibold text-lg md:text-2xl text-center mb-3 group-hover:text-white">
                                            {product.title}
                                        </h4>
                                        
                                        {/* Product Image */}
                                        <div className="relative mb-4 overflow-hidden rounded-lg bg-white p-2 border border-gray-200 group-hover:border-white">
                                            <img 
                                                src={product.image} 
                                                alt={product.alt}
                                                className="w-full h-40 object-contain transition-all duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        
                                        {/* Product Features */}
                                        <div className="flex-grow">
                                            <ul className="my-3 font-medium space-y-2">
                                                {product.keyFeatures.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <svg className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        {/* CTA Button */}
                                        <div className="mt-auto pt-3">
                                            <div className="w-full bg-blue-900 group-hover:bg-white group-hover:text-blue-900 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center">
                                                {product.cta}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
