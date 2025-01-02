
//import React, { useEffect } from "react";
import Cisco from "../images/clients/Cisco_Logo-removebg-preview.png";
import Cambium from "../images/clients/Cambium Network - Logo.png";
import uniview from "../images/clients/univiewlogoopng-removebg-preview.png";
import hikvision from "../images/clients/hikvisionlogoo-removebg-preview.png";
import Ruijie from "../images/clients/ruijiereyee-removebg-preview.png";
import Sonicwall from "../images/clients/Sonicwall_Logo-removebg-preview.png";
import netgear from "../images/clients/Netgear_Logo-removebg-preview.png"
import Tplink from "../images/clients/Tplink Logo.png";
import sophos from "../images/clients/sophoslogo.png";
import qsan from "../images/clients/QsanLogo.png"
import asustor from "../images/clients/asustorlogo.png"
import bitdefender from "../images/clients/bitdefenderlogo.png";
import eset from "../images/clients/esetlogo.png";
import sqrite from "../images/clients/sqritelogo-removebg-preview.png"


const clientLogosRow1 = [
  uniview,
  hikvision,
  Sonicwall,
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
  uniview,
  hikvision,
  Sonicwall,
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
  eset,uniview,
  hikvision,
  Sonicwall,
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
  eset,uniview,
  hikvision,
  Sonicwall,
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

const exclusivePartnerLogo = uniview;

const Clients = () => {


  return (
    <div id="partners"className="scroll-offset" 
    // style={{ scrollMarginTop: '64px' }}
    >
    <div  className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div  className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Partners
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
                className="flex-shrink-0 h-20 flex justify-center items-center rounded-md "
                style={{ width: "auto", maxWidth: "150px" }} // Prevent stretching and set max width for logos
              >
                <img
                  src={logo}
                  alt={`client-${index}`}
                  className="h-full w-auto mx-auto"
                  style={{ objectFit: "contain" }} // Ensure the image fits within the container
                />
              </div>
            ))}
          </div>
        </div>

        {/* Exclusive Partner Section (Static) */}
        <div className="flex flex-col items-center justify-center my-8">
          <div className="h-32 w-56 flex justify-center items-center bg-white rounded-md shadow-md border-2 border-blue-900">
            <img
              src={exclusivePartnerLogo}
              alt="exclusive-partner"
              className="h-full w-auto mx-auto"
            />
          </div>
          <span className="mt-4 text-blue-900 text-lg font-semibold">
            Exclusive Authorised Partner
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


