import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaSearch, FaTools, FaChartLine } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiAmazon, SiTypescript, SiDocker, SiPostgresql } from "react-icons/si";
import { FaShieldAlt, FaBolt, FaLightbulb } from "react-icons/fa";

const WebDevelopment = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-cisco font-thin">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative w-full h-[75vh] flex items-center justify-start px-6 md:px-16 text-left">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://cdn.pixabay.com/photo/2024/05/21/19/57/computer-8779040_640.jpg')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-thin text-white leading-tight mb-4">
                        Build Digital Experiences That <span className="text-[#007BFF]">Inspire</span>
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
                        At <strong>Vaastman IT Solutions</strong>, we craft digital journeys that elevate your brand, engage users, and drive growth.
                    </p>
                </div>
            </section>

            {/* OUR SERVICES */}
            <section className="container mx-auto px-6 md:px-16 py-20">
                <h2 className="text-3xl font-semibold mb-12 text-gray-900 text-center">
                    Our <span className="text-[#007BFF]">Web Development Expertise</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaLaptopCode className="text-4xl text-[#007BFF]" />,
                            title: "Custom Web Development",
                            desc: "Tailor-made, scalable, and high-performance websites aligned with your business goals.",
                        },
                        {
                            icon: <FaMobileAlt className="text-4xl text-[#007BFF]" />,
                            title: "Responsive Design",
                            desc: "Flawless experiences across all screen sizes and devices for a seamless user journey.",
                        },
                        {
                            icon: <FaSearch className="text-4xl text-[#007BFF]" />,
                            title: "SEO Optimization",
                            desc: "Clean structure and optimized performance to enhance your visibility and ranking.",
                        },
                        {
                            icon: <FaTools className="text-4xl text-[#007BFF]" />,
                            title: "Maintenance & Support",
                            desc: "Reliable post-launch support and regular updates to ensure smooth functionality.",
                        },
                        {
                            icon: <FaRocket className="text-4xl text-[#007BFF]" />,
                            title: "Performance Enhancement",
                            desc: "Lightning-fast loading times and efficient architectures designed for speed and reliability.",
                        },
                        {
                            icon: <FaChartLine className="text-4xl text-[#007BFF]" />,
                            title: "Analytics & Reporting", // New service
                            desc: "Track, analyze, and optimize your website performance with comprehensive analytics tools.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-6 md:px-16 py-20">
                <h2 className="text-3xl font-semibold mb-12 text-gray-900 text-center">
                    Why Choose <span className="text-[#007BFF]">Vaastman IT Solutions</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <FaLaptopCode className="text-[#007BFF] text-4xl" />, title: "Modern & Scalable Web Solutions", desc: "We create websites that grow with your business using modern technologies." },
                        { icon: <FaBolt className="text-[#007BFF] text-4xl" />, title: "High Performance & Fast Loading", desc: "Optimized for speed, ensuring smooth user experiences on all devices." },
                        { icon: <FaShieldAlt className="text-[#007BFF] text-4xl" />, title: "Secure & Reliable Platforms", desc: "Your data and applications are protected with industry-standard security measures." },
                        { icon: <FaLightbulb className="text-[#007BFF] text-4xl" />, title: "Expert Design & UX Consultation", desc: "Engaging interfaces and intuitive user experiences tailored to your brand." },
                        { icon: <FaChartLine className="text-[#007BFF] text-4xl" />, title: "Analytics & Continuous Improvement", desc: "We track performance and optimize continuously to boost results." },
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col items-start">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TECHNOLOGIES USED */}
            <section className="container mx-auto px-6 md:px-16 py-20">
                <h2 className="text-3xl font-semibold mb-12 text-gray-900 text-center">
                    Technologies We Work With
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                    {[
                        { icon: <SiReact className="text-4xl text-[#007BFF] mx-auto mb-3" />, name: "React" },
                        { icon: <SiNextdotjs className="text-4xl text-gray-900 mx-auto mb-3" />, name: "Next.js" },
                        { icon: <SiNodedotjs className="text-4xl text-green-600 mx-auto mb-3" />, name: "Node.js" },
                        { icon: <SiMongodb className="text-4xl text-green-500 mx-auto mb-3" />, name: "MongoDB" },
                        { icon: <SiPostgresql className="text-4xl text-blue-700 mx-auto mb-3" />, name: "PostgreSQL" },
                        { icon: <SiTailwindcss className="text-4xl text-sky-500 mx-auto mb-3" />, name: "Tailwind CSS" },
                        { icon: <SiAmazon className="text-4xl text-orange-500 mx-auto mb-3" />, name: "AWS" },
                        { icon: <SiTypescript className="text-4xl text-[#007BFF] mx-auto mb-3" />, name: "TypeScript" },
                        { icon: <SiDocker className="text-4xl text-blue-400 mx-auto mb-3" />, name: "Docker" },
                    ].map((tech, i) => (
                        <div
                            key={i}
                            className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all hover:bg-blue-50"
                        >
                            {tech.icon}
                            <p className="text-gray-800 font-medium">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 text-center text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 container mx-auto px-6 md:px-16">
                    <h2 className="text-4xl font-thin mb-4">
                        Let’s Build Something <span className="text-[#007BFF] font-normal">Extraordinary</span>
                    </h2>
                    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                        Connect with <strong>Vaastman IT Solutions</strong> today and bring your digital vision to life with our expert web development team.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-[#007BFF] hover:bg-blue-700 transition-all text-white px-8 py-3 rounded-full font-medium"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WebDevelopment;
