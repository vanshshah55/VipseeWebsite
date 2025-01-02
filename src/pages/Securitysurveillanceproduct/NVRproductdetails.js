









import React, { useState } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

import nvrprimeimage from "../../images/product images/camera product images/NVR Prime.png";
import nvreasyimage from "../../images/product images/camera product images/NVR Easy.png";

const NVRproducts = () => {
    const products = [
        {
            name: 'Easy Series NVR',
            description: ['NVR301-S3-P series','1 HDD 4-ch 4 PoE 1U Network Video Recorder' ],
            features: [
                'Support Ultra 265/H.265/H.264 video formats',
                '4/8/16-channel input',
                'Plug & Play with 4/8 independent PoE network interfaces',
                'Support mainstream cameras of ONVIF conformance (Profile S, Profile G, Profile T ) and RTSP protocols',
                'Support 1-ch HDMI, 1-ch VGA, HDMI up to 4K (3840x2160) resolution',
                'HDMI and VGA simultaneous output',
                'Up to 4K resolution recording',
                'Support cloud upgrade',
            ],
            imageUrl: nvreasyimage
        },
        {
            name: 'Prime Series NVR',
            description: ['NVR502-B-P Series','2 HDDs 8-ch 8 PoE 1U Network Video Recorder'],
            features: [
                'Support Ultra 265/H.265/H.264 video formats',
'8/16/32-channel input',
'Plug & Play with 8/16 independent PoE network interfaces',
'Support mainstream cameras of ONVIF conformance(Profile S, Profile G, Profile T ) and RTSP protocols',
'Support 1-ch HDMI, 1-ch VGA. HDMI up to 4K (3840x2160) resolution',
'VGA and HDMI independent output',
'Up to 16 Megapixels resolution recording',
'ANR technology to enhance the storage reliability when the network is disconnected',
'Support cloud upgrade',
            ],
            imageUrl: nvrprimeimage
        }
    ];

    const pdfOptions = [
        
        { label: "UNV NVR all products 2025", url: "/unv pdfs/NVR all products 2025.pdf" },
        { label: "Uniarch NVR all products 2025", url: "/unv pdfs/Uniarch NVRs all products 2025.pdf" },
        
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
                    <h1 className="text-3xl font-bold text-blue-900 text-center">NVR devices</h1>

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
                                    className="w-full h-60 object-contain rounded-t-lg mb-4"
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

export default NVRproducts;
