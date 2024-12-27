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
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import partners from './components/Clients'
import Clients from '../src/components/Clients'

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




import Services from "./components/Services";
import ITservice from "./pages/ITservice";
import SecuritySurveillanceService from "./pages/securitysurveillanceservice";
import NetworkingService from "./pages/networkingservice";
import MobilityService from "./pages/mobilityservice";



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
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/partners" element={<partners />} /> 
            <Route path="/clients" element={<Clients />} />


            <Route path="/" element={<Services />} />
            
                <Route path="/it-service" element={<ITservice />} />
                <Route path="/security-surveillance-service" element={<SecuritySurveillanceService />} />
                <Route path="/networking-service" element={<NetworkingService />} />
                <Route path="/mobility-service" element={<MobilityService />} />

          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
