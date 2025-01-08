import React, { useEffect, useMemo } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const SecuritySurveillanceService = () => {
  const services = useMemo(() => [
    {
      title: "CCTV Camera Installation",
      description:
        "Professional installation of high-quality CCTV cameras for both indoor and outdoor surveillance, tailored to your security needs.",
      icon: "📹",
    },
    {
      title: "CCTV Maintenance & Servicing",
      description:
        "Regular maintenance, troubleshooting, and updates to ensure uninterrupted 24/7 surveillance.",
      icon: "🛠️",
    },
    {
      title: "Remote Monitoring Solutions",
      description:
        "Access your surveillance feed remotely from anywhere in the world through secure and easy-to-use applications.",
      icon: "🌐",
    },
    {
      title: "Home & Office Security Systems",
      description:
        "Customized security solutions for residential and commercial spaces, combining advanced technologies with reliability.",
      icon: "🏠",
    },
    {
      title: "Alarm Systems Integration",
      description:
        "Seamlessly integrate alarm systems with your CCTV setup for real-time alerts in case of potential threats.",
      icon: "🚨",
    },
    {
      title: "Surveillance Analytics",
      description:
        "Advanced AI-based analytics for motion detection, facial recognition, and threat identification to enhance security.",
      icon: "📊",
    },
    {
      title: "Video Storage Solutions",
      description:
        "Secure and scalable storage options for storing surveillance footage, with cloud and local storage options.",
      icon: "💾",
    },
    {
      title: "Customized Surveillance Plans",
      description:
        "Designing surveillance systems to meet specific security requirements for factories, offices, retail shops, and homes.",
      icon: "📝",
    },
  ],[]);

  useEffect(() => {
    // Dynamically update SEO Metadata
    document.title = "Security Surveillance Services | Vipsee Infotech";
    const metaDescription = document.querySelector("meta[name='description']");
    const metaKeywords = document.querySelector("meta[name='keywords']");
    const metaAuthor = document.querySelector("meta[name='author']");

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Vipsee Infotech offers professional security surveillance services including CCTV camera installation, maintenance, remote monitoring, and more."
      );
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content =
        "Vipsee Infotech offers professional security surveillance services including CCTV camera installation, maintenance, remote monitoring, and more.";
      document.head.appendChild(newMetaDescription);
    }

    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "CCTV installation, security surveillance, alarm systems, video storage solutions, surveillance analytics"
      );
    } else {
      const newMetaKeywords = document.createElement("meta");
      newMetaKeywords.name = "keywords";
      newMetaKeywords.content =
        "CCTV installation, security surveillance, alarm systems, video storage solutions, surveillance analytics, NVR, network video recorder, cctv camera";
      document.head.appendChild(newMetaKeywords);
    }

    if (metaAuthor) {
      metaAuthor.setAttribute("content", "Vipsee Infotech");
    } else {
      const newMetaAuthor = document.createElement("meta");
      newMetaAuthor.name = "author";
      newMetaAuthor.content = "Vipsee Infotech";
      document.head.appendChild(newMetaAuthor);
    }

    // Structured Data (JSON-LD)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Vipsee Infotech",
      "url": "https://vipinfo.co.in",
      "description":
        "Vipsee Infotech provides advanced security solutions including CCTV installation, remote monitoring, and AI-based analytics for businesses and homes.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Andheri",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400069",
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
    });
    document.head.appendChild(script);

    return () => {
      // Clean up script on component unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [services]);

  useEffect(() => {
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
            Comprehensive Security Surveillance Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Vipsee Infotech, we deliver state-of-the-art security solutions to safeguard
            your property and provide peace of mind.
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
              to="/cameras"
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

export default SecuritySurveillanceService;
