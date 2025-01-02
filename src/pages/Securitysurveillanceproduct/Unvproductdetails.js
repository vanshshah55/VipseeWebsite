// import React from 'react';
// import NavBar from '../../components/Navbar/NavBar';
// import Footer from '../../components/Footer';

// import uniarchindoorCameraimage from "../../images/product images/camera product images/uniarch indoor camera.png";
// import uniarchoutdoorCameraimage from "../../images/product images/camera product images/uniarch outdoor camera.png";

// const UniarchCameraProducts = () => {
//     const products = [
//         {
//             name: 'Indoor Security Cameras',
//             description: 'Uho-S2E',
//             features: [
//                 'High-quality image with 2MP, 1/3" CMOS sensor',
//                 '2MP (1920*1080) @25/20fps; 720P (1280*720) @25/20fps',
//                 'Ultra 265, H.265, H.264',
//                 'Built-in Mic & Speaker, support two-way audio, offer better interaction',
//                 'IR night vision, up to 10m (33ft) IR distance',
//                 'Support 256 G Micro SD card',
//                 'Wi-Fi connection and easy installation'
//             ],
//             imageUrl: uniarchindoorCameraimage
//         },
//         {
//             name: 'Outdoor Security Cameras',
//             description: 'Uho-B1R-M2F3(4)',
//             features: [
//                 'High quality image with 2MP, 1/2.9" CMOS sensor',
//                 '2MP (1920*1080)@30/25fps; 720P (1280*720)@30/25fps',
//                 'Ultra 265, H.265, H.264, MJPEG',
//                 'Built-in Mic',
//                 'Smart IR, up to 30m (98ft) IR distance',
//                 'Supports 128 G Micro SD card',
//                 'IP67 protection',
//                 '3-Axis'
//             ],
//             imageUrl: uniarchoutdoorCameraimage
//         }
//     ];

//     return (
//         <>
//             <div>
//                 <NavBar />
//             </div>
//             <div className="bg-gray-100 py-4 mt-24">
//                 <div className="container mx-auto px-10">
//                     <h1 className="text-3xl font-bold text-blue-900 text-center">Uniarch WIFI Camera Products</h1>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-8" >
//                         {products.map((product, index) => (
                            
//                             <div
//                                 key={index}
//                                 className="group bg-white p-6 rounded-lg shadow-md transition duration-300"
//                             >
//                                 <img
                                    
//                                     alt={product.name}
//                                     className="w-full h-48 object-contain rounded-t-lg mb-4"
//                                     src={product.imageUrl}
//                                 />
//                                 <h2 className="text-2xl font-semibold">
//                                     {product.name}
//                                 </h2>
//                                 <p className="mt-2">{product.description}</p>
//                                 <ul className="mt-4 list-disc list-inside">
//                                     {product.features.map((feature, idx) => (
//                                         <li
//                                             key={idx}
//                                             className="text-sm"
//                                         >
//                                             {feature}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default UniarchCameraProducts;








// import React from 'react';
// import NavBar from '../../components/Navbar/NavBar';
// import Footer from '../../components/Footer';

// import uniarchindoorCameraimage from "../../images/product images/camera product images/uniarch indoor camera.png";
// import uniarchoutdoorCameraimage from "../../images/product images/camera product images/uniarch outdoor camera.png";





// const UniarchCameraProducts = () => {
//     const products = [
//         {
//             name: 'Indoor Security Cameras',
//             description: 'Uho-S2E',
//             features: [
//                 'High-quality image with 2MP, 1/3" CMOS sensor',
//                 '2MP (1920*1080) @25/20fps; 720P (1280*720) @25/20fps',
//                 'Ultra 265, H.265, H.264',
//                 'Built-in Mic & Speaker, support two-way audio, offer better interaction',
//                 'IR night vision, up to 10m (33ft) IR distance',
//                 'Support 256 G Micro SD card',
//                 'Wi-Fi connection and easy installation'
//             ],
//             imageUrl: uniarchindoorCameraimage
//         },
//         {
//             name: 'Outdoor Security Cameras',
//             description: 'Uho-B1R-M2F3(4)',
//             features: [
//                 'High quality image with 2MP, 1/2.9" CMOS sensor',
//                 '2MP (1920*1080)@30/25fps; 720P (1280*720)@30/25fps',
//                 'Ultra 265, H.265, H.264, MJPEG',
//                 'Built-in Mic',
//                 'Smart IR, up to 30m (98ft) IR distance',
//                 'Supports 128 G Micro SD card',
//                 'IP67 protection',
//                 '3-Axis'
//             ],
//             imageUrl: uniarchoutdoorCameraimage
//         }
//     ];

