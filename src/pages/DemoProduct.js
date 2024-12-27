// import React, { useState } from 'react';
// import NavBar from '../components/Navbar/NavBar';
// import Footer from '../components/Footer';
// import {useDocTitle} from '../components/CustomHook';
// import axios from 'axios';
// // import emailjs from 'emailjs-com';
// import Notiflix from 'notiflix';

// const DemoProduct = (props) => {

//     useDocTitle('MLD | Molad e Konsult - Demo our products')

//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [phone, setPhone] = useState('')
//     const [message, setMessage] = useState('')
//     const [demoProducts, setDemoProducts ] = useState([])
//     const [errors, setErrors] = useState([])


//     const handleChange = (e) => {
//         const value = e.target.value
//         const checked = e.target.checked
//         errors.products = []
//         if(checked) {
//             setDemoProducts([
//                 ...demoProducts, value
//             ])
//         } else {
//             setDemoProducts(demoProducts.filter( (e) => (e !== value )))
//         }
       
//     }
//     const clearErrors = () => {
//         setErrors([])
//     }

//     const clearInput = () => {
//         setFirstName('')
//         setLastName('')
//         setEmail('')
//         setPhone('')
//         setMessage('')
//     }
    
//     function sendEmail(e) {
//         e.preventDefault();
//         document.getElementById('submitBtn').disabled = true;
//         document.getElementById('submitBtn').innerHTML = 'Loading...';
//         let fData = new FormData();
//         fData.append('first_name', firstName)
//         fData.append('last_name', lastName)
//         fData.append('email', email)
//         fData.append('phone_number', phone)
//         fData.append('message', message)
//         fData.append('products', demoProducts)

//         // emailjs.sendForm('service_7uy4ojg', 'template_et9wvdg', e.target, 'user_uE0bSPGbhRTmAF3I2fd3s')
//         //   .then((result) => {
//         //       console.log(result.text);
//         //       Notiflix.Report.success(
//         //         'Success',
//         //         '"Thanks for sending a message, we\'ll be in touch soon."',
//         //         'Okay',
//         //         );
//         //   }, (error) => {
//         //       console.log(error.text);
//         //       Notiflix.Report.failure(
//         //         'An error occured',
//         //         'Please try sending the message again.',
//         //         'Okay',
//         //         );
//         //   });

//         axios({
//             method: "post",
//             url: process.env.REACT_APP_DEMO_REQUEST_API,
//             data: fData,
//             headers: {
//                 'Content-Type':  'multipart/form-data'
//             }
//         })
//         .then(function (response) {
//             document.getElementById('submitBtn').disabled = false;
//             document.getElementById('submitBtn').innerHTML = 'send message';
//             clearInput()
//             //handle success
//             Notiflix.Report.success(
//                 'Success',
//                 response.data.message,
//                 'Okay',
//             );
//         })
//         .catch(function (error) {
//             document.getElementById('submitBtn').disabled = false;
//             document.getElementById('submitBtn').innerHTML = 'send message';
//             //handle error
//             const { response } = error;
//             if(response.status === 500) {
//                 Notiflix.Report.failure(
//                     'An error occurred',
//                     response.data.message,
//                     'Okay',
//                 );
//             }
//             if(response.data.errors !== null) {
//                 setErrors(response.data.errors)
//             }
            
