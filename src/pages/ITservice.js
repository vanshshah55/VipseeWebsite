import React, { useEffect,useMemo } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ITMaintainanceService = () => {
  const services =useMemo(() => [
    {
      title: "Hardware Maintenance",
      description:
        "Repair, replacement, and upgrades of desktops, laptops, and networking devices. Ensuring optimal performance of your hardware.",
      icon: "💻",
    },
    {
      title: "Network Setup & Troubleshooting",
      description:
        "Complete networking solutions, including installations, troubleshooting, and performance optimization for seamless connectivity.",
      icon: "🌐",
    },
    {
      title: "Server Maintenance",
      description:
        "Monitoring, updating, and maintaining server infrastructure to ensure minimal downtime and high availability.",
      icon: "🖥️",
    },
    {
      title: "Software Installation & Updates",
      description:
        "Installation, licensing, and updates for various software, ensuring your systems remain secure and up-to-date.",
      icon: "🛠️",
    },
    {
      title: "Data Backup & Recovery",
      description:
        "Implementation of backup solutions and data recovery services to safeguard your business-critical information.",
      icon: "🔒",
    },
    {
      title: "Firewall & Security Support",
      description:
        "Installation and maintenance of firewalls and security systems to protect your network from cyber threats.",
      icon: "🔥",
    },
    {
      title: "On-Site & Remote Support",
      description:
        "Quick and efficient support services, available both on-site and remotely, tailored to your business needs.",
      icon: "📞",
    },
  ],[]);

  useEffect(() => {
    // Set page title
    document.title = "IT Maintenance Services | Vipsee Infotech";

    // Dynamically update meta tags
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Vipsee Infotech provides comprehensive IT maintenance services including hardware maintenance, network setup, server management,laptops and more.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "IT maintenance, hardware maintenance, network setup, server maintenance, software installation, data backup, firewall support,laptops,laptop repairing";
    document.head.appendChild(metaKeywords);

    const metaAuthor = document.createElement("meta");
    metaAuthor.name = "author";
    metaAuthor.content = "Vipsee Infotech";
    document.head.appendChild(metaAuthor);

    // Clean up meta tags on component unmount
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(metaAuthor);
    };
  }, []);

  useEffect(() => {
    // Dynamically add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Vipsee Infotech",
      "url": "https://vipinfo.co.in",
      "description":
        "Vipsee Infotech provides comprehensive IT maintenance services, ensuring your IT infrastructure is reliable, secure, and operational.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Fort",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "India",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9321139367",
        "contactType": "customer service",
      },
      "service": services.map((service) => ({
        "@type": "Service",
        "name": service.title,
        "description": service.description,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Clean up structured data on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, [services]);

  useEffect(() => {
    // Ensure smooth scrolling to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="bg-gray-100 py-4 mt-24">
        <div className="m-auto max-w-6xl p-4 md:p-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Comprehensive IT Maintenance Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Vipsee Infotech, we ensure your IT infrastructure is reliable,
            secure, and always operational.
          </p>
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
              to="/it-products"
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

export default ITMaintainanceService;
