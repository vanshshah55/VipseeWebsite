import React, { useState, useMemo, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

import nvrprimeimage from "../../images/product images/camera product images/NVR Prime.png";
import nvreasyimage from "../../images/product images/camera product images/NVR Easy.png";

const NVRproducts = () => {
    const products = useMemo(() => [
        {
            name: 'Easy Series NVR',
            description: ['NVR301-S3 series', '1 HDD 4-ch 4  1U Network Video Recorder'],
            features: [
                'Support Ultra 265/H.265/H.264 video formats',
                '4/8/16-channel input',
                'Support mainstream cameras of ONVIF conformance (Profile S, Profile G, Profile T)',
                'RTSP protocols',
                'Support 1-ch HDMI, 1-ch VGA, HDMI up to 4K (3840x2160) resolution',
                'HDMI and VGA simultaneous output',
                'Up to 4K resolution recording',
                'Support cloud upgrade',
            ],
            imageUrl: nvreasyimage,
            imageAlt: 'Uniview NVR Easy series'
        },
        {
            name: 'Prime Series NVR',
            description: ['NVR502-B Series', '2 HDDs 8-ch 8  1U Network Video Recorder'],
            features: [
                'Support Ultra 265/H.265/H.264 video formats',
                '8/16/32-channel input',
                'Support mainstream cameras of ONVIF conformance (Profile S, Profile G, Profile T)',
                'RTSP protocols',
                'Support 1-ch HDMI, 1-ch VGA. HDMI up to 4K (3840x2160) resolution',
                'VGA and HDMI independent output',
                'Up to 16 Megapixels resolution recording',
                'ANR technology to enhance the storage reliability when the network is disconnected',
                'Support cloud upgrade',
            ],
            imageUrl: nvrprimeimage,
            imageAlt: 'Uniview NVR Prime series'
        }
    ], []);

    const pdfOptions = useMemo(() => [
        { label: "UNV NVR all products 2025", url: "/unv pdfs/NVR all products 2025.pdf" },
        { label: "Uniarch NVR all products 2025", url: "/unv pdfs/Uniarch NVRs all products 2025.pdf" },
    ], []);

    const [showDropdown, setShowDropdown] = useState(false);

    const handlePdfSelect = (pdfUrl) => {
        window.open(pdfUrl, '_blank');
        setShowDropdown(false);
    };

    useEffect(() => {
        document.title = "NVR Products | Vipsee Infotech";
        const metaDescription = document.querySelector('meta[name="description"]');
        const metaKeywords = document.querySelector('meta[name="keywords"]');

        if (metaDescription) {
            metaDescription.content = "Explore the advanced NVR products including Easy and Prime Series. Compare features like Ultra 265 support, 4K recording, and PoE interfaces.";
        } else {
            const descTag = document.createElement('meta');
            descTag.name = "description";
            descTag.content = "Explore the advanced NVR products including Easy and Prime Series. Compare features like Ultra 265 support, 4K recording, and PoE interfaces.";
            document.head.appendChild(descTag);
        }

        if (metaKeywords) {
            metaKeywords.content = "NVR,Network Video recorder, Uniview NVR, Unv NVR, CCTV video recorder, Easy Series NVR, Prime Series NVR, 4K recording, PoE NVR, surveillance, cloud upgrade NVR,NVR setup, Vipsee Infotech, Mumbai";
        } else {
            const keywordTag = document.createElement('meta');
            keywordTag.name = "keywords";
            keywordTag.content = "NVR,Network Video recorder, Uniview NVR, Unv NVR, CCTV video recorder, Easy Series NVR, Prime Series NVR, 4K recording, PoE NVR, surveillance, cloud upgrade NVR,NVR setup, Vipsee Infotech, Mumbai";
            document.head.appendChild(keywordTag);
        }
    }, []);

    return (
        <>
            <React.Fragment>
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProductGroup",
                        "name": "NVR Devices",
                        "description": "Explore Easy and Prime Series NVR devices with features like Ultra 265, PoE support, and cloud upgrade options.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Uniview"
                        },
                        "productGroup": products.map(product => ({
                            "@type": "Product",
                            "name": product.name,
                            "description": product.description.join(" "),
                            "image": product.imageUrl,
                            "offers": {
                                "@type": "Offer",
                                "priceCurrency": "INR",
                                "availability": "https://schema.org/InStock"
                            }
                        }))
                    })
                }} />
            </React.Fragment>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">NVR devices</h1>

                    <div className="text-center mt-8 relative flex justify-center space-x-6">
    <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-green-500 transition duration-300"
    >
        View PDFs
    </button>
    {showDropdown && (
        <div
            className="absolute bg-white shadow-lg rounded-lg mt-2 w-72 z-10"
            style={{ top: '100%' }} // Ensures the box appears below the button
        >
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
    <a
        href="https://wa.me/c/919321139367"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow flex items-center space-x-2 hover:bg-green-600 transition duration-300"
    >
        <FaWhatsapp size={20} />
        <span>Product Catalogue</span>
    </a>
</div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-8">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-lg shadow-md transition duration-300"
                            >
                                <img
                                    alt={product.imageAlt}
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
