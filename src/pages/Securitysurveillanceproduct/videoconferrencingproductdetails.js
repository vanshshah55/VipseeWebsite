









import React, { useState } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

import VideoconA20image from "../../images/product images/camera product images/VideoconfA20.png";
import VideoconA30image from "../../images/product images/camera product images/VideoconfA30.png";

const VCproducts = () => {
    const products = [
        {
            name: 'Unear A20',
            description: ['All-In-One Video Conference Camera' ],
            features: [
                '1080P HD Image, 90°ultra-wide view',
'4mics, 16ft voice pickup range',
'3W HI-FI Speaker',
'Embedded 3A audio algorithm',
'USB plug-and-play'


            ],
            imageUrl: VideoconA20image
        },
        {
            name: 'IoT-Unear A30',
            description: ['All-In-One Video Conference Camera'],
            features: [
                '2K QHD Image, 115°hltra-wide view',
'4mics, 16ft voice pickup range',
'3W HI-FI Speaker',
'Embedded 3A audio algorithm',
'USB plug-and-play',
            ],
            imageUrl: VideoconA30image
        }
    ];

    const pdfOptions = [
        
        { label: "Video Conferencing all products 2025", url: "/unv pdfs/Video Conferencing all products 2025.pdf" },
        
    ];

    const [showDropdown, setShowDropdown] = useState(false);

    const handlePdfSelect = (pdfUrl) => {
        window.open(pdfUrl, '_blank');
        setShowDropdown(false);
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Video Conferrencing devices </h1>

                    {/* Add Dropdown for PDFs */}
                    <div className="text-center mt-8 relative">
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-green-500 transition duration-300"
                        >
                            View PDFs
                        </button>
                        {showDropdown && (
                            <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-72 mx-auto left-0 right-0 z-10">
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
                                    alt={product.name}
                                    className="w-full h-72 object-contain rounded-t-lg mb-4"
                                    src={product.imageUrl}
                                />
                                <h2 className="text-2xl font-semibold">
                                    {product.name}
                                </h2>
                                <p className="mt-2">
                                    {Array.isArray(product.description) ? (
                                        product.description.map((desc, idx) => (
                                            <span key={idx} className="block">{desc}</span>
                                        ))
                                    ) : (
                                        <span>{product.description}</span>
                                    )}
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

export default VCproducts;
