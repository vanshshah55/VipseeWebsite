// import React, { useState } from 'react';
// import NavBar from '../components/Navbar/NavBar';
// import Footer from '../components/Footer';
// import {useDocTitle} from '../components/CustomHook';
// import axios from 'axios';
// // import emailjs from 'emailjs-com';
// import Notiflix from 'notiflix';

// const Contact = () => {
//     useDocTitle('MLD | Molad e Konsult - Send us a message')
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [phone, setPhone] = useState('')
//     const [message, setMessage] = useState('')
//     const [errors, setErrors] = useState([])

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

//     const sendEmail = (e) => {
//         e.preventDefault();
//         document.getElementById('submitBtn').disabled = true;
//         document.getElementById('submitBtn').innerHTML = 'Loading...';
//         let fData = new FormData();
//         fData.append('first_name', firstName)
//         fData.append('last_name', lastName)
//         fData.append('email', email)
//         fData.append('phone_number', phone)
//         fData.append('message', message)

//         axios({
//             method: "post",
//             url: process.env.REACT_APP_CONTACT_API,
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
//             <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
//                 <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

//                 <form onSubmit={sendEmail}>

//                     <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
//                         <div className="flex">
//                             <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
//                         </div>
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
//                 </div>
//                 </form>
//                         <div
//                             className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
//                             <div className="flex flex-col text-white">
                                
//                                 <div className="flex my-4 w-2/3 lg:w-3/4">
//                                     <div className="flex flex-col">
//                                         <i className="fas fa-map-marker-alt pt-2 pr-2" />
//                                     </div>
//                                     <div className="flex flex-col">
//                                         <h2 className="text-2xl">Office Address</h2>
//                                         <p className="text-gray-400">Ilo Awela, Ota, Ogun State</p>
//                                     </div>
//                                 </div>
                    
//                     <div className="flex my-4 w-2/3 lg:w-1/2">
//                         <div className="flex flex-col">
//                         <i className="fas fa-phone-alt pt-2 pr-2" />
//                         </div>

//                         <div className="flex flex-col">
//                         <h2 className="text-2xl">Call Us</h2>
//                         <p className="text-gray-400">Tel: 08055384406</p>
                        
//                             <div className='mt-5'>
//                                 <h2 className="text-2xl">Send an E-mail</h2>
//                                 <p className="text-gray-400">info@mld.ng</p>
//                             </div>
                       
//                         </div>
//                     </div>
                    
//                     <div className="flex my-4 w-2/3 lg:w-1/2">
//                         <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
//                         </a>
//                         <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
//                         </a>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             <Footer />
//         </>


//     )
// }

// export default Contact;

import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Information = () => {
    useDocTitle('About Us | Vipsee Infotech')

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 " id ="aboutus">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Our Information</h1>
                        </div>
                        
                        {/* Company Information */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-blue-900">Company Overview</h2>
                            <p className="text-gray-700 mt-4">Founded in 2002, Vipsee Infotech has over 20 years of experience in delivering innovative surveillance, networking, and IT solutions. We specialize in high-quality products, including CCTV cameras, networking equipment, and laptops, catering to the diverse needs of businesses and individuals.</p>
                            <p className="text-gray-700 mt-4"> Our team is dedicated to providing customized solutions that enhance security, optimize connectivity, and boost productivity. With strong partnerships with global vendors, we offer cutting-edge technology and exceptional customer service, ensuring our clients stay ahead in a fast-changing digital landscape.</p>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-blue-900">Vipsee Infotech socials</h2>
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.linktr.ee/vipsee/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse">
                                        <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0l-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377Z"></path>
                                    </svg>

                                    

                                </a>
                                <a href="https://www.linkedin.com/in/vipulshah09/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse">
                                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-blue-900">About the Owner</h2>
                            <p className="text-gray-700 mt-4">Vipsee Infotech is led by VIPUL SHAH a vissionary entrepreneur with over two decades of experience in the networking and technology sector.</p>
                            <p className="text-gray-700 mt-4">Vipul Shah began his journey by establishing the company's first office in Fort, besides Bombay Stock Exchange  where the foundation for success was laid. With a passion for technology and innovation, they expanded the business over the years, opening additional office in Andheri, covering the Hubs of Mumbai city.</p>
                            <p className="text-gray-700 mt-4">Their dedication to providing high-quality solutions in networking, surveillance, and IT services has driven Vipsee Infotech’s growth, making it a trusted name in the industry. With a focus on customer satisfaction and continuous improvement, the company offers exceptional products and services.</p>
                        </div>

                        

                        {/* Office Address
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-blue-900">Office Address</h2>
                            <p className="text-gray-700 mt-4">Ilo Awela, Ota, Ogun State, Nigeria</p>
                        </div>

                        {/* Contact Information */}
                        {/* <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-blue-900">Contact Us</h2>
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-400">Tel: 08055384406</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-envelope pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-400">Email: info@mld.ng</p>
                                </div>
                            </div>
                        </div> */} 

                        {/* Social Media Links */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-blue-900">Vipul Shah Socials</h2>
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.linktr.ee/vipsee/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse">
                                        <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0l-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377Z"></path>
                                    </svg>

                                    

                                </a>
                                <a href="https://www.linkedin.com/in/vipulshah09/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse">
                                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Information;
