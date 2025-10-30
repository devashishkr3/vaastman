import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, Globe, ShoppingCart, X } from "lucide-react";
import { FaGlobe, FaShoppingCart, FaCoffee } from "react-icons/fa";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tech: string[];
    benefits: string[];
    image: string;
    icon: React.ReactNode;
    liveLink: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Corporate Business Website",
        category: "Website Design & Development",
        description:
            "A sleek and professional website for a corporate brand with animated sections, SEO optimization, and fast-loading performance.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "SEO Optimization"],
        benefits: [
            "Improved brand credibility",
            "Faster loading & SEO-friendly",
            "Responsive and modern UI",
        ],
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4rK2xLQNuiKY7o5JyzVgAILwWIx_LYV_dA&s",
        icon: <Globe size={28} className="text-white" />,
        liveLink: "https://example.com/corporate-website",
    },
    {
        id: 2,
        title: "E-Commerce Store",
        category: "Online Shopping Platform",
        description:
            "A modern shopping website with secure payments, product filtering, and smooth UI built using React and Stripe.",
        tech: ["React", "Tailwind CSS", "Stripe", "React Router"],
        benefits: [
            "Seamless user experience",
            "Secure payment integration",
            "Efficient product management",
        ],
        image:
            "https://themefisher.com/blog/flipmart.webp",
        icon: <ShoppingCart size={28} className="text-white" />,
        liveLink: "https://example.com/ecommerce-store",
    },
    {
        id: 3,
        title: "Restaurant Ordering Website",
        category: "Food Ordering System",
        description:
            "An online ordering and reservation system with real-time menu updates, Google Maps integration, and smooth mobile UX.",
        tech: ["React", "Tailwind CSS", "Firebase", "Google Maps API"],
        benefits: [
            "Simplified ordering process",
            "Real-time menu updates",
            "Mobile-friendly design",
        ],
        image:
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1280&q=80",
        icon: <Coffee size={28} className="text-white" />,
        liveLink: "https://example.com/restaurant-website",
    },
];

const OurWork = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openModal = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <section className="py-20 bg-gray-50 font-cisco font-thin">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-cisco font-thin text-gray-900 mb-2">
                        Our <span className="text-blue-600 font-medium">Work</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Explore our latest website design and development projects
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="overflow-hidden group rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl bg-white transition-all duration-500"
                        >
                            <div className="relative h-64 md:h-72 overflow-hidden rounded-t-3xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 rounded-t-3xl"></div>
                                {/* Icon */}
                                <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-full shadow-md">
                                    {project.icon}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col justify-between h-52">
                                <div>
                                    <h3 className="text-xl font-cisco font-medium text-blue-600 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-700 font-cisco font-thin text-sm md:text-base leading-relaxed">
                                        {project.description.slice(0, 120)}...
                                    </p>
                                </div>

                                <Button
                                    onClick={() => openModal(project)}
                                    size="sm"
                                    className="mt-4 bg-blue-600 text-white font-cisco font-medium rounded-lg px-4 py-2 hover:shadow-lg hover:scale-105 transition-transform duration-300"
                                >
                                    View Details
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center z-50 px-4 py-8 overflow-y-auto">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full relative overflow-hidden animate-fadeIn">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition z-50"
                        >
                            <X size={22} className="text-gray-700" />
                        </button>

                        {/* Image */}
                        <div className="relative h-72 md:h-96">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover rounded-t-3xl"
                            />
                            <div className="absolute inset-0 bg-black/40 rounded-t-3xl"></div>
                            <h3 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-cisco font-medium text-white drop-shadow-lg">
                                {selectedProject.title}
                            </h3>
                        </div>

                        {/* Full Details */}
                        <div className="p-8 flex flex-col gap-4">
                            <p className="text-gray-700 font-cisco font-thin text-base md:text-lg">
                                <span className="font-medium text-gray-900">Category: </span>
                                {selectedProject.category}
                            </p>
                            <p className="text-gray-700 font-cisco font-thin text-base md:text-lg">
                                <span className="font-medium text-gray-900">Description: </span>
                                {selectedProject.description}
                            </p>
                            <p className="text-gray-700 font-cisco font-thin text-base md:text-lg">
                                <span className="font-medium text-gray-900">Tech Used: </span>
                                {selectedProject.tech.join(", ")}
                            </p>
                            <p className="text-gray-700 font-cisco font-thin text-base md:text-lg">
                                <span className="font-medium text-gray-900">Benefits: </span>
                                {selectedProject.benefits.join(", ")}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mt-4">
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-cisco font-medium hover:shadow-lg hover:scale-105 transition-all"
                                >
                                    🌐 Live Preview
                                </a>
                                <Button
                                    variant="outline"
                                    onClick={closeModal}
                                    className="border-gray-300 hover:bg-gray-100 font-cisco font-thin"
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default OurWork;
