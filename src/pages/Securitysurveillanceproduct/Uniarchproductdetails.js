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

import uniarchindoorCameraimage from "../../images/product images/camera product images/uniarch indoor camera.png";
import uniarchoutdoorCameraimage from "../../images/product images/camera product images/uniarch outdoor camera.png";

const UniarchCameraProducts = () => {
    const products = [
        {
            name: 'Indoor Security Cameras',
            description: ['Uho-S2E','2MP Indoor Pan & Tilt Wi-Fi Camera'],
            features: [
                'High-quality image with 2MP, 1/3" CMOS sensor',
                '2MP (1920*1080) @25/20fps; 720P (1280*720) @25/20fps',
                'Ultra 265, H.265, H.264',
                'Built-in Mic & Speaker, support two-way audio, offer better interaction',
                'IR night vision, up to 10m (33ft) IR distance',
                'Support 256 G Micro SD card',
                'Wi-Fi connection and easy installation'
            ],
            imageUrl: uniarchindoorCameraimage
        },
        {
            name: 'Outdoor Security Cameras',
            description: ['Uho-B1R-M2F3(4)','2MP HD Outdoor Bullet Wi-Fi Camera'],
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
            imageUrl: uniarchoutdoorCameraimage
        }
    ];

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

export default UniarchCameraProducts;
