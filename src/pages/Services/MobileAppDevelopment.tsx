import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FaApple, FaAndroid, FaRocket, FaCloud, FaUserFriends, FaMobileAlt } from "react-icons/fa";
import { SiFlutter, SiReact, SiFirebase, SiKotlin, SiSwift, SiFigma } from "react-icons/si";

const MobileAppDevelopment = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-cisco font-thin">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative w-full h-[75vh] flex items-center justify-start px-6 md:px-16 text-left">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-3xl">
                    <h1 className="text-5xl md:text-6xl text-white leading-tight mb-4">
                        Transform Your Ideas into <span className="text-[#007BFF]">Engaging Mobile Experiences</span>
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
                        At <strong>Vaastman IT Solutions</strong>, we design and develop cutting-edge mobile apps that empower businesses, delight users, and deliver measurable impact.
                    </p>
                </div>
            </section>

            {/* SERVICES */}
            <section className="container mx-auto px-6 md:px-16 py-20">
                <h2 className="text-3xl font-semibold mb-12 text-gray-900 text-center">
                    Our <span className="text-[#007BFF]">Mobile App Development Services</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { icon: <FaAndroid className="text-4xl text-green-600" />, title: "Android App Development", desc: "We build secure, scalable, and fast Android apps that deliver exceptional user experiences." },
                        { icon: <FaApple className="text-4xl text-gray-900" />, title: "iOS App Development", desc: "Elegant, high-performing iOS apps tailored for seamless Apple ecosystem integration." },
                        { icon: <FaMobileAlt className="text-4xl text-blue-600" />, title: "Cross-Platform Apps", desc: "Develop once, deploy everywhere — using frameworks like React Native and Flutter." },
                        { icon: <FaCloud className="text-4xl text-indigo-600" />, title: "Cloud-Integrated Solutions", desc: "Enable scalability and real-time data access with cloud-powered app backends." },
                        { icon: <FaUserFriends className="text-4xl text-pink-500" />, title: "UI/UX & Prototype Design", desc: "Visually stunning and user-centered mobile experiences designed for impact." },
                        { icon: <FaRocket className="text-4xl text-blue-500" />, title: "App Launch & Support", desc: "From app store submission to maintenance — we ensure flawless performance post-launch." },
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="bg-gray-50 py-20 px-6 md:px-16">
                <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">
                    Why Choose Vaastman for Your Mobile App?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[
                        { title: "Business-Centric Approach", desc: "We build mobile solutions that align with your business objectives." },
                        { title: "User-First Design", desc: "Our apps are intuitive, engaging, and tailored for maximum user satisfaction." },
                        { title: "Latest Technologies", desc: "We use modern frameworks and cloud tools to ensure speed, scalability, and innovation." },
                        { title: "Agile Development", desc: "Faster delivery with iterative sprints and continuous collaboration with clients." },
                        { title: "Quality Assurance", desc: "Rigorous testing to ensure zero bugs, optimal performance, and flawless UX." },
                        { title: "Post-Launch Support", desc: "Continuous updates and 24/7 maintenance to keep your app ahead of competition." },
                    ].map((benefit, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border-l-4 border-[#007BFF] shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TECHNOLOGIES */}
            <section className="container mx-auto px-6 md:px-16 py-20">
                <h2 className="text-3xl font-semibold mb-12 text-gray-900 text-center">
                    Technologies We Use
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                    {[
                        { icon: <SiReact className="text-4xl text-sky-500 mx-auto mb-3" />, name: "React Native" },
                        { icon: <SiFlutter className="text-4xl text-blue-500 mx-auto mb-3" />, name: "Flutter" },
                        { icon: <SiSwift className="text-4xl text-red-500 mx-auto mb-3" />, name: "Swift" },
                        { icon: <SiKotlin className="text-4xl text-orange-600 mx-auto mb-3" />, name: "Kotlin" },
                        { icon: <SiFirebase className="text-4xl text-yellow-500 mx-auto mb-3" />, name: "Firebase" },
                        { icon: <SiFigma className="text-4xl text-purple-500 mx-auto mb-3" />, name: "Figma" },
                    ].map((tech, i) => (
                        <div key={i} className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all hover:bg-blue-50">
                            {tech.icon}
                            <p className="text-gray-800 font-medium">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 text-center text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 container mx-auto px-6 md:px-16">
                    <h2 className="text-4xl font-thin mb-4">
                        Let’s Create Your <span className="text-[#007BFF] font-normal">Mobile Future</span>
                    </h2>
                    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                        Partner with <strong>Vaastman IT Solutions</strong> to bring your mobile app vision to life — beautifully designed, powerfully built, and ready to make an impact.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-[#007BFF] hover:bg-blue-700 transition-all text-white px-8 py-3 rounded-full font-medium"
                    >
                        Get Started Today
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MobileAppDevelopment;
