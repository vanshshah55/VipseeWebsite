import React, { useEffect,useMemo } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CameraProducts = () => {
  const products = useMemo(()=>[
    {
      name: "Uniview Camera Products",
      description:
        "High-definition surveillance cameras with advanced features like AI detection, night vision, and seamless network integration for professional-grade security.",
      link: "/Unv-product-details",
    },
    {
      name: "Uniarch Camera Products",
      description:
        "Affordable, easy-to-install cameras offering crystal-clear video quality, smart motion detection, and reliable performance for everyday security needs.",
      link: "/Uniarch-product-details",
    },
    {
      name: "Network Video Recorders (NVR)",
      description:
        "Robust network video recorders offering AI-powered analytics, large storage capacity, and smooth video playback for advanced surveillance management.",
      link: "/NVR-product-details",
    },
    {
      name: "Video Conferencing Products",
      description:
        "Unear video conferencing products deliver an unparalleled meeting experience with advanced audio and video technologies.",
      link: "/Video-Conferrencing-products-details",
    },
  ],[]);

  useEffect(() => {
    // Set the page title
    document.title = "Security Surveillance Products | Vipsee Infotech";

    // Add meta tags for SEO
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Explore Uniview and Uniarch camera CCTV products, NVRs, and video conferencing solutions from Vipsee Infotech. Ensure robust security and high-quality surveillance.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "UNV CCTV, uniview cctv, Camera Products, Uniview Cameras, Uniarch Cameras, Network Video Recorders, Video Conferencing Solutions, Vipsee Infotech, Surveillance Products, mumbai";
    document.head.appendChild(metaKeywords);

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Camera Products",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        description: product.description,
        url: product.link,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Cleanup meta tags and structured data on unmount
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(script);
    };
  }, [products]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="bg-gray-100 py-8 mt-24">
        <div className="container mx-auto px-10">
          <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Uniview Products
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
                aria-label={`Learn more about ${product.name}`}
              >
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <p className="mt-2">{product.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/security-surveillance-service"
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg rounded-full shadow-md hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            >
              Explore All Related Services
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CameraProducts;
