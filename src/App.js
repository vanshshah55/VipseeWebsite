import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
//import partners from './components/Clients'
import Clients from '../src/components/Clients'


import NotFound from "./pages/NotFound";

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




import Services from "./components/Services";
import ITservice from "./pages/ITservice";
import SecuritySurveillanceService from "./pages/securitysurveillanceservice";
import NetworkingService from "./pages/networkingservice";
import MobilityService from "./pages/mobilityservice";
// import AboutUs from "./pages/AboutUs";

import Product from './components/Products';

// //products
import CyberSecurityproducts from './pages/CyberSecurityproducts';
import FirewallDetails from './pages/cybersecproduct/FirewallDetails';
import AntivirusDetails from './pages/cybersecproduct/AntivirusDetails';
import NetworkSecurityDetails from './pages/cybersecproduct/NetworkSecurityDetails';


import ITProducts from './pages/ITProducts';
import PrinterDetails from './pages/ITproduct/PrinterDetails';
import LaptopDetails from './pages/ITproduct/LaptopDetails'; // Import the Laptop Details page

import Mobility from './pages/MobilityProduct';
import MobilityProductsDetails from './pages/Mobilityproducts/MobilityProductsDetails';
import RAppDetails from './pages/Mobilityproducts/RAppDetails';

import CameraProducts from './pages/CameraProducts';
import UniarchCameraProduct from './pages/Securitysurveillanceproduct/Uniarchproductdetails';
import UnvCameraProduct from './pages/Securitysurveillanceproduct/Unvproductdetails';
import NVRproduct from './pages/Securitysurveillanceproduct/NVRproductdetails';
import VCproduct from './pages/Securitysurveillanceproduct/videoconferrencingproductdetails';


import Privacypolicy from './pages/privacypolicy';


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Vipsee Infotech");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} /> 
            <Route path="/partners" element={<partners />} /> 
            <Route path="/clients" element={<Clients />} />
            <Route path="/products" element={<Product />} />


            <Route path="/" element={<Services />} />
            
                <Route path="/it-service" element={<ITservice />} />
                <Route path="/security-surveillance-service" element={<SecuritySurveillanceService />} />
                <Route path="/networking-service" element={<NetworkingService />} />
                <Route path="/mobility-service" element={<MobilityService />} />

                <Route path="/about-us#aboutus" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                


                <Route path="/cyber-security" element={<CyberSecurityproducts />} />
                <Route path="/firewall-details" element={<FirewallDetails />} />
                <Route path="/antivirus-details" element={<AntivirusDetails />} />
                <Route path="/network-security-details" element={<NetworkSecurityDetails />} />

                <Route path="/it-products" element={<ITProducts />} />

                <Route path="/laptops" element={<LaptopDetails />} />
            
            <Route path="/printers" element={<PrinterDetails />} /> 


            <Route path="/mobility" element={<Mobility />} />
            <Route path="/mobility-products-details" element={<MobilityProductsDetails />} />
            <Route path="/r-app-details" element={<RAppDetails />} />

            <Route path="/cameras" element={<CameraProducts />} />
            <Route path="/Uniarch-product-details" element={<UniarchCameraProduct />} />
            <Route path="/Unv-product-details" element={<UnvCameraProduct />} />
            <Route path="/NVR-product-details" element={<NVRproduct />} />
            <Route path="/Video-Conferrencing-products-details" element={<VCproduct />} />

            <Route path="/Privacy-Policy" element={<Privacypolicy/>}/>

            <Route path="*" element={<NotFound />} />


{/* 
                
            
            <Route path="/it-products" element={<ITProducts />} />
            <Route path="/network-security" element={<NetworkSecurity />} />
            
            <Route path="/" element={<CyberSecurity />} />
            
             {
            <Route path="/laptops" element={<LaptopDetails />} />
            
            
            
            <Route path="/network-devices-details" element={<NetworkDevicesDetails />} />
            <Route path="/printers" element={<PrinterDetails />} /> */}


          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
