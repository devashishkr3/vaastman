import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    FaCloud,
    FaLock,
    FaServer,
    FaCogs,
    FaChartLine,
    FaSyncAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const CloudSolutions = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-cisco font-thin">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-[80vh] flex items-center px-6 md:px-20 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-thin text-white mb-4 leading-tight"
                    >
                        Cloud Solutions for the{" "}
                        <span className="text-blue-600 font-normal">Modern Era</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg text-gray-200 max-w-2xl leading-relaxed"
                    >
                        Scalable, secure, and future-ready cloud infrastructure — designed
                        to empower your business transformation.
                    </motion.p>
                </div>
            </section>

            {/* CORE SERVICES */}
            <section className="container mx-auto px-6 md:px-16 py-20">
                <h2 className="text-3xl md:text-4xl font-thin mb-12 text-center text-gray-900">
                    Our <span className="text-blue-600 font-normal">Core Cloud Services</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: FaCloud,
                            title: "Cloud Migration",
                            desc: "Effortless transition with zero downtime.",
                        },
                        {
                            icon: FaLock,
                            title: "Cloud Security",
                            desc: "Multi-layered protection & compliance.",
                        },
                        {
                            icon: FaServer,
                            title: "Infrastructure Management",
                            desc: "Auto-scaling & real-time monitoring.",
                        },
                        {
                            icon: FaCogs,
                            title: "DevOps & Automation",
                            desc: "CI/CD pipelines & automation tools.",
                        },
                        {
                            icon: FaSyncAlt,
                            title: "Backup & Recovery",
                            desc: "Continuous backups & disaster recovery.",
                        },
                        {
                            icon: FaChartLine,
                            title: "Cloud Optimization",
                            desc: "Boost performance & reduce costs.",
                        },
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{
                                y: -6,
                                boxShadow: "0 15px 25px rgba(0,0,0,0.08)",
                            }}
                            transition={{ type: "spring", stiffness: 180 }}
                            className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-blue-600/40 transition-all text-center"
                        >
                            <div className="mb-5 flex justify-center">
                                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full shadow-md">
                                    <service.icon className="text-3xl text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="bg-gray-50 py-20 px-6 md:px-16">
                <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-gray-900">
                    Why Choose <span className="text-blue-600">Vaastman Cloud</span>?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Business-Focused",
                            desc: "Solutions aligned with your business goals.",
                        },
                        {
                            title: "Secure & Compliant",
                            desc: "Enterprise-grade security and compliance.",
                        },
                        {
                            title: "Scalable Architecture",
                            desc: "Grow seamlessly without limits.",
                        },
                        {
                            title: "Automation & DevOps",
                            desc: "Streamlined operations with latest tools.",
                        },
                        {
                            title: "24/7 Support",
                            desc: "Continuous assistance and monitoring.",
                        },
                        {
                            title: "Optimized Performance",
                            desc: "Cost-efficient & high-performance solutions.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white p-8 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 text-center text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 container mx-auto px-6 md:px-16">
                    <h2 className="text-4xl md:text-5xl font-thin mb-4">
                        Ready to{" "}
                        <span className="text-blue-600 font-normal">
                            Take Your Business to the Cloud?
                        </span>
                    </h2>
                    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                        Partner with <strong>Vaastman IT Solutions</strong> to build a
                        secure, scalable, and intelligent cloud infrastructure.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 transition-all text-white px-10 py-3 rounded-full font-medium shadow-md"
                    >
                        Get a Free Consultation
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CloudSolutions;
