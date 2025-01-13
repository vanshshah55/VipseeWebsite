import { useEffect, useMemo } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

// Images
import netgearImage from '../../images/product images/netgear.png';
import tplinkImage from '../../images/product images/tplink.png';
import ciscoImage from '../../images/product images/cisco.png';
import ruijieImage from '../../images/product images/rujee.png';
import cambiumImage from '../../images/product images/cbn.webp';

const NetworkSecurityDetails = () => {
    const networkSecurityProducts = useMemo(
        () => [
            {
                name: 'Cambium Networks',
                description: 'Cambium Networks delivers scalable and secure Wi-Fi and broadband solutions, offering high-performance connectivity for both indoor and outdoor environments.',
                features: [
                    'High-Performance Wireless',
                    'Cloud-Managed Wi-Fi',
                    'Flexible Deployment Options',
                    'Exceptional Scalability',
                ],
                imageUrl: cambiumImage,
                alt: 'Cambium Networks product showcasing high-performance wireless solutions',
            },
            {
                name: 'Cisco Network',
                description: 'Cisco provides enterprise-grade security to protect networks with integrated threat intelligence and secure access.',
                features: ['Zero-trust security', 'Advanced malware protection', 'Secure remote access', 'Integrated threat intelligence'],
                imageUrl: ciscoImage,
                alt: 'Cisco Network product highlighting enterprise-grade security features',
            },
            {
                name: 'Ruijie Network',
                description: 'Ruijie provides advanced indoor networking solutions tailored for high-speed, secure, and efficient connectivity in enterprise environments.',
                features: ['Advanced intrusion prevention', 'Network monitoring', 'Web filtering', 'Multi-layer security'],
                imageUrl: ruijieImage,
                alt: 'Ruijie Network product showcasing indoor networking solutions',
            },
            {
                name: 'Netgear',
                description: 'Netgear provides reliable and robust Wi-Fi solutions and network switches for seamless connectivity in small to medium-sized businesses.',
                features: ['Advanced network monitoring', 'Secure VPN connections', 'Web filtering', 'Multi-gig support'],
                imageUrl: netgearImage,
                alt: 'Netgear product featuring Wi-Fi solutions for small businesses',
            },
            {
                name: 'TP-Link',
                description: 'TP-Link offers affordable and efficient Wi-Fi and network switch solutions, designed for both home and small business environments.',
                features: ['Dual-band connectivity', 'Parental controls', 'Integrated malware protection', 'Cloud management'],
                imageUrl: tplinkImage,
                alt: 'TP-Link product offering affordable Wi-Fi solutions for home and business use',
            },
        ],
        []
    );

    useEffect(() => {
        // Set SEO metadata dynamically
        document.title = 'Networking Products | Vipsee Infotech';
        document.querySelector('meta[name="description"]')?.setAttribute(
            'content',
            'Explore a range of advanced networking products including Cambium Networks, Cisco, Ruijie, Netgear, and TP-Link, tailored for high-performance connectivity and security.'
        );

        // Add meta keywords
        const metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = 'Cambium wifi, routers,switches, networking switch, enterprise wifi solution, wifi setup, lan wan setup , lan setup, networking products, Cambium Networks, Cisco, Ruijie, Netgear, TP-Link, Wi-Fi solutions, network security, Vipsee Infotech, Mumbai';
        document.head.appendChild(metaKeywords);

        // Add structured data
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Networking Products",
            "description": "Explore advanced networking products tailored for secure and scalable connectivity.",
            "brand": networkSecurityProducts.map(product => ({
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
    }, [networkSecurityProducts]);

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Networking Products</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {networkSecurityProducts.map((product, index) => (
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

export default NetworkSecurityDetails;
