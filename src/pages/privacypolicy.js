
import React, { useEffect } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
     useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Enables smooth scrolling
        });
    }, []);
    
  return (
    <><div>
    <NavBar />
  </div>
    <div className="bg-gray-50 py-4 mt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Privacy Policy</h1>

        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">Vipsee Infotech</span>, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect the information you provide when interacting with our website and services.
        </p>

        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          When you visit our website or use our services, we may collect the following information:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Personal details such as your name, email address, phone number, and company information.</li>
          <li>Details related to your inquiries, orders, or services requested.</li>
          <li>Website usage data including IP address, browser type, and pages visited.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-900 mb-4">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Respond to your inquiries and provide support for our products and services.</li>
          <li>Process and manage your orders or service requests.</li>
          <li>Improve our website, services, and customer experience.</li>
          <li>Send updates about new products, services, or promotions (only with your consent).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Data Protection</h2>
        <p className="text-gray-700 mb-6">
          We implement robust security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Sharing Your Information</h2>
        <p className="text-gray-700 mb-6">
          We do not sell, rent, or trade your personal information to third parties. However, we may share your data with trusted partners to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Provide services on our behalf (e.g., payment processing, hosting, or technical support).</li>
          <li>Comply with legal obligations or enforce our terms of service.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Cookies</h2>
        <p className="text-gray-700 mb-6">
          Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze website traffic, remember your preferences, and improve functionality. You can disable cookies through your browser settings if you prefer.
        </p>

        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Your Rights</h2>
        <p className="text-gray-700 mb-6">
          You have the right to access, update, or delete your personal information at any time. To exercise these rights, please contact us at <span className="text-blue-900 font-semibold">vipul@vipinfo.co.in</span>.
        </p>

        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Changes to This Policy</h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly for the latest information.
        </p>

        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          If you have any questions or concerns about our Privacy Policy, please contact us:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Email: <span className="text-blue-900 font-semibold">vipul@vipinfo.co.in</span></li>
          <li>Phone: <span className="text-blue-900 font-semibold">+91 9321139367</span></li>
          
          <ul className="list-disc list-inside text-gray-700 mb-6">
  <li>
    Address: <span className="text-blue-900 font-semibold">Fort Churchgate, Mumbai, India</span>
    <br />
    <span style={{ paddingLeft: "9.3ch" }} className="text-blue-900 font-semibold">
      Andheri, Mumbai, India
    </span>
  </li>
</ul></ul>

  

          

          
         
        <p className="text-gray-500 text-sm text-center mt-6">
          Copyright &copy; 2002 - {new Date().getFullYear()} Vipsee Infotech. All rights reserved.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
