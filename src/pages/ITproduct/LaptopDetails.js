import { useEffect, useMemo } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

// Images
import hpImage from '../../images/product images/hp.png';
import dellImage from '../../images/product images/Dell_Logo.png.png';
import lenovoImage from '../../images/product images/lenovo.jpg';
import asusImage from '../../images/product images/asus.png';

const LaptopDetails = () => {
    const laptopProducts = useMemo(
        () => [
            {
                name: 'HP',
                description: 'HP laptops offer reliable performance, sleek designs, and powerful features for personal and professional use.',
                features: ['Intel i5/i7 Processors', 'Long Battery Life', 'Durable Build', 'High-Resolution Displays'],
                imageUrl: hpImage,
                alt: 'HP Laptop showcasing sleek designs and reliable performance',
            },
            {
                name: 'DELL',
                description: 'Dell laptops provide cutting-edge technology, ergonomic designs, and outstanding performance for all workloads.',
                features: ['Premium Build Quality', 'Advanced Cooling System', 'Wide Display Options', 'Customizable Configurations'],
                imageUrl: dellImage,
                alt: 'Dell Laptop emphasizing cutting-edge technology and ergonomic designs',
            },
            {
                name: 'LENOVO',
                description: 'Lenovo laptops are known for their robust build quality, innovative features, and user-friendly designs.',
                features: ['Innovative TrackPoint', 'Flexible Yoga Series', 'Long-lasting Battery', 'Secure Boot Options'],
                imageUrl: lenovoImage,
                alt: 'Lenovo Laptop known for robust build quality and user-friendly features',
            },
            {
                name: 'ASUS',
                description: 'ASUS laptops deliver high-end gaming and productivity solutions with sleek aesthetics and powerful hardware.',
                features: ['Gaming and Creator Options', 'High Refresh Rate Displays', 'Fast SSDs', 'Dedicated GPU Models'],
                imageUrl: asusImage,
                alt: 'ASUS Laptop tailored for gaming and productivity with sleek aesthetics',
            },
        ],
        []
    );

    useEffect(() => {
        // Set SEO metadata dynamically
        document.title = 'Laptop/Desktops | Vipsee Infotech';
        document.querySelector('meta[name="description"]')?.setAttribute(
            'content',
            'Discover our range of laptops from top brands like HP, Dell, Lenovo, and ASUS, tailored for personal, Business, and everyday use.'
        );

        // Add meta keywords
        const metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = 'laptops, HP, Dell, Lenovo, ASUS, gaming laptops, professional laptops, affordable laptops, laptop features, computer, business laptops, laptop setup, Vipsee Infotech, Mumbai';
        document.head.appendChild(metaKeywords);

        // Add structured data
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Laptop/Desktops",
            "description": "Explore a range of laptops and desktops from HP, Dell, Lenovo, and ASUS tailored for personal, Business, and professional use.",
            "brand": laptopProducts.map(product => ({
                "@type": "Brand",
                "name": product.name,
                "description": product.description,
                "logo": product.imageUrl,
            })),
        };

        const scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.textContent = JSON.stringify(structuredData);
        document.head.appendChild(scriptTag);

        return () => {
            document.head.removeChild(scriptTag);
            document.head.removeChild(metaKeywords);
        };
    }, [laptopProducts]);

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Laptop/Desktops</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {laptopProducts.map((product, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-center">{product.name}</h2>
                                <div className="flex justify-center mt-4">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.alt}
                                        className="w-auto h-[150px] object-cover rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-center">{product.description}</p>
                                {/* Uncomment the features list if needed */}
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

export default LaptopDetails;
