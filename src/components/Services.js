

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../images/network.svg";
import img2 from "../images/computer-servers-cloud.svg";
import img7 from "../images/cctv illustration.svg";
import img4 from "../images/cctv illustration 2.svg";
import img5 from "../images/data-and-settings.svg";
import img6 from "../images/product images/camera product images/uniarchpandacamera.png";

const Services = () => {

    const services = [
        {
            title: "Security Surveillance Services",
            description:
                "Protect what matters most with our advanced CCTV cameras and customized surveillance solutions, designed to enhance security and provide peace of mind.",
            link: "/security-surveillance-service",
            imgSrc: img4,
            alt: "Security service",
        },
        {
            title: "Networking and Cybersecurity Services",
            description:
                "Stay connected and secure with our tailored networking solutions and robust cybersecurity measures, safeguarding your business from evolving threats by our latest firewalls.",
            link: "/networking-service",
            imgSrc: img,
            alt: "Networking service",
        },
        {
            title: "IT Maintenance Services",
            description:
                "Ensure seamless operations with our reliable IT maintenance services, offering expert support for laptops, desktops, and IT infrastructure to keep your systems running efficiently.",
            link: "/it-service",
            imgSrc: img5,
            alt: "IT service",
        },
        {
            title: "Network Mobility Services",
            description:
                "Empower your team with flexible and efficient network mobility solutions, ensuring seamless connectivity and productivity on the go with enterprise WIFI solutions and RAPPs for clientless remote connectivity.",
            link: "/mobility-service",
            imgSrc: img2,
            alt: "Mobility service",
        },
    ];

    return (
        <div id="services" className="bg-gray-100 py-12">
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
                            <Link
                                to={service.link}
                                key={index}
                                className="group"
                            >
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
        <p className="text-md font-medium">
            {service.description}
        </p>
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
