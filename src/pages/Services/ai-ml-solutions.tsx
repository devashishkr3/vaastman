import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Cpu,
    BrainCircuit,
    Database,
    Workflow,
    LineChart,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

const AIMLSolutions = () => {
    return (
        <div className="font-cisco font-thin bg-white text-gray-900">
            {/* Navbar */}
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-[80vh] flex items-center px-6 md:px-16 text-left">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Hero Text */}
                <div className="relative z-10 max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-cisco font-thin text-white mb-4 leading-tight"
                    >
                        AI & ML <span className="font-normal text-[#007BFF]">Solutions</span> for the Future
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-gray-300 text-lg leading-relaxed"
                    >
                        Empower your business with Artificial Intelligence and Machine Learning.
                        We build intelligent systems that automate, analyze, and accelerate growth.
                    </motion.p>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 container">
                <h2 className="text-4xl text-center font-cisco font-thin mb-12">
                    Our <span className="text-[#007BFF] font-normal">AI & ML Services</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <BrainCircuit className="w-10 h-10 text-[#007BFF]" />,
                            title: "Machine Learning Model Development",
                            desc: "Custom ML models that analyze data, predict trends, and improve decisions through intelligent automation.",
                        },
                        {
                            icon: <Cpu className="w-10 h-10 text-[#007BFF]" />,
                            title: "AI Integration & Automation",
                            desc: "Integrate AI into your workflow — from chatbots to predictive analytics — for efficiency and innovation.",
                        },
                        {
                            icon: <Database className="w-10 h-10 text-[#007BFF]" />,
                            title: "Data Engineering & Analytics",
                            desc: "We structure and optimize your data pipeline to unlock actionable insights through AI-powered analytics.",
                        },
                        {
                            icon: <Workflow className="w-10 h-10 text-[#007BFF]" />,
                            title: "Predictive Intelligence",
                            desc: "Predict business outcomes, detect anomalies, and improve decision-making using advanced ML algorithms.",
                        },
                        {
                            icon: <LineChart className="w-10 h-10 text-[#007BFF]" />,
                            title: "Computer Vision & NLP",
                            desc: "Empower applications with image recognition, object detection, and natural language understanding.",
                        },
                        {
                            icon: <ShieldCheck className="w-10 h-10 text-[#007BFF]" />,
                            title: "AI Security & Compliance",
                            desc: "Ensure your AI systems are safe, ethical, and compliant with data protection and governance standards.",
                        },
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="mb-5">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="bg-blue-50 py-20">
                <div className="container text-center">
                    <h2 className="text-4xl font-cisco font-thin mb-6">
                        Why <span className="text-[#007BFF] font-normal">Choose Us?</span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                        We combine deep AI expertise with a data-first approach to deliver reliable, scalable, and transformative solutions.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Experienced AI Engineers",
                            "End-to-End Automation",
                            "Data-Driven Insights",
                            "Custom Scalable Solutions",
                        ].map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center gap-3"
                            >
                                <CheckCircle2 className="w-8 h-8 text-[#007BFF]" />
                                <p className="text-gray-700">{point}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 text-center text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 container mx-auto px-6 md:px-16">
                    <h2 className="text-4xl font-cisco font-thin mb-4">
                        Innovate with <span className="font-normal text-[#007BFF]">AI & Machine Learning</span>
                    </h2>
                    <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
                        Partner with <strong>Vaastman IT Solutions</strong> to develop
                        intelligent systems that accelerate growth and innovation.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-[#007BFF] hover:bg-blue-700 transition-all text-white px-8 py-3 rounded-full font-medium"
                    >
                        Get a Free Consultation
                    </a>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AIMLSolutions;
