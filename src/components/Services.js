import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import img from "../images/network.svg";
import img2 from "../images/computer-servers-cloud.svg";
import img4 from "../images/cctv illustration 2.svg";
import img5 from "../images/data-and-settings.svg";

const Services = () => {
    const services = useMemo(
        () => [
            {
                title: "Security Surveillance Services",
                description:
                    "Protect what matters most with our advanced CCTV cameras and customized surveillance solutions, designed to enhance security and provide peace of mind.",
                benefits: [
                    "24/7 Remote Monitoring",
                    "AI-Powered Threat Detection",
                    "Real-time Alerts & Notifications"
                ],
                cta: "Secure Your Property →",
                link: "/security-surveillance-service",
                imgSrc: img4,
                alt: "Security Surveillance service",
            },
            {
                title: "Networking & Cybersecurity Services",
                description:
                    "Stay connected and secure with our tailored networking solutions and robust cybersecurity measures, safeguarding your business from evolving threats by our latest firewalls.",
                benefits: [
                    "Enterprise-grade Firewall Protection",
                    "99.9% Network Uptime Guarantee",
                    "Ransomware Defense Systems"
                ],
                cta: "Strengthen Your Security →",
                link: "/networking-service",
                imgSrc: img,
                alt: "Networking service",
            },
            {
                title: "IT Support & Maintenance Services",
                description:
                    "Ensure seamless operations with our reliable IT maintenance services, offering expert support for laptops, desktops, and IT infrastructure to keep your systems running efficiently.",
                benefits: [
                    "Rapid Response Support",
                    "Preventative Maintenance",
                    "Cost-effective IT Management"
                ],
                cta: "Boost IT Performance →",
                link: "/it-service",
                imgSrc: img5,
                alt: "IT service",
            },
            {
                title: "Network Mobility Services",
                description:
                    "Empower your team with flexible and efficient network mobility solutions, ensuring seamless connectivity and productivity on the go with enterprise WIFI solutions and RemoteEdge Connect App for clientless remote connectivity.",
                benefits: [
                    "Seamless Remote Work Solutions",
                    "Secure Access from Any Device",
                    "Zero Configuration Connectivity"
                ],
                cta: "Mobilize Your Business →",
                link: "/mobility-service",
                imgSrc: img2,
                alt: "Mobility service",
            },
        ],
        []
    );

    const metaDescription =
        "Explore our premium services: Security Surveillance, Networking & Cybersecurity, IT Maintenance, and Network Mobility solutions tailored to your needs.";
    const keywords =
        "Security Surveillance, Networking Services, Cybersecurity Solutions, IT Maintenance, Network Mobility, Surveillance Cameras, Firewall, Enterprise WIFI, Vipsee Infotech, Mumbai";
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Technology Solutions",
        provider: {
            "@type": "Organization",
            name: "Vipsee Infotech",
            url: "https://vipinfo.co.in",
        },
        areaServed: "Mumbai",
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Our Services",
            itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                },
            })),
        },
    };

    return (
        <div id="services" className="bg-gray-100 py-12">
            {/* Inject SEO Metadata */}
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywords} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                        Services
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-24 border-b-4 border-blue-900"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        Dedicated to empowering your success with innovative
                        solutions and exceptional service.
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map((service, index) => (
                            <Link to={service.link} key={index} className="group">
                                <div className="bg-white transition-all ease-in-out duration-400 text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 flex flex-col h-full">
                                    <div className="m-2 text-justify text-sm flex-1">
                                        <img
                                            alt={service.alt}
                                            className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full object-contain h-48"
                                            src={service.imgSrc}
                                        />
                                        <h2 className="font-semibold my-4 text-2xl text-center">
                                            {service.title}
                                        </h2>
                                        
                                        <ul className="my-4 font-medium space-y-2">
                                            {service.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <div className="mt-auto">
                                            <button className="w-full bg-blue-900 hover:bg-blue-900 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group-hover:bg-white group-hover:text-blue-900">
                                                {service.cta}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
