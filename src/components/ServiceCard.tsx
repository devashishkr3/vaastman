

import React from "react";
import { Link } from "react-router-dom";
import { Globe, Smartphone, Cloud, Megaphone, Cpu, BarChart } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-10 h-10 text-white" />,
    title: "Web Development",
    path: "/services/web-development",
    desc: "Custom websites and web applications built with cutting-edge technologies.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-white" />,
    title: "Mobile App Development",
    path: "/services/mobile-app",
    desc: "Native and cross-platform mobile solutions for iOS and Android.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-white" />,
    title: "Cloud Solutions",
    path: "/services/cloud",
    desc: "Scalable cloud infrastructure and migration services for your business.",
  },
  {
    icon: <Megaphone className="w-10 h-10 text-white" />,
    title: "Digital Marketing",
    path: "/services/digital-marketing",
    desc: "Effective marketing strategies to grow your online presence.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-white" />,
    title: "AI & ML Solutions",
    path: "/services/ai-ml-solutions",
    desc: "Artificial intelligence and machine learning solutions to optimize operations.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-white" />,
    title: "Data Analysis",
    path: "/services/data-analysis",
    desc: "Analyze your data to gain insights and drive business decisions.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white text-center font-cisco font-thin">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-3">
        Our <span className="text-blue-600">Services</span>
      </h2>
      <p className="text-gray-500 mb-12">
        Comprehensive IT solutions tailored to meet your business needs
      </p>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className="group border border-gray-200 rounded-2xl p-8 shadow-md bg-white
              hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="relative w-14 h-14 flex items-center justify-center mx-auto mb-5 rounded-lg bg-blue-600
              transition-transform duration-500 group-hover:scale-110">
              <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition duration-500 bg-blue-600 rounded-lg"></div>
              <div className="relative z-10">{service.icon}</div>
            </div>

            {/* Title */}
            <h3 className="font-medium text-lg mb-2 text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm">{service.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;