//         });
//     }
//     return (
//         <>
//             <div>
//                 <NavBar />
//             </div>
//             <div id='demo' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
//                 <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
//                     <form onSubmit={sendEmail} id="demoProductForm">
//                         <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
//                             <div className="flex">
//                                 <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Demo our products</h1>
//                             </div>
//                             <div className="flex items-center my-4">
//                                 <input 
//                                     id="checkbox-1" 
//                                     aria-describedby="checkbox-1" 
//                                     type="checkbox" 
//                                     className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
//                                     value="business_management_system" onChange={handleChange}
//                                  />
//                                 <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Business Management System</label>
//                             </div>
//                             <div className="flex items-center my-4">
//                                 <input 
//                                     id="checkbox-1" 
//                                     aria-describedby="checkbox-1" 
//                                     type="checkbox" 
//                                     className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
//                                     value="school_management_portal" onChange={handleChange}
//                                     />
//                                 <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">School Management Portal</label>
//                             </div>
//                             <div className="flex items-center my-4">
//                                 <input 
//                                     id="checkbox-1" 
//                                     aria-describedby="checkbox-1" 
//                                     type="checkbox" 
//                                     className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
//                                     value="payroll_management_system" onChange={handleChange}
//                                 />
//                                 <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Payroll Management System</label>
//                             </div>
//                             <div className="flex items-center my-4">
//                                 <input 
//                                     id="checkbox-1" 
//                                     aria-describedby="checkbox-1" 
//                                     type="checkbox" 
//                                     className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
//                                     value="event_management_system" onChange={handleChange}
//                                 />
//                                 <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Event Management System</label>
//                             </div>
//                             {errors && 
//                                 <p className="text-red-500 text-sm">{errors.products}</p>
//                             }

//                         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
//                                 <div>
//                                     <input 
//                                         name="first_name" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="text" 
//                                         placeholder="First Name*" 
//                                         value={firstName}
//                                         onChange={(e)=> setFirstName(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.first_name}</p>
//                                     }
//                                 </div>
                                
//                                 <div>
//                                     <input 
//                                         name="last_name" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="text" 
//                                         placeholder="Last Name*"
//                                         value={lastName}
//                                         onChange={(e)=> setLastName(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.last_name}</p>
//                                     }
//                                 </div>

//                                 <div>
//                                     <input 
//                                         name="email"
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="email" 
//                                         placeholder="Email*"
//                                         value={email}
//                                         onChange={(e)=> setEmail(e.target.value)}
//                                         onKeyUp={clearErrors}   
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.email}</p>
//                                     }
//                                 </div>

//                                 <div>
//                                     <input
//                                         name="phone_number" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="number" 
//                                         placeholder="Phone*"
//                                         value={phone}
//                                         onChange={(e)=> setPhone(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.phone_number}</p>
//                                     }
//                                 </div>
//                         </div>
//                         <div className="my-4">
//                             <textarea 
//                                 name="message" 
//                                 placeholder="Message*" 
//                                 className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                 value={message}
//                                 onChange={(e)=> setMessage(e.target.value)}
//                                 onKeyUp={clearErrors}
//                             ></textarea>
//                             {errors && 
//                                 <p className="text-red-500 text-sm">{errors.message}</p>
//                             }
//                         </div>
//                         <div className="my-2 w-1/2 lg:w-2/4">
//                             <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
//                                     focus:outline-none focus:shadow-outline">
//                                 Send Message
//                             </button>
//                         </div>
//                     </div>
//                     </form>
//                     <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
//                         <div className="flex flex-col text-white">     
//                             <div className="flex my-4 w-2/3 lg:w-3/4">
//                                 <div className="flex flex-col">
//                                     <i className="fas fa-map-marker-alt pt-2 pr-2" />
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <h2 className="text-2xl">Office Address</h2>
//                                     <p className="text-gray-400">Ilo Awela, Ota, Ogun State</p>
//                                 </div>
//                             </div>
                            
//                             <div className="flex my-4 w-2/3 lg:w-1/2">
//                                 <div className="flex flex-col">
//                                 <i className="fas fa-phone-alt pt-2 pr-2" />
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <h2 className="text-2xl">Call Us</h2>
//                                     <p className="text-gray-400">Tel: 08055384406</p>
                                
//                                     <div className='mt-5'>
//                                         <h2 className="text-2xl">Send an E-mail</h2>
//                                         <p className="text-gray-400">info@mld.ng</p>
//                                     </div>
                            
//                                 </div>
//                             </div>
                            
//                             <div className="flex my-4 w-2/3 lg:w-1/2">
//                                 <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8 mx-1 text-center pt-1">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
//                                 </a>
//                                 <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8 mx-1 text-center pt-1">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>


//     )
// }

// export default DemoProduct;








