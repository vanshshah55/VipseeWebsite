import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

// Images
import netgearImage from '../../images/product images/netgear.png';
import tplinkImage from '../../images/product images/tplink.png';
import ciscoImage from '../../images/product images/cisco.png';
import ruijieImage from '../../images/product images/rujee.png';
import cambiumImage from '../../images/product images/cbn.webp';

const NetworkSecurityDetails = () => {
    const networkSecurityProducts = [
        {
            name: 'Cambium Networks',
            description: 'Cambium Networks provides scalable and secure Wi-Fi and broadband solutions for business and enterprise needs.',
            features: [
                'High-Performance Wireless',
                'Cloud-Managed Wi-Fi',
                'Flexible Deployment Options',
                'Exceptional Scalability',
            ],
            imageUrl: cambiumImage,},
        {
            name: 'Cisco Network ',
            description: 'Cisco provides enterprise-grade security to protect networks with integrated threat intelligence and secure access.',
            features: ['Zero-trust security', 'Advanced malware protection', 'Secure remote access', 'Integrated threat intelligence'],
            imageUrl: ciscoImage,
        },
        {
            name: 'Ruijie Network ',
            description: 'Ruijie offers reliable and cost-effective network security solutions for business and enterprise environments.',
            features: ['Advanced intrusion prevention', 'Network monitoring', 'Web filtering', 'Multi-layer security'],
            imageUrl: ruijieImage,
        },
        
        {
            name: 'Netgear',
            description: 'Netgear provides reliable and robust firewall solutions for small to medium-sized businesses.',
            features: ['Advanced network monitoring', 'Secure VPN connections', 'Web filtering', 'Multi-gig support'],
            imageUrl: netgearImage,
        },
        {
            name: 'TP-Link ',
            description: 'TP-Link delivers affordable and efficient firewall solutions for homes and small businesses.',
            features: ['Dual-band connectivity', 'Parental controls', 'Integrated malware protection', 'Cloud management'],
            imageUrl: tplinkImage,
        },
    ];

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Network Security Solutions</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {networkSecurityProducts.map((product, index) => (
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

export default NetworkSecurityDetails;