//     // Path to the PDF file
//     const pdfUrl = '/Uniview Products Catalog.pdf'; // Replace this with the actual path to your PDF

//     return (
//         <>
//             <div>
//                 <NavBar />
//             </div>
//             <div className="bg-gray-100 py-4 mt-24">
//                 <div className="container mx-auto px-10">
//                     <h1 className="text-3xl font-bold text-blue-900 text-center">Uniarch WIFI Camera Products</h1>
                    
//                     {/* Add View PDF Button */}
//                     <div className="text-center mt-8">
//                         <a 
//                             href={pdfUrl} 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
//                         >
//                             View PDF
//                         </a>
//                     </div>
                    
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-8">
//                         {products.map((product, index) => (
//                             <div
//                                 key={index}
//                                 className="group bg-white p-6 rounded-lg shadow-md transition duration-300"
//                             >
//                                 <img
//                                     alt={product.name}
//                                     className="w-full h-48 object-contain rounded-t-lg mb-4"
//                                     src={product.imageUrl}
//                                 />
//                                 <h2 className="text-2xl font-semibold">
//                                     {product.name}
//                                 </h2>
//                                 <p className="mt-2">{product.description}</p>
//                                 <ul className="mt-4 list-disc list-inside">
//                                     {product.features.map((feature, idx) => (
//                                         <li
//                                             key={idx}
//                                             className="text-sm"
//                                         >
//                                             {feature}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default UniarchCameraProducts;















import React, { useState } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

import unvnetworkCameraimage from "../../images/product images/camera product images/unvnetworkcameras.png";
import unvPTZCameraimage from "../../images/product images/camera product images/unvPTZcameras.png";

const UnvCameraProducts = () => {
    const products = [
        {
            name: 'Network Cameras',
            description: ['IPC2324SE-ADZK-WL-I0','4MP ColorHunter VF Dual-light Bullet Network Camera' ],
            features: [
                'High quality image with 4MP, 1/1.8"CMOS sensor',
                // 'Ultra 265, H.265, H.264, MJPEG',
                'Smart intrusion prevention, include cross line, intrusion, enter leave area detection',
                'Intelligent People Flow Counting and Crowd Density Monitoring',
                'Colorhunter technology ensures 24-hour full-color images',
                '120dB true WDR technology enables clear image in strong light scene',
                'Support 9:16 corridor Mode',
                'Alarm:1 in/1 out, Audio: 1 in/1 out',
                'Supports 512 G micro SD card',
                'IK10 vandal resistant , IP67 protection',
                'Support PoE power supply',
            ],
            imageUrl: unvnetworkCameraimage
        },
        {
            name: 'PTZ Cameras',
            description: ['IPC6424SR-X25-VF','4 inch PTZ Camera'],
            features: [
                '4MP (2688*1520@30fps), 1/2.8”CMOS senor',
                '25X Optical Zoom',
                'Lighthunter technology',
                'up to 100m IR distance',
                'Auto-Tracking',
                'Quick focus technology',
                'IP67 ingress protection, IK10 vandal resistant, 6kv lightning protection',
                'DC 12V±25% or PoE+',
                'Alarm 2 / 1, Audio 1 / 1',
                'RS485, BNC interface'
            ],
            imageUrl: unvPTZCameraimage
        }
    ];

    const pdfOptions = [
        { label: "Network Cameras all products 2025", url: "/unv pdfs/Network Cameras all products 2025.pdf" },
        { label: "PTZ Cameras all products 2025", url: "/unv pdfs/PTZ Cameras all products 2025.pdf" },
        { label: "Analog Cameras all products 2025", url: "/unv pdfs/Analog Cameras all products 2025.pdf" },   
        { label: "Thermal Cameras all products 2025", url: "/unv pdfs/Thermal Cameras all products 2025.pdf" }
        // { label: "Uniarch Indoor Camera Manual", url: "/unv pdfs/NVR all products 2025.pdf" },
        
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
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Uniview Camera Products</h1>

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
                                    className="w-full h-48 object-contain rounded-t-lg mb-4"
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

export default UnvCameraProducts;