import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTree, FaWhatsapp} from 'react-icons/fa';
import {TbBrandGoogleMaps} from 'react-icons/tb';
import { HashLink } from 'react-router-hash-link';


const ContactUs = () => {
    useDocTitle('Contact Us | Vipsee Infotech');

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id="contact-us" className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-6 lg:px-20">
                    {/* Contact Info */}
                    <div className="bg-white p-8 md:px-12 lg:w-8/12 mx-auto rounded-2xl shadow-lg">
                        <h1 className="font-bold text-center text-blue-900 uppercase text-4xl mb-4">Contact Us</h1>
                        <p className="text-center text-gray-600 mb-6">Feel free to reach out using the contact information below.</p>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Phone Number */}
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M2.93 2.93a10 10 0 1114.14 14.14 10 10 0 01-14.14-14.14zm1.415 1.414a8 8 0 1011.314 11.314 8 8 0 00-11.314-11.314z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-blue-900">Phone</p>
                                    <p className="text-gray-600">Work: +91 9321139367</p>
                                    {/* <p className="text-gray-600">Mobile: +91 9820390990</p> */}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M2.93 2.93a10 10 0 1114.14 14.14 10 10 0 01-14.14-14.14zm1.415 1.414a8 8 0 1011.314 11.314 8 8 0 00-11.314-11.314z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-blue-900">Email</p>
                                    <p className="text-gray-600">vipul@vipinfo.co.in</p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-blue-900">Business Hours</p>
                                    <p className="text-gray-600">Monday - Saturday: 11:00 AM - 7:00 PM</p>
                                    <p className="text-gray-600">Sunday: Closed</p>
                                </div>
                            </div>

                             {/* Social Media Links */}
                             <div className="flex justify-center space-x-8 mt-6">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={24} className="text-blue-600 hover:text-blue-800" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={24} className="text-blue-400 hover:text-blue-600" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={24} className="text-blue-700 hover:text-blue-900" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={24} className="text-pink-500 hover:text-pink-700" />
                                </a>
                                <a href="https://wa.me/+919321139367" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp size={24} className="text-green-600 hover:text-green-800" />
                                </a>
                                <HashLink smooth to="#locations">
    <TbBrandGoogleMaps 
        size={24} 
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300" 
    />
</HashLink>
                            </div>

                            {/* Emphasized Linktree */}
                            <div className="mt-6 text-center">
                                <a
                                    href="https://linktr.ee/vipsee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition"
                                >
                                    Visit Our Linktree <FaTree className="inline ml-2" />
                                </a>
                                <p className="text-sm text-gray-600 mt-2">Explore all our links in one place!</p>
                            </div>
                        </div>
                    </div>

                    {/* Location & Maps Section */}
                    <div className="mt-6">
    <h2 className="font-bold text-center text-blue-900 text-3xl mb-8">Our Locations</h2>

    <div id="locations" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Office 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Office 1: Andheri</h3>
            <p className="text-gray-600 mb-4">Shop No.5, Sharma Compound,Old Nagardas Road, Andheri (E), Mumbai 400069</p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Handles wholesale/retail orders for surveillance equipment.</li>
                <li>Primary location for customer services.</li>
                <li>Stockroom for key inventory items.</li>
            </ul>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1884.8463080774425!2d72.8498738!3d19.1211362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9007a6440d9%3A0xd3181a1e202fc9e5!2sVipsee%20Infotech!5e0!3m2!1sen!2sin!4v1735135958268!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>

        {/* Office 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Office 2: Fort</h3>
            <p className="text-gray-600 mb-4">23/25 Singh House, 2nd Floor, Ambalal Doshi Marg, Fort, Churchgate, Mumbai 400001</p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Dedicated space for technical support operations.</li>
                <li>Supporting Firewall management and network security services.</li>
                <li>Regional hub for IT Sales and maintenance services.</li>
            </ul>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.02837587001!2d72.8326294!3d18.9301381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d114760838fd%3A0x21badc1e59ef8143!2sVIPSEE%20INFOTECH!5e0!3m2!1sen!2sin!4v1735136831910!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    </div>
</div>

                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default ContactUs;