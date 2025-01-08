import React, { useEffect, useMemo } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const NetworkMobilityService = () => {
  const services = useMemo(() => [
    {
      title: "RemoteEdge Connect App (Clientless Remote Connectivity)",
      description:
        "Seamless remote access solutions without the need for client installation, enabling secure and efficient connectivity for businesses on the move.",
      icon: "📡",
    },
    {
      title: "Hybrid Cloud Solutions",
      description:
        "Customized hybrid cloud environments combining the flexibility of public clouds with the security of private clouds for optimal performance.",
      icon: "☁️",
    },
    {
      title: "Enterprise Wi-Fi Setup",
      description:
        "High-speed and secure wireless networks for businesses, ensuring optimal connectivity and scalability.",
      icon: "📶",
    },
    {
      title: "Network-Attached Storage (NAS)",
      description:
        "Centralized data storage solutions for efficient file sharing, backup, and collaboration across teams.",
      icon: "💾",
    },
    {
      title: "VPN Solutions",
      description:
        "Secure Virtual Private Network (VPN) setups for encrypted communication and safe data transfer over public and private networks.",
      icon: "🔒",
    },
    {
      title: "IoT Connectivity Solutions",
      description:
        "Robust network solutions to support IoT devices, ensuring seamless integration and connectivity for smart operations.",
      icon: "🌐",
    },
    {
      title: "LAN/WAN Setup & Optimization",
      description:
        "Expert installation and optimization of Local Area Networks (LAN) and Wide Area Networks (WAN) to enhance connectivity.",
      icon: "🖧",
    },
    {
      title: "Network Security and Monitoring",
      description:
        "Comprehensive network security measures including firewalls, intrusion detection, and proactive monitoring to ensure network reliability.",
      icon: "🔍",
    },
    {
      title: "Custom Network Solutions",
      description:
        "Tailored network setups for businesses of all sizes, ensuring efficient and scalable operations.",
      icon: "⚙️",
    },
  ], []);  // Empty dependency array ensures that 'services' is memoized once and does not change unless necessary.

  useEffect(() => {
    // Scroll to top on render
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });

    // Add SEO metadata dynamically
    const metaTitle = "Network Mobility Services | Vipsee Infotech";
    const metaDescription = "Vipsee Infotech provides cutting-edge network mobility solutions including hybrid cloud setups, enterprise Wi-Fi, VPNs, and custom network designs, remote clientless connectivity. Secure and scalable solutions for businesses of all sizes.";

    document.title = metaTitle;
    const metaTagDescription = document.createElement("meta");
    metaTagDescription.name = "description";
    metaTagDescription.content = metaDescription;
    document.head.appendChild(metaTagDescription);

    const metaTagKeywords = document.createElement("meta");
    metaTagKeywords.name = "keywords";
    metaTagKeywords.content = "Network Mobility Services, RemoteEdge Connect, Hybrid Cloud Solutions, Enterprise Wi-Fi, VPN, IoT Connectivity, LAN/WAN Optimization, Network Security, Vipsee Infotech";
    document.head.appendChild(metaTagKeywords);

    const metaTagAuthor = document.createElement("meta");
    metaTagAuthor.name = "author";
    metaTagAuthor.content = "Vipsee Infotech";
    document.head.appendChild(metaTagAuthor);

    // Add structured data for SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Advanced Network Mobility Services",
      "provider": {
        "@type": "Organization",
        "name": "Vipsee Infotech",
        "url": "https://www.vipinfo.co.in",
      },
      "serviceType": "Network Mobility",
      "areaServed": "India",
      "description": metaDescription,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Network Mobility Solutions",
        "itemListElement": services.map((service) => ({
          "@type": "Offer",
          "name": service.title,
          "description": service.description,
        })),
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(metaTagDescription);
      document.head.removeChild(metaTagKeywords);
      document.head.removeChild(metaTagAuthor);
      document.head.removeChild(script);
    };
  }, [services]);  // Now 'services' is memoized, and you can safely include it in the dependency array

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="bg-gray-100 py-4 mt-24">
        <div className="m-auto max-w-6xl p-4 md:p-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Advanced Network Mobility Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Vipsee Infotech, we provide innovative network mobility solutions that ensure
            seamless connectivity and optimized network performance for businesses.
          </p>
          {/* <img
            src={networkImg}
            alt="Network Mobility Services"
            className="rounded-xl mb-8 shadow-lg mx-auto max-w-full md:max-w-sm h-auto"
          /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="text-4xl text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/mobility" // Common related services page
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg rounded-full shadow-md hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            >
              Explore All Related Products
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NetworkMobilityService;
