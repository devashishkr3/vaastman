import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutIntro: FC = () => {
    return (
        <section className="relative bg-white py-16 md:py-20 font-cisco font-thin overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-cisco font-medium tracking-tight leading-tight mb-6 text-gray-900"
                >
                    Empowering{" "}
                    <span className="bg-clip-text text-transparent bg-blue-600">
                        Businesses
                    </span>{" "}
                    <br className="hidden sm:block" />
                    with IT Solutions
                </motion.h1>

                {/* Animated Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-3xl text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-10 font-cisco font-thin"
                >
                    At <span className="font-semibold text-blue-600">Vaastman</span>, we craft digital solutions
                    that drive <span className="font-semibold text-blue-600">innovation</span>, ensure{" "}
                    <span className="font-semibold text-blue-600">security</span>, and enable{" "}
                    <span className="font-semibold text-blue-600">scalability</span> for your business growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-5 justify-center"
                >
                    {/* Outlined Button */}
                    <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 text-lg font-cisco font-thin
            relative overflow-hidden group transition-transform duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white">
                        <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity rounded-full"></span>
                        Learn More About Us
                    </button>

                    {/* Solid Button */}
                    <button className="px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-cisco font-thin
            flex items-center justify-center gap-2 hover:bg-blue-700 transition-all duration-300 shadow-md">
                        View Our Services <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>

            {/* Subtle Animated Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full blur-3xl"
            />
        </section>
    );
};

export default AboutIntro;
