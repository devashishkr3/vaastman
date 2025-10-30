import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FaLaptopCode, FaUsersCog, FaLightbulb, FaChartLine } from "react-icons/fa";

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-cisco font-thin text-gray-800">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[70vh] flex items-center">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
                    alt="About Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Text Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-left text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin mb-4">
                        About <span className="font-bold">Vaastman</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl">
                        Empowering businesses through smart, scalable, and secure IT solutions.
                    </p>
                </div>
            </section>

            {/* ===== WHO WE ARE ===== */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-thin text-blue-600 mb-6">Who We Are</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Vaastman is a trusted IT solutions company focused on redefining how
                        businesses operate in the digital age. Our team of experts designs
                        technology-driven strategies that align with your business goals.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From startups to large enterprises, we build scalable, secure, and
                        future-ready digital solutions to help organizations achieve long-term success.
                    </p>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
                        alt="Our Team"
                        className="rounded-2xl shadow-lg w-full"
                    />
                </div>
            </section>

            {/* ===== MISSION & VISION ===== */}
            <section className="bg-gray-50 py-20 px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Mission & Vision</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        Our mission is to simplify technology for every business. We envision
                        a world where innovation drives progress — making companies smarter,
                        faster, and more connected.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                        <FeatureCard
                            icon={<FaLaptopCode size={30} />}
                            title="Software Development"
                            text="Building secure and scalable software for every business challenge."
                        />
                        <FeatureCard
                            icon={<FaUsersCog size={30} />}
                            title="IT Consulting"
                            text="Providing expert insights to help you make smart tech decisions."
                        />
                        <FeatureCard
                            icon={<FaLightbulb size={30} />}
                            title="Innovation"
                            text="Turning bold ideas into next-generation digital products."
                        />
                        <FeatureCard
                            icon={<FaChartLine size={30} />}
                            title="Business Growth"
                            text="Empowering sustainable growth with cutting-edge IT strategies."
                        />
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="bg-blue-600 text-white text-center py-16 px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Transform Your Business with Vaastman?
                </h2>
                <p className="max-w-2xl mx-auto mb-8 text-lg">
                    Let’s collaborate and create digital solutions that drive innovation,
                    efficiency, and measurable success.
                </p>
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300">
                    Contact Us
                </button>
            </section>

            <Footer />
        </div>
    );
};

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, text }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 text-center">
            <div className="flex justify-center mb-4 text-blue-600">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{text}</p>
        </div>
    );
};

export default About;
