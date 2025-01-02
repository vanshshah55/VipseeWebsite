// import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

// Images
import sonicwallImage from '../../images/product images/sonicwall.jpg';
import sophosImage from '../../images/product images/sophosfirewall.png';


const FirewallDetails = () => {
    const firewallProducts = [
        {
            name: 'SonicWall Firewall',
            description: 'SonicWall is a global leader in network security, providing advanced threat protection and firewall solutions.',
            features: ['Real-time deep packet inspection', 'Advanced malware detection', 'Secure SD-WAN', 'Cloud-based security'],
            imageUrl: sonicwallImage,
        },
        {
            name: 'Sophos XG Firewall',
            description: 'Sophos XG Firewall delivers intelligent and responsive threat protection for businesses.',
            features: ['Network visibility', 'Advanced VPN options', 'SSL VPN support', 'Web filtering'],
            imageUrl: sophosImage,
        },
        
    ];

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Firewall Solutions</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {firewallProducts.map((product, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-center">{product.name}</h2>
                                <div className="flex justify-center mt-4">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-auto h-[150px] object-contain rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-center">{product.description}</p>
                                {/* <h3 className="mt-4 font-semibold">Features:</h3>
                                <ul className="list-disc ml-8 mt-2">
                                    {product.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FirewallDetails;