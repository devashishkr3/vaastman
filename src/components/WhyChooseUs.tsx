import React from "react";
import { Headphones, Zap, Globe2, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: <Globe2 size={32} className="text-white" />,
        title: "Trusted by Global Businesses",
        description: "Over 200+ companies worldwide rely on our expertise.",
    },
    {
        icon: <Headphones size={32} className="text-white" />,
        title: "24/7 Dedicated Support",
        description: "Round-the-clock assistance for all your IT needs.",
    },
    {
        icon: <Zap size={32} className="text-white" />,
        title: "Innovative Technology Stack",
        description: "Latest tools and frameworks for optimal performance.",
    },
    {
        icon: <ShieldCheck size={32} className="text-white" />,
        title: "Scalable & Secure Solutions",
        description: "Built to grow with your business securely.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-gray-50 font-cisco font-thin">
            {/* Heading */}
            <div className="text-center mb-14 px-6">
                <h2 className="text-4xl md:text-5xl font-cisco font-thin text-gray-900">
                    Why Choose{" "}
                    <span className="text-blue-600 font-medium">Our Services</span>
                </h2>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-8 bg-white shadow-md rounded-2xl border border-gray-200
              hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                    >
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-600 p-4 rounded-full shadow-md transform transition duration-500 hover:scale-110">
                                {feature.icon}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-cisco font-medium mb-2 text-gray-900 text-center">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-700 text-center text-sm sm:text-base font-cisco font-thin">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
