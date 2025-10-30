import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
    BarChart3,
    PieChart,
    LineChart,
    Database,
    TrendingUp,
    Brain,
    CheckCircle2,
} from "lucide-react";

const DataAnalysis = () => {
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
                            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-cisco font-thin text-white mb-4 leading-tight"
                    >
                        Data <span className="font-normal text-[#007BFF]">Analysis</span> & Insights
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-gray-300 text-lg leading-relaxed"
                    >
                        Unlock the true potential of your business data. Our data analysis services help you
                        make informed, data-driven decisions with precision and clarity.
                    </motion.p>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 container">
                <h2 className="text-4xl text-center font-cisco font-thin mb-12">
                    Our <span className="text-[#007BFF] font-normal">Data Analysis Services</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <BarChart3 className="w-10 h-10 text-[#007BFF]" />,
                            title: "Business Intelligence Dashboards",
                            desc: "Interactive dashboards that visualize your KPIs, financials, and operations for better decision-making.",
                        },
                        {
                            icon: <PieChart className="w-10 h-10 text-[#007BFF]" />,
                            title: "Data Visualization",
                            desc: "Turn complex data into meaningful visuals using tools like Power BI, Tableau, and custom web dashboards.",
                        },
                        {
                            icon: <LineChart className="w-10 h-10 text-[#007BFF]" />,
                            title: "Predictive Data Modelling",
                            desc: "Leverage statistical models and AI-driven analytics to forecast trends and optimize business outcomes.",
                        },
                        {
                            icon: <Database className="w-10 h-10 text-[#007BFF]" />,
                            title: "Data Cleaning & Transformation",
                            desc: "Ensure your data is accurate, consistent, and ready for analysis through proper cleaning and structuring.",
                        },
                        {
                            icon: <TrendingUp className="w-10 h-10 text-[#007BFF]" />,
                            title: "Market & Performance Analysis",
                            desc: "Gain insights into market dynamics and customer behavior through in-depth performance analysis.",
                        },
                        {
                            icon: <Brain className="w-10 h-10 text-[#007BFF]" />,
                            title: "AI-Powered Insights",
                            desc: "Combine data analytics with AI to detect patterns, correlations, and anomalies that humans might miss.",
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
                        With a deep understanding of business intelligence and analytics,
                        we turn your data into actionable insights that accelerate growth.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Expert Data Analysts",
                            "Real-Time Dashboards",
                            "Accurate Predictive Models",
                            "Custom Reporting Solutions",
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
                            "url('https://images.unsplash.com/photo-1707813134548-55d580223de2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1110')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 container mx-auto px-6 md:px-16">
                    <h2 className="text-4xl font-cisco font-thin mb-4">
                        Transform Data into <span className="font-normal text-[#007BFF]">Powerful Insights</span>
                    </h2>
                    <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
                        Collaborate with <strong>Vaastman IT Solutions</strong> to build data-driven strategies that
                        improve efficiency and boost performance.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-[#007BFF] hover:bg-blue-700 transition-all text-white px-8 py-3 rounded-full font-medium"
                    >
                        Request a Data Consultation
                    </a>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default DataAnalysis;
