import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// ✅ High-quality tech-themed blue backgrounds
const bgImages = [
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1920&q=80",
];

const HeroSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto background fade every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden font-cisco font-thin">
      {/* Fade Backgrounds */}
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 max-w-3xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-thin text-white mb-4 sm:mb-6 whitespace-nowrap leading-tight"
        >
          Empowering Digital Growth
          <span className="block text-blue-600 mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl">
            <TypeAnimation
              sequence={[
                "Web Development",
                2000,
                "App Development",
                2000,
                "Cloud Solutions",
                2000,
                "AI & Automation",
                2000,
                "Cyber Security",
                2000,
                "Digital Marketing",
                2000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl"
        >
          Transform your business with next-generation IT solutions built for
          performance, security, and scalability. Experience innovation that
          powers global tech growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <Button
            asChild
            size="lg"
            className="bg-blue-600 text-white text-base sm:text-lg font-thin hover:bg-blue-700 hover:shadow-lg transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3"
          >
            <Link to="/services">Explore Services</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-base sm:text-lg font-thin transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap gap-6 sm:gap-10 text-white"
        >
          <div>
            <h3 className="text-3xl sm:text-4xl font-light text-blue-600">
              <CountUp end={50} duration={3} />+
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1">Projects</p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-light text-blue-600">
              <CountUp end={95} duration={3} />%
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1">Success Rate</p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-light text-blue-600">
              <CountUp end={20} duration={3} />+
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1">Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlider;
