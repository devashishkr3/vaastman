import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Globe2,
    TrendingUp,
    LineChart,
    Megaphone,
    BarChart3,
    Target,
    CheckCircle2,
} from "lucide-react";

const DigitalMarketingPage = () => {
    return (
        <div className="font-cisco font-thin bg-background text-foreground">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center px-6 md:px-16 text-left">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Text content */}
                <div className="relative z-10 max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-cisco font-thin text-white mb-4 leading-tight"
                    >
                        Digital Marketing That <span className="font-normal text-blue-500">Drives Growth</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-gray-300 text-lg leading-relaxed"
                    >
                        Transform your online presence with our data-driven marketing solutions.
                        From SEO to performance ads — we help brands connect, engage, and grow.
                    </motion.p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 container">
                <h2 className="text-4xl text-center font-cisco font-thin mb-12">
                    Our <span className="text-blue-600 font-normal">Marketing Services</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <Globe2 className="w-10 h-10 text-blue-600" />,
                            title: "Search Engine Optimization (SEO)",
                            desc: "Boost your search visibility, drive organic traffic, and rank higher on Google with strategic SEO.",
                        },
                        {
                            icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
                            title: "Social Media Marketing",
                            desc: "Build your audience and grow your brand with engaging content and data-backed campaigns.",
                        },
                        {
                            icon: <LineChart className="w-10 h-10 text-blue-600" />,
                            title: "Performance Advertising",
                            desc: "Maximize ROI through targeted Meta and Google Ads campaigns tailored for your audience.",
                        },
                        {
                            icon: <Megaphone className="w-10 h-10 text-blue-600" />,
                            title: "Content Marketing",
                            desc: "Create meaningful content that connects with your customers and enhances brand authority.",
                        },
                        {
                            icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
                            title: "Analytics & Reporting",
                            desc: "Get real-time insights, campaign tracking, and performance metrics to make smarter decisions.",
                        },
                        {
                            icon: <Target className="w-10 h-10 text-blue-600" />,
                            title: "Lead Generation",
                            desc: "Generate high-quality leads that convert into customers with optimized funnels and strategies.",
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

            {/* Why Choose Us */}
            <section className="bg-blue-50 py-20">
                <div className="container text-center">
                    <h2 className="text-4xl font-cisco font-thin mb-6">
                        Why <span className="text-blue-600 font-normal">Choose Us?</span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                        We blend creativity, technology, and marketing intelligence to create powerful campaigns that deliver results.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Proven Results",
                            "Transparent Reporting",
                            "Customized Strategies",
                            "Dedicated Expert Team",
                        ].map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center gap-3"
                            >
                                <CheckCircle2 className="w-8 h-8 text-blue-600" />
                                <p className="text-gray-700">{point}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 text-center text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 container mx-auto px-6 md:px-16">
                    <h2 className="text-4xl font-cisco font-thin mb-4">
                        Ready to Grow with <span className="font-normal">Vaastman Digital?</span>
                    </h2>
                    <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
                        Let’s collaborate to build a marketing strategy that drives visibility, traffic, and measurable growth.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 transition-all text-white px-8 py-3 rounded-full font-medium"
                    >
                        Get Free Consultation
                    </a>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default DigitalMarketingPage;
