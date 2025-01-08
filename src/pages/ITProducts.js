import React, { useEffect,useMemo } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const ITProducts = () => {
  const products = useMemo(() =>[
    {
      name: "Laptop/Desktops",
      description: "High-performance laptops for all your business and personal needs.",
      link: "/laptops", // Link to the Laptops page
    },
    {
      name: "Printers/Scanners",
      description: "Reliable and efficient printers for home and office use.",
      link: "/printers", // Link to the Printers page
    },
  ],[]);

  useEffect(() => {
    // Set page title
    document.title = "IT Products | Vipsee Infotech";

    // Dynamically add meta tags for SEO
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Explore Vipsee Infotech's IT Products including high-performance laptops, desktops, printers, and scanners for all your business and personal needs.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "IT Products, Laptops, Desktops, Printers, Scanners, Vipsee Infotech, Office Equipment, Business Solutions";
    document.head.appendChild(metaKeywords);

    // Add structured data for rich search results
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "IT Products",
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": product.name,
        "description": product.description,
        "url": product.link,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Smooth scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

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

      <div className="bg-gray-100 py-20 mt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
            IT Products
          </h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
              >
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <p className="mt-2">{product.description}</p>
              </Link>
            ))}
          </div>
          {/* Common Button Below All Products */}
          <div className="text-center mt-10">
            <Link
              to="/it-service" // Common related services page
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

export default ITProducts;
