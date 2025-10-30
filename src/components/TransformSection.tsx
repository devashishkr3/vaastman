import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TransformSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-blue-600  text-white py-24 px-6 flex flex-col items-center justify-center text-center">
            {/* Animated Background Orbs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-cisco font-thin leading-tight mb-6">
                    Ready to <span className="font-bold">Transform</span> Your Business?
                </h2>

                <p className="text-lg sm:text-xl font-cisco font-thin text-gray-200 mb-10 max-w-2xl mx-auto">
                    Empower your growth with intelligent IT solutions crafted to make your
                    business faster, smarter, and future-ready.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <HoverButton text="Get Started" variant="filled" />
                    <HoverButton text="Learn More" variant="outline" />
                </div>
            </motion.div>
        </section>
    );
};

interface HoverButtonProps {
    text: string;
    variant?: "filled" | "outline";
}

const HoverButton: React.FC<HoverButtonProps> = ({ text, variant = "filled" }) => {
    const baseStyle =
        "group relative inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-cisco font-thin transition-all duration-300 overflow-hidden";

    const styles =
        variant === "filled"
            ? "bg-white text-blue-700 hover:bg-blue-700 hover:text-white shadow-lg"
            : "border border-white text-white hover:bg-white hover:text-blue-700 shadow-md";

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`${baseStyle} ${styles}`}
        >
            <span>{text}</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.button>
    );
};

export default TransformSection;
