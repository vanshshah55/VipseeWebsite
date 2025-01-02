// import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

// Images
import bitdefenderImage from '../../images/product images/Bitdefender.png';
import esetImage from '../../images/product images/eset.jpg';
import sqriteimage from '../../images/product images/Seqrite-Banner.png';

const AntivirusDetails = () => {
    const antivirusProducts = [
        {
            name: 'Bitdefender',
            description: 'Bitdefender provides advanced, comprehensive cybersecurity solutions, protecting against all forms of malware, ransomware, and online threats. With features like real-time protection and a VPN included, it ensures both security and privacy for users',
            features: ['Advanced Threat Defense', 'Anti-Phishing Protection', 'Real-time Protection', 'VPN included'],
            imageUrl: bitdefenderImage, // Correctly import and assign the image
        },
        {
            name: 'ESET',
            description: 'ESET delivers cutting-edge antivirus and internet security solutions, offering robust protection against viruses, malware, and phishing attacks. Its smart scanning technology and cloud-powered scanning provide a seamless and efficient defense system.',
            features: ['Smart scanning technology', 'Real-time file system protection', 'Antiphishing', 'Cloud-powered scanning'],
            imageUrl: esetImage, // Correctly import and assign the image
        },
        {
            name: 'Seqrite',
            description: 'Seqrite is an enterprise-grade cybersecurity solution offering reliable protection against malware, ransomware, and other threats. It includes advanced features like endpoint security, antiphishing, and real-time system protection tailored for businesses of all sizes.',
            features: ['Smart scanning technology', 'Real-time file system protection', 'Antiphishing', 'Cloud-powered scanning'],
            imageUrl: sqriteimage, // Correctly import and assign the image
        },
    ];

    return (
        <>
      <div>
        <NavBar />
      </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Antivirus Solutions</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {antivirusProducts.map((product, index) => (
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

export default AntivirusDetails;
