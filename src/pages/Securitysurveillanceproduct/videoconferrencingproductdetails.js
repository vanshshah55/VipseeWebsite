import React, { useState, useMemo, useEffect } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer";

import VideoconA20image from "../../images/product images/camera product images/VideoconfA20.png";
import VideoconA30image from "../../images/product images/camera product images/VideoconfA30.png";

const VCproducts = () => {
  // Memoize the products array for optimization
  const products = useMemo(() => [
    {
      name: "Unear A20",
      description: ["All-In-One Video Conference Camera"],
      features: [
        "1080P HD Image, 90° ultra-wide view",
        "4 mics, 16 ft voice pickup range",
        "3W HI-FI Speaker",
        "Embedded 3A audio algorithm",
        "USB plug-and-play",
      ],
      imageUrl: VideoconA20image,
    imageAlt: 'Uniview Video Conferencing device'

    },
    {
      name: "IoT-Unear A30",
      description: ["All-In-One Video Conference Camera"],
      features: [
        "2K QHD Image, 115° ultra-wide view",
        "4 mics, 16 ft voice pickup range",
        "3W HI-FI Speaker",
        "Embedded 3A audio algorithm",
        "USB plug-and-play",
      ],
      imageUrl: VideoconA30image,
      imageAlt: 'Uniview Video Conferencing device'

    },
  ], []);

  const pdfOptions = [
    {
      label: "Video Conferencing All Products 2025",
      url: "/unv pdfs/Video Conferencing all products 2025.pdf",
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  // Update the document title and meta tags dynamically
  useEffect(() => {
    document.title = "Video Conferencing Devices | Vipsee Infotech";
    
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.content =
        "Discover high-quality video conferencing devices like Unear A20 and IoT-Unear A30. Features include HD imaging, ultra-wide views, and USB plug-and-play for seamless collaboration.";
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Discover high-quality video conferencing devices like Unear A20 and IoT-Unear A30. Features include HD imaging, ultra-wide views, and USB plug-and-play for seamless collaboration.";
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.content =
        "video conferencing devices, Unear A20, IoT-Unear A30, HD imaging, ultra-wide view, USB plug-and-play, video collaboration devices";
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content =
        "video conferencing devices,online meeting, online conferencing, video conferencing device for business, cross platform video conferencer, Unear A20, IoT-Unear A30, HD imaging, ultra-wide view, USB plug-and-play, video collaboration devices, Uniview devices, Unv devices,Vipsee Infotech, Mumbai ";
      document.head.appendChild(meta);
    }

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Video Conferencing Devices",
      description:
        "Discover high-quality video conferencing devices like Unear A20 and IoT-Unear A30 with HD imaging and USB plug-and-play.",
      brand: "Uniarch",
      offers: products.map((product) => ({
        "@type": "Offer",
        name: product.name,
        description: product.description[0],
        image: product.imageUrl,
        url: window.location.href,
        priceCurrency: "INR",
        price: "Contact for Pricing",
      })),
    };

    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.text = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);

    return () => {
      // Cleanup meta tags and structured data when component unmounts
      if (metaDescription) metaDescription.content = "";
      if (metaKeywords) metaKeywords.content = "";
      document.head.removeChild(scriptTag);
    };
  }, [products]);

  const handlePdfSelect = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
    setShowDropdown(false);
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="bg-gray-100 py-4 mt-24">
        <div className="container mx-auto px-10">
          <h1 className="text-3xl font-bold text-blue-900 text-center">
            Video Conferencing Devices
          </h1>

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
                  alt={product.imageAlt}
                  className="w-full h-72 object-contain rounded-t-lg mb-4"
                  src={product.imageUrl}
                />
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <p className="mt-2">
                  {Array.isArray(product.description) ? (
                    product.description.map((desc, idx) => (
                      <span key={idx} className="block">
                        {desc}
                      </span>
                    ))
                  ) : (
                    <span>{product.description}</span>
                  )}
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

export default VCproducts;
