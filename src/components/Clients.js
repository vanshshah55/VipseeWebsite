import React, { useEffect, useMemo } from "react";
import Cisco from "../images/clients/Cisco_Logo-removebg-preview.png";
import Cambium from "../images/clients/Cambium Network - Logo.png";
import uniview from "../images/clients/univiewlogoopng-removebg-preview.png";
import hikvision from "../images/clients/hikvisionlogoo-removebg-preview.png";
import Ruijie from "../images/clients/ruijiereyee-removebg-preview.png";
import Sonicwall from "../images/clients/Sonicwall_Logo-removebg-preview.png";
import netgear from "../images/clients/Netgear_Logo-removebg-preview.png";
import Tplink from "../images/clients/Tplink Logo.png";
import sophos from "../images/clients/sophoslogo.png";
import qsan from "../images/clients/QsanLogo.png";
import asustor from "../images/clients/asustorlogo.png";
import bitdefender from "../images/clients/bitdefenderlogo.png";
import eset from "../images/clients/esetlogo.png";
import sqrite from "../images/clients/sqritelogo-removebg-preview.png";
import fortinet from "../images/clients/Fortinet_Logo.png";
import verbatim from "../images/clients/Verbatim_logo.png";

const exclusivePartnerLogo = uniview;

const baseLogos = [
  uniview,
  hikvision,
  verbatim,
  Sonicwall,
  fortinet,
  sophos,
  Cambium,
  Ruijie,
  Cisco,
  netgear,
  Tplink,
  qsan,
  asustor,
  bitdefender,
  sqrite,
  eset,
];

const Clients = () => {
  // Create repeated logos array using Array.from
  const clientLogosRow1 = useMemo(() => {
    return Array.from({ length: 100 }, () => baseLogos).flat();
  }, []);

  // Update SEO metadata and structured data
  useEffect(() => {
    // Update the page title
    document.title = "Our Trusted Partners - Networking and Surveillance Solutions";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore our trusted partners in Data,networking and surveillance solutions, including Sonicwall, Uniview, Hikvision, and more."
      );
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content =
      "Explore our trusted partners in Data, networking and surveillance solutions, including Sonicwall, Uniview, Hikvision, and more.";
      document.head.appendChild(newMetaDescription);
    }

    // Add meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Wifi Solutions, Data Solutions, networking solutions, surveillance solutions,Connectivity solutions, Cisco, Uniview, Hikvision, Sonicwall, trusted partners, uniview,hikvision,Sonicwall, Fortinet, sophos,Cambium,Ruijie,Cisco,netgear,Tplink,qsan,asustor, bitdefender,sqrite,eset"
      );
    } else {
      const newMetaKeywords = document.createElement("meta");
      newMetaKeywords.name = "keywords";
      newMetaKeywords.content =
        "Wifi Solutions, Data Solutions, networking solutions, surveillance solutions,Connectivity solutions, Cisco, Uniview, Hikvision, Sonicwall, trusted partners, uniview,hikvision,Sonicwall, Fortinet, sophos,Cambium,Ruijie,Cisco,netgear,Tplink,qsan,asustor, bitdefender,sqrite,eset";
      document.head.appendChild(newMetaKeywords);
    }

    // Add structured data
    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Our Trusted Partners",
      "description":
        "Trusted partners providing networking and surveillance solutions.",
      "url": window.location.href,
      "logo": exclusivePartnerLogo,
      "sameAs": [
        "https://www.sonicwall.com/",
        "https://www.hikvision.com/",
        "https://www.uniview.com/",
      ],
      "foundingDate": "2002",
    });
    document.head.appendChild(structuredData);

    // Clean up on component unmount
    return () => {
      document.head.removeChild(structuredData);
    };
  }, []);

  return (
    <div id="partners" className="scroll-offset">
      <div className="mt-8 bg-white">
        <section data-aos="fade-up">
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Affiliates
            </h2>
            <div className="flex justify-center">
              <div className="w-24 border-b-4 border-blue-900"></div>
            </div>
          </div>

          {/* Our Partners Scrolling Section */}
          <div
            className="p-8 overflow-hidden relative group touch-scroll"
            data-aos="fade-in"
            data-aos-delay="600"
          >
            <div className="flex gap-8 animate-scroll group-hover:animate-pause">
              {clientLogosRow1.map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 h-20 flex justify-center items-center rounded-md"
                  style={{ width: "auto", maxWidth: "150px" }}
                >
                  <img
                    src={logo}
                    alt={`client-logo-${index}`}
                    className="h-full w-auto mx-auto"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive Partner Section */}
          <div className="flex flex-col items-center justify-center my-8">
            <div className="h-32 w-56 flex justify-center items-center bg-white rounded-md shadow-md border-2 border-blue-900">
              <img
                src={exclusivePartnerLogo}
                alt="exclusive-partner"
                className="h-full w-auto mx-auto"
              />
            </div>
            <span className="mt-4 text-blue-900 text-lg font-semibold">
              Authorised Distributor
            </span>
          </div>
        </section>
        <style jsx>{`
        .animate-scroll {
          animation: scroll-sideways 45s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-sideways-reverse 45s linear infinite;
        }

        .animate-pause {
          animation-play-state: paused;
        }

        @keyframes scroll-sideways {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-sideways-reverse {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Touch Scroll for Mobile */
        .touch-scroll {
          overflow-x: auto;
          scroll-snap-type: x mandatory; /* Ensures smooth snapping when scrolling on mobile */
          -webkit-overflow-scrolling: touch; /* Enables smooth scrolling on iOS devices */
        }

        .touch-scroll::-webkit-scrollbar {
          display: none; /* Hides scrollbar for a cleaner look */
        }
      `}</style>
    </div>
    </div>
  );
};

export default Clients;
