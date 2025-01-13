import { useEffect, useMemo } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';

// Images
import epsonImage from '../../images/product images/epson.jpg';
import canonImage from '../../images/product images/canon.png';
import hpPrinterImage from '../../images/product images/hp.webp';

const PrinterDetails = () => {
    // Memoize the printerProducts array to avoid unnecessary re-creation
    const printerProducts = useMemo(
        () => [
            {
                name: 'Epson',
                description: 'Epson printers are known for their high-quality printing, eco-friendly features, and reliable performance.',
                features: ['EcoTank Technology', 'Wireless Printing', 'High Print Resolution', 'Low Power Consumption'],
                imageUrl: epsonImage,
                imageAlt: 'Epson printer ',
            },
            {
                name: 'Canon',
                description: 'Canon printers provide advanced imaging technologies, compact designs, and versatile printing solutions.',
                features: ['All-in-One Functionality', 'Fast Print Speeds', 'Mobile App Integration', 'Durable Build Quality'],
                imageUrl: canonImage,
                imageAlt: 'Canon printer ',
            },
            {
                name: 'HP',
                description: 'HP printers deliver efficient and reliable printing with innovative features for home and office use.',
                features: ['Instant Ink Support', 'Energy Efficient', 'High-Quality Photo Printing', 'Cloud Printing Support'],
                imageUrl: hpPrinterImage,
                imageAlt: 'HP printer',
            },
        ],
        []
    );

    // Memoize the structured data for SEO
    const structuredData = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Printers/Scanners",
        "description": "Reliable printing and scanning solutions from top brands like Epson, Canon, and HP.",
        "brand": printerProducts.map((product) => ({
            "@type": "Brand",
            "name": product.name,
        })),
        "offers": printerProducts.map((product) => ({
            "@type": "Offer",
            "name": product.name,
            "description": product.description,
        })),
    }), [printerProducts]);

    useEffect(() => {
        // Dynamically set meta tags
        document.title = 'Printers/Scanners | Vipsee Infotech';
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute('content', 'Discover Epson, Canon, and HP printers with high-quality printing, versatile features, and reliable performance.');
        document
            .querySelector('meta[name="keywords"]')
            ?.setAttribute('content', 'printers, scanners, Epson printers, Canon printers, HP printers, printing solutions, scanning solutions, business printers, business scanners, printers for business, printer service, Vipsee Infotech, Mumbai');

        // Add structured data for SEO
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script); // Cleanup to prevent duplicate script tags
        };
    }, [structuredData]); // Only re-run when structuredData changes

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Printers/Scanners</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {printerProducts.map((product, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-center">{product.name}</h2>
                                <div className="flex justify-center mt-4">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.imageAlt}
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

export default PrinterDetails;
