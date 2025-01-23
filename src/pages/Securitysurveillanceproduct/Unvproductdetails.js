import React, { useState, useEffect, useMemo } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import unvnetworkCameraimage from "../../images/product images/camera product images/unvnetworkcameras.png";
import unvPTZCameraimage from "../../images/product images/camera product images/unvPTZcameras.png";

const UnvCameraProducts = () => {
    const products = useMemo(() => [
        {
            name: 'Network Cameras',
            description: [
                'IPC2324SE-ADZK-WL-I0',
                '4MP ColorHunter VF Dual-light Bullet Network Camera'
            ],
            features: [
                'High quality image with 4MP, 1/1.8" CMOS sensor',
                'Smart intrusion prevention, include cross line, intrusion, enter leave area detection',
                'Intelligent People Flow Counting and Crowd Density Monitoring',
                'ColorHunter technology ensures 24-hour full-color images',
                '120dB true WDR technology enables clear image in strong light scene',
                'Support 9:16 corridor Mode',
                'Alarm: 1 in/1 out, Audio: 1 in/1 out',
                'Supports 512 G micro SD card',
                'IK10 vandal resistant, IP67 protection',
                'Support PoE power supply',
            ],
            imageUrl: unvnetworkCameraimage,
            imageAlt: 'Uniview Network Security Camera'
        },
        {
            name: 'PTZ Cameras',
            description: [
                'IPC6424SR-X25-VF',
                '4 inch PTZ Camera'
            ],
            features: [
                '4MP (2688*1520@30fps), 1/2.8” CMOS sensor',
                '25X Optical Zoom',
                'Lighthunter technology',
                'Up to 100m IR distance',
                'Auto-Tracking',
                'Quick focus technology',
                'IP67 ingress protection, IK10 vandal resistant, 6kv lightning protection',
                'DC 12V±25% or PoE+',
                'Alarm: 2/1, Audio: 1/1',
                'RS485, BNC interface',
            ],
            imageUrl: unvPTZCameraimage,
            imageAlt: 'Uniview PTZ Security Camera'
        },
    ], []);

    const pdfOptions = [
        { label: "Network Cameras all products 2025", url: "/unv pdfs/Network Cameras all products 2025.pdf" },
        { label: "PTZ Cameras all products 2025", url: "/unv pdfs/PTZ Cameras all products 2025.pdf" },
        { label: "Analog Cameras all products 2025", url: "/unv pdfs/Analog Cameras all products 2025.pdf" },
        { label: "Thermal Cameras all products 2025", url: "/unv pdfs/Thermal Cameras all products 2025.pdf" }
    ];

    const [showDropdown, setShowDropdown] = useState(false);

    const handlePdfSelect = (pdfUrl) => {
        window.open(pdfUrl, '_blank');
        setShowDropdown(false);
    };

    // Dynamically set metadata
    useEffect(() => {
        document.title = "Uniview Camera Products | Vipsee Infotech";
        document.querySelector('meta[name="description"]')?.setAttribute(
            "content",
            "Explore Uniview camera products including Network Cameras, PTZ Cameras, and more. Discover advanced features like ColorHunter technology, Auto-Tracking, and PoE power supply. Ideal for professional surveillance."
        );
        document.querySelector('meta[name="keywords"]')?.setAttribute(
            "content",
            " CCTV cameras, CCTV, UNV cameras ,Uniview Cameras, Wifi cameras, Network Cameras, PTZ Cameras, Surveillance Cameras, Security Solutions,Night vision cameras, ColorHunter Technology, Auto-Tracking Cameras, IP Cameras, Professional Surveillance,Security surveillance, business security, Ai detection, AI cctv cameras,  Vipsee Infotech, Mumbai, Maharashtra"
        );
    }, []);

    // Add structured data
    useEffect(() => {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Uniview Camera Products",
            "description": "Explore our range of Uniview camera products including Network Cameras, PTZ Cameras, and more. Discover advanced features like ColorHunter technology and PoE power supply.",
            "brand": {
                "@type": "Brand",
                "name": "Uniview"
            },
            "offers": products.map(product => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Product",
                    "name": product.name,
                    "description": product.description.join(", "),
                    "image": product.imageUrl,
                }
            })),
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
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
                    <h1 className="text-3xl font-bold text-blue-900 text-center">
                        Uniview Camera Products
                    </h1>

                    <div className="text-center mt-8 relative flex justify-center space-x-6">
                                            <button
                                                onClick={() => setShowDropdown(!showDropdown)}
                                                className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-green-500 transition duration-300"
                                            >
                                                View PDFs
                                            </button>
                                            {showDropdown && (
                                                <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-80 z-10">
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
                    {/* Products */}
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
                                <h2 className="text-2xl font-semibold">{product.name}</h2>
                                <p className="mt-2">
                                    {product.description.map((desc, idx) => (
                                        <span key={idx} className="block">{desc}</span>
                                    ))}
                                </p>
                                <ul className="mt-4 list-disc list-inside">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm">
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

export default UnvCameraProducts;
