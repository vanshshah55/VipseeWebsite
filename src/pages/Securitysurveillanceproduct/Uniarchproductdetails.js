import React, { useState, useMemo } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

import uniarchindoorCameraimage from "../../images/product images/camera product images/uniarch indoor camera.png";
import uniarchoutdoorCameraimage from "../../images/product images/camera product images/uniarch outdoor camera.png";

const UniarchCameraProducts = () => {
    // Using useMemo for products array initialization
    const products = useMemo(() => [
        {
            name: 'Indoor Security Cameras',
            description: ['Uho-S2E', '2MP Indoor Pan & Tilt Wi-Fi Camera'],
            features: [
                'High-quality image with 2MP, 1/3" CMOS sensor',
                '2MP (1920*1080) @25/20fps; 720P (1280*720) @25/20fps',
                'Ultra 265, H.265, H.264',
                'Built-in Mic & Speaker, support two-way audio, offer better interaction',
                'IR night vision, up to 10m (33ft) IR distance',
                'Support 256 G Micro SD card',
                'Wi-Fi connection and easy installation'
            ],
            imageUrl: uniarchindoorCameraimage,
            imageAlt: 'Uniarch Indoor Security Camera - Uho-S2E'
        },
        {
            name: 'Outdoor Security Cameras',
            description: ['Uho-B1R-M2F3(4)', '2MP HD Outdoor Bullet Wi-Fi Camera'],
            features: [
                'High quality image with 2MP, 1/2.9" CMOS sensor',
                '2MP (1920*1080)@30/25fps; 720P (1280*720)@30/25fps',
                'Ultra 265, H.265, H.264, MJPEG',
                'Built-in Mic',
                'Smart IR, up to 30m (98ft) IR distance',
                'Supports 128 G Micro SD card',
                'IP67 protection',
                '3-Axis'
            ],
            imageUrl: uniarchoutdoorCameraimage,
            imageAlt: 'Uniarch Outdoor Security Camera - Uho-B1R-M2F3(4)'
        }
    ], []);

    // PDF options
    const pdfOptions = [
        { label: "Uniarch Cameras all products 2025", url: "/unv pdfs/Uniarch Cameras all products 2025.pdf" },
        { label: "Uniarch Combined all products 2025", url: "/unv pdfs/Uniarch combined all products 2025.pdf" },
    ];

    const [showDropdown, setShowDropdown] = useState(false);

    const handlePdfSelect = (pdfUrl) => {
        window.open(pdfUrl, '_blank'); // Open the selected PDF in a new tab
        setShowDropdown(false); // Close the dropdown after selection
    };

    // Dynamic SEO metadata
    React.useEffect(() => {
        document.title = "Uniarch Camera Products - Indoor and Outdoor Security Cameras";
        document.querySelector('meta[name="description"]').setAttribute(
            'content',
            'Explore our wide range of Uniarch indoor and outdoor security cameras with advanced features like Wi-Fi connectivity, IR night vision, and high-resolution video quality.'
        );
        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'Uniarch Cameras, Security Cameras, Indoor Cameras, Outdoor Cameras, Wi-Fi Cameras, IR Night Vision Cameras'
        );
    }, []);

    // Adding structured data
    React.useEffect(() => {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "ProductGroup",
            "name": "Uniarch Security Cameras",
            "description": "High-quality Uniarch indoor and outdoor security cameras with advanced features for home and business security.",
            "brand": {
                "@type": "Brand",
                "name": "Uniarch"
            },
            "category": "Security Cameras",
            "productGroup": products.map((product) => ({
                "@type": "Product",
                "name": product.name,
                "description": product.description.join(", "),
                "image": product.imageUrl,
                "additionalProperty": product.features.map((feature) => ({
                    "@type": "PropertyValue",
                    "name": "Feature",
                    "value": feature
                }))
            }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [products]);

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Uniarch Camera Products</h1>
                    
                    {/* Add Dropdown for PDFs */}
                    <div className="text-center mt-8 relative">
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-green-500 transition duration-300"
                        >
                            View PDFs
                        </button>
                        {showDropdown && (
                            <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-80 mx-auto left-0 right-0 z-10">
                                <ul className="text-left">
                                    {pdfOptions.map((pdf, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                                            onClick={() => handlePdfSelect(pdf.url)}
                                        >
                                            {pdf.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-8">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-lg shadow-md transition duration-300"
                            >
                                <img
                                     alt={product.imageAlt}
                                    className="w-full h-48 object-contain rounded-t-lg mb-4"
                                    src={product.imageUrl}
                                />
                                <h2 className="text-2xl font-semibold">
                                    {product.name}
                                </h2>
                                <p className="mt-2">
                                    {product.description.map((desc, idx) => (
                                        <span key={idx} className="block">{desc}</span>
                                    ))}
                                </p>
                                <ul className="mt-4 list-disc list-inside">
                                    {product.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="text-sm"
                                        >
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UniarchCameraProducts;
