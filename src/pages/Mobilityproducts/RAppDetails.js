// // import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

// Images
import rAppImage from '../../images/website images/cloud ai.png';
const RAppDetails = () => {
    const rAppProduct = {
        name: 'RemoteEdge Connect App',
        description: 'The Ultimate High-Level Security Solution for Remote User and Beyond!',
        features: [
            'No Public IP needed',
            'No Port Forwarding',
            '100% Protection from Hackers & Ransomware',
            'High Availability with Multiple Internet Connections',
        ],
        mainfeatures:[
            'Encrypted Data Transmission: Protects data with a secure, encrypted tunnel—even from your ISP.' , 
'Built-In Security Protocols: Advanced security without relying on third-party tools.' ,
'User-Level Access Control: Customize permissions, such as copy/paste restrictions, for granular control.',
'Access your Application securely from anywhere, no public IP required.',
'No RDP Dependency: Forget clunky remote desktop setups—experience smooth, hassle-free access.',
'No Firewall/Port Forwarding: Secure access without complex configurations.',  
'ISP Load Balancing & Failover: Ensures high availability and reliability.',
'Centralized Data: Transform your local server into a secure cloud, fully encrypted end-to-end.',  
        ],
        imageUrl: rAppImage,
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">RemoteEdge Connect App</h1>
                    <div className="mt-8 grid grid-cols-1 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-center">{rAppProduct.name}</h2>
                            <div className="flex justify-center mt-4">
                                <img
                                    src={rAppProduct.imageUrl}
                                    alt={rAppProduct.name}
                                    className="w-auto h-[300px] object-contain rounded-lg"
                                />
                            </div>
                            <p className="mt-4 text-center">{rAppProduct.description}</p>
                            <h3 className="mt-4 font-semibold">Features:</h3>
                            <ul className="list-disc ml-8 mt-2">
                                {rAppProduct.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <h3 className="mt-4 font-semibold">Details:</h3>
                            <ul className="list-disc ml-8 mt-2">
                                {rAppProduct.mainfeatures.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RAppDetails;
