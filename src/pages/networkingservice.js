
import React, { useEffect } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
// import securityImg from "../images/website images/firewall ai.png";
import { Link } from "react-router-dom";

const NetworkingCybersecurityService = () => {
  const services = [
    {
      title: "Advanced Firewall Solutions",
      description:
        "State-of-the-art firewall installations to safeguard your network against unauthorized access and cyber threats.",
      icon: "🛡️",
    },
    {
      title: "Endpoint Security",
      description:
        "Comprehensive endpoint protection to secure devices like laptops, desktops, and servers from malware and breaches.",
      icon: "💻",
    },
    {
      title: "Data Protection and Encryption",
      description:
        "Secure your critical data with advanced encryption techniques, ensuring confidentiality and compliance.",
      icon: "🔐",
    },
    {
      title: "Intrusion Detection and Prevention",
      description:
        "Real-time monitoring and prevention systems to detect and mitigate malicious activities on your network.",
      icon: "🕵️‍♂️",
    },
    {
      title: "Network Infrastructure Setup",
      description:
        "Expert network design and setup services tailored to enhance business connectivity and efficiency.",
      icon: "🌐",
    },
    {
      title: "Cloud Security Solutions",
      description:
        "Secure your cloud infrastructure with identity management, data protection, and threat monitoring services.",
      icon: "☁️",
    },
    {
      title: "VPN and Secure Remote Access",
      description:
        "Set up secure Virtual Private Networks (VPNs) to enable encrypted communication for remote work environments.",
      icon: "🔒",
    },
    {
      title: "Phishing and Ransomware Protection",
      description:
        "Deploy solutions to protect your business from phishing attacks and ransomware, ensuring operational continuity.",
      icon: "🚨",
    },
    {
      title: "Custom Networking and Cybersecurity Solutions",
      description:
        "Tailored services to meet the unique needs of businesses, ensuring top-notch security and performance.",
      icon: "⚙️",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  }, []);

  useEffect(() => {
    // Add metadata for SEO
    document.title = "Networking and Cybersecurity Services | Vipsee Infotech";
    document.querySelector("meta[name='description']").setAttribute(
      "content",
      "Explore robust networking and cybersecurity services from Vipsee Infotech, including firewall solutions, endpoint security, and cloud security."
    );

    // Structured data using JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Networking and Cybersecurity Services",
      description:
        "Explore robust networking and cybersecurity services from Vipsee Infotech, including firewall solutions, endpoint security, and cloud security.",
      provider: {
        "@type": "Organization",
        name: "Vipsee Infotech",
        url: "https://vipinfo.co.in",
      },
      serviceType: [
        "Firewall Solutions",
        "Endpoint Security",
        "Cloud Security",
        "Intrusion Detection",
      ],
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="bg-gray-100 py-4 mt-24"> {/* Adjusted padding to push content down */}
        <div className="m-auto max-w-6xl p-4 md:p-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Networking and Cybersecurity Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Vipsee Infotech delivers robust networking and cybersecurity solutions
            to ensure secure and efficient business operations.
          </p>
          {/* Example image with alt attribute */}
          {/* <img
            src={securityImg}
            alt="Networking and Cybersecurity Solutions"
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
              to="/cyber-security" // Common related services page
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

export default NetworkingCybersecurityService;
