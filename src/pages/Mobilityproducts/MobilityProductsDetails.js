import React, { useMemo, useEffect } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

// Images
import qsanImage from '../../images/clients/QsanLogo.png';
import asustorImage from '../../images/clients/asustorlogo.png';

const MobilityProductsDetails = () => {
    // Memoize the mobility products array to avoid re-creation
    const mobilityProducts = useMemo(
        () => [
            {
                name: 'QSAN Technology',
                description: 'QSAN Technology delivers high-performance, reliable, and scalable storage solutions for enterprises.',
                features: [
                    'Enterprise-grade Storage',
                    'High Availability Architecture',
                    'Comprehensive Data Protection',
                    'Easy Scalability',
                ],
                imageUrl: qsanImage,
                imageAlt: 'QSAN Technology Logo NAS network attached storage',
            },
            {
                name: 'Asustor Inc.',
                description: 'Asustor Inc. specializes in innovative NAS solutions for personal and business data storage needs.',
                features: [
                    'User-friendly Interface',
                    'Advanced Data Backup Solutions',
                    'Extensive App Ecosystem',
                    'Energy-efficient Design',
                ],
                imageUrl: asustorImage,
                imageAlt: 'Asustor Inc. Logo NAS network attached storage',
            },
        ],
        []
    );

    useEffect(() => {
        // Set the dynamic page title and meta description
        document.title = 'Data Storage Products | Vipsee Infotech';
        const descriptionContent =
            'Explore reliable NAS solutions from QSAN Technology and Asustor Inc., offering enterprise-grade storage, advanced backup solutions, and scalable designs.';
        const keywordsContent =
            'NAS solutions,NAS, NAS box, Network Attached Storage, QSAN Technology, Asustor Inc., data storage, network attached storage, scalable storage, enterprise storage, data storage setup for business, business data storage, Vipsee Infotech, Mumbai';

        const metaDescription = document.querySelector('meta[name="description"]');
        const metaKeywords = document.querySelector('meta[name="keywords"]');

        if (metaDescription) {
            metaDescription.setAttribute('content', descriptionContent);
        } else {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = 'description';
            newMetaDescription.content = descriptionContent;
            document.head.appendChild(newMetaDescription);
        }

        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywordsContent);
        } else {
            const newMetaKeywords = document.createElement('meta');
            newMetaKeywords.name = 'keywords';
            newMetaKeywords.content = keywordsContent;
            document.head.appendChild(newMetaKeywords);
        }

        // Inject structured data (JSON-LD) for SEO
        const structuredData = {
            '@context': 'https://schema.org',
            '@type': 'ProductGroup',
            name: 'NAS Solutions',
            description: descriptionContent,
            brand: mobilityProducts.map((product) => ({
                '@type': 'Brand',
                name: product.name,
            })),
            offers: mobilityProducts.map((product) => ({
                '@type': 'Offer',
                url: window.location.href,
                description: product.description,
                name: product.name,
            })),
        };

        const scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.textContent = JSON.stringify(structuredData);
        document.head.appendChild(scriptTag);

        // Cleanup structured data script on unmount
        return () => {
            document.head.removeChild(scriptTag);
        };
    }, [mobilityProducts]);

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">
                        Data Storage Products (NAS - Network Attached Storage)
                    </h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mobilityProducts.map((product, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-center">{product.name}</h2>
                                <div className="flex justify-center mt-4">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.imageAlt}
                                        className="w-[250px] h-[150px] object-contain rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-center">{product.description}</p>
                                <h3 className="mt-4 font-semibold">Features:</h3>
                                <ul className="list-disc ml-8 mt-2">
                                    {product.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MobilityProductsDetails;
