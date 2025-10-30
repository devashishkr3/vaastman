import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Feedback = {
    name: string;
    image: string;
    rating: number;
    feedback: string;
    role?: string;
};

// 13 Client Feedbacks
const feedbacks: Feedback[] = [
    {
        name: "Aarav Sharma",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        feedback:
            "Absolutely amazing experience! The attention to detail and support exceeded our expectations.",
        role: "CEO, TechNova",
    },
    {
        name: "Riya Patel",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        feedback:
            "Highly professional team! The UI/UX they delivered was modern, clean, and super responsive.",
        role: "Marketing Head, Brandify",
    },
    {
        name: "Aditya Verma",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        feedback:
            "They truly understand client needs. Their quality of work and support is top-notch!",
        role: "Founder, WebStack",
    },
    {
        name: "Sneha Kapoor",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
        feedback:
            "I loved the collaboration process. They were quick, smart, and very creative!",
        role: "Product Manager, Creatify",
    },
    {
        name: "Karan Mehta",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        rating: 4,
        feedback:
            "The design was perfect, modern and exactly what we needed for our brand.",
        role: "Designer, PixelWorks",
    },
    {
        name: "Anjali Singh",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        rating: 5,
        feedback: "Excellent communication and timely delivery. Highly recommended!",
        role: "Project Manager, InnovateX",
    },
    {
        name: "Rohit Kumar",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
        rating: 5,
        feedback: "Their work quality is unmatched. Truly a premium experience.",
        role: "CTO, DevHub",
    },
    {
        name: "Priya Sharma",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 4,
        feedback: "Great team and amazing support throughout the project.",
        role: "Business Analyst, NextGen",
    },
    {
        name: "Vikram Singh",
        image: "https://randomuser.me/api/portraits/men/77.jpg",
        rating: 5,
        feedback: "Creative, reliable, and professional. Perfect experience overall.",
        role: "Founder, StartX",
    },
    {
        name: "Nisha Jain",
        image: "https://randomuser.me/api/portraits/women/11.jpg",
        rating: 5,
        feedback: "They delivered beyond expectations. Highly satisfied!",
        role: "CEO, BrightTech",
    },
    {
        name: "Manish Verma",
        image: "https://randomuser.me/api/portraits/men/88.jpg",
        rating: 4,
        feedback: "Very skilled and prompt. Loved the UI/UX design.",
        role: "Lead Designer, DesignPro",
    },
    {
        name: "Tanya Mehra",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        rating: 5,
        feedback: "Professional, creative, and always on time. Excellent work!",
        role: "Marketing Head, BuzzTech",
    },
    {
        name: "Sameer Gupta",
        image: "https://randomuser.me/api/portraits/men/99.jpg",
        rating: 5,
        feedback: "Absolutely loved the service. Premium quality from start to end.",
        role: "CEO, PrimeSoft",
    },
];

const FeedbackCard: React.FC<Feedback> = ({ name, image, rating, feedback, role }) => (
    <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
    >
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500 shadow-md mb-4">
            <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
        {role && <p className="text-sm text-gray-500 mb-2">{role}</p>}
        <div className="flex justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={18}
                    className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
            ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">
            “{feedback}”
        </p>
    </motion.div>
);

const ClientFeedbackCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);

    // Auto-slide every 20 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % feedbacks.length);
        }, 20000);
        return () => clearInterval(interval);
    }, []);

    // Desktop: Show 3 cards in carousel style
    const getDesktopSlides = () => {
        let slides = [];
        for (let i = 0; i < 3; i++) {
            slides.push(feedbacks[(index + i) % feedbacks.length]);
        }
        return slides;
    };

    return (
        <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 py-16 px-4">
            <h2 className="text-3xl md:text-4xl font-cisco font-thin text-center text-gray-900 dark:text-white mb-10">
                What Our <span className="text-blue-600 font-medium">Clients Say</span>
            </h2>

            {/* Desktop & Tablet */}
            <div className="hidden md:flex justify-center gap-6 max-w-6xl mx-auto">
                {getDesktopSlides().map((fb, i) => (
                    <FeedbackCard key={i} {...fb} />
                ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative max-w-sm mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <FeedbackCard {...feedbacks[index]} />
                    </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4">
                    {feedbacks.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-blue-600 scale-110" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientFeedbackCarousel;
