import React, { useEffect } from "react";
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

// Images
import bitdefenderImage from '../../images/product images/Bitdefender.png';
import esetImage from '../../images/product images/eset.jpg';
import sqriteimage from '../../images/product images/Seqrite-Banner.png';

const AntivirusDetails = () => {
    // Dynamically inject meta tags and structured data
    useEffect(() => {
        const antivirusProducts = [
            {
                name: 'Bitdefender',
                description: 'Bitdefender GravityZone delivers advanced antivirus solutions with next-generation threat protection and centralized security management for businesses of all sizes.',
                features: ['Advanced Threat Defense', 'Anti-Phishing Protection', 'Real-time Protection', 'VPN included'],
                imageUrl: bitdefenderImage,
                alt: 'Bitdefender antivirus logo and product',
            },
            {
                name: 'ESET',
                description: 'ESET delivers cutting-edge antivirus and internet security solutions, offering robust protection against viruses, malware, and phishing attacks. Its smart scanning technology and cloud-powered scanning provide a seamless and efficient defense system.',
                features: ['Smart scanning technology', 'Real-time file system protection', 'Antiphishing', 'Cloud-powered scanning'],
                imageUrl: esetImage,
                alt: 'ESET antivirus logo and product',
            },
            {
                name: 'Seqrite',
                description: 'Seqrite is an enterprise-grade cybersecurity solution offering reliable protection against malware, ransomware, and other threats. It includes advanced features like endpoint security, antiphishing, and real-time system protection tailored for businesses of all sizes.',
                features: ['Smart scanning technology', 'Real-time file system protection', 'Antiphishing', 'Cloud-powered scanning'],
                imageUrl: sqriteimage,
                alt: 'Seqrite antivirus logo and product',
            },
        ];
        

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Antivirus Solutions",
            "description": "Explore advanced antivirus solutions from Bitdefender, ESET, and Seqrite tailored for business and personal needs.",
            "brand": antivirusProducts.map(product => ({
                "@type": "Brand",
                "name": product.name,
                "logo": product.imageUrl,
            })),
        };

        document.title = "Antivirus Solutions | Vipsee Infotech";
        document.querySelector('meta[name="description"]').setAttribute(
            "content",
            "Explore advanced antivirus solutions from Bitdefender, ESET, and Seqrite tailored for your business and personal cybersecurity needs."
        );

        const scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.textContent = JSON.stringify(structuredData);
        document.head.appendChild(scriptTag);

        const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "Antivirus, business security, bitdefender, gravityzone, Eset antivirus, seqrite antivirus, Eset, Seqrite, Bitdefender antivirus, malware protection, Vipsee Infotech, Mumbai";
    document.head.appendChild(metaKeywords);

        return () => {
            document.head.removeChild(scriptTag);
        };
    }, []); // Empty dependency array

    const antivirusProducts = [
        {
            name: 'Bitdefender',
            description: 'Bitdefender GravityZone delivers advanced antivirus solutions with next-generation threat protection and centralized security management for businesses of all sizes.',
            features: ['Advanced Threat Defense', 'Anti-Phishing Protection', 'Real-time Protection', 'VPN included'],
            imageUrl: bitdefenderImage,
            alt: 'Bitdefender antivirus logo and product',
        },
        {
            name: 'ESET',
            description: 'ESET delivers cutting-edge antivirus and internet security solutions, offering robust protection against viruses, malware, and phishing attacks. Its smart scanning technology and cloud-powered scanning provide a seamless and efficient defense system.',
            features: ['Smart scanning technology', 'Real-time file system protection', 'Antiphishing', 'Cloud-powered scanning'],
            imageUrl: esetImage,
            alt: 'ESET antivirus logo and product',
        },
        {
            name: 'Seqrite',
            description: 'Seqrite is an enterprise-grade cybersecurity solution offering reliable protection against malware, ransomware, and other threats. It includes advanced features like endpoint security, antiphishing, and real-time system protection tailored for businesses of all sizes.',
            features: ['Smart scanning technology', 'Real-time file system protection', 'Antiphishing', 'Cloud-powered scanning'],
            imageUrl: sqriteimage,
            alt: 'Seqrite antivirus logo and product',
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
                                        alt={product.alt}
                                        className="w-auto h-[150px] object-contain rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-center">{product.description}</p>
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
