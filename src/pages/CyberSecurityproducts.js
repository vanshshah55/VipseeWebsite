// // import React from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from '../components/Navbar/NavBar';
// import Footer from '../components/Footer';

// import FirewallDetails from '../pages/cybersecproduct/FirewallDetails'

// const Cybersecurityproducts = () => {
//     const products = [
//         {
//             name: 'Firewall Products',
//             description: 'Advanced protection to safeguard your network from cyber threats.',
//             link: "/firewall-details", // Link to detailed page
//         },
//         {
//             name: 'Network Products',
//             description: 'Secure your network with advanced tools to prevent unauthorized access.',
//             link: '/network-security-details', // Add link to network security details page
//         },
//         {
//             name: 'Antivirus Software',
//             description: 'Comprehensive protection against malware, ransomware, and other threats.',
//             link: '/antivirus-details',
//         },
        
//     ];

//     return (
//         <>
//       <div>
//         <NavBar />
//       </div>
//             <div className="bg-gray-100 py-4 mt-24">
//                 <div className="container mx-auto px-10">
//                     <h1 className="text-3xl font-bold text-blue-900 text-center">Cybersecurity Products</h1>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-8">
//                         {products.map((product, index) => (
//                             <Link
//                                 key={index}
//                                 to={product.link}
//                                 className="bg-white p-6 rounded-lg shadow-lg text-gray-700 hover:bg-gray-500 hover:text-white"
//                             >
//                                 <h2 className="text-2xl font-semibold">{product.name}</h2>
//                                 <p>{product.description}</p>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Cybersecurityproducts;



import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const CybersecurityProducts = () => {
    const products = [
        {
            name: 'Firewall Products',
            description: 'Advanced protection to safeguard your network from cyber threats.',
            link: "/firewall-details",
        },
        {
            name: 'Network Products',
            description: 'Secure your network with advanced tools to prevent unauthorized access.',
            link: '/network-security-details',
        },
        {
            name: 'Antivirus Software',
            description: 'Comprehensive protection against malware, ransomware, and other threats.',
            link: '/antivirus-details',
        },
    ];

    return (
        <>
        <div>
                <NavBar />
            </div>
            
            <div className="bg-gray-100 py-16 mt-24">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">Cybersecurity Products</h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <Link
                                key={index}
                                to={product.link}
                                className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
                            >
                                <h2 className="text-2xl font-semibold">{product.name}</h2>
                                <p className="mt-2">{product.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CybersecurityProducts;
