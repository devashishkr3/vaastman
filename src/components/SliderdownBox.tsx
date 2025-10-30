import { FC } from "react";
import { Cpu, Headphones, Settings } from "lucide-react";

const ServiceBoxes: FC = () => {
    const services = [
        {
            icon: <Cpu size={42} className="text-blue-600 mx-auto mb-4" />,
            title: "Innovative IT Solutions",
            description:
                "Empowering businesses with smart digital tools and automation to boost efficiency, performance, and long-term success.",
            color: "white",
        },
        {
            icon: <Headphones size={42} className="text-blue-600 mx-auto mb-4" />,
            title: "Reliable Tech Support",
            description:
                "Offering 24/7 technical support and maintenance to ensure your systems stay secure, stable, and optimized.",
            color: "white",
        },
        {
            icon: <Settings size={42} className="text-white mx-auto mb-4" />,
            title: "Custom IT Solutions",
            description:
                "Tailored software and digital transformation services designed to meet your business goals with precision and innovation.",
            color: "blue",
            button: true,
        },
    ];

    return (
        <section className="relative bg-white py-28 font-cisco font-thin ">
            {/* Overlap effect */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 mt-[-190px]">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`
              rounded-2xl p-8 text-center shadow-lg transition-all duration-500 
              hover:-translate-y-2 hover:shadow-2xl
              ${service.color === "blue"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-800"
                            }
            `}
                    >
                        {service.icon}
                        <h3
                            className={`text-xl font-cisco font-medium mb-3 ${service.color === "blue" ? "text-white" : "text-gray-800"
                                }`}
                        >
                            {service.title}
                        </h3>
                        <p
                            className={`text-sm mb-6 ${service.color === "blue" ? "text-blue-100" : "text-gray-600"
                                }`}
                        >
                            {service.description}
                        </p>

                        {service.button && (
                            <button className="bg-white text-blue-600 font-cisco font-thin px-5 py-2 rounded-md shadow-md hover:bg-blue-50 transition">
                                Request Solutions →
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceBoxes;
