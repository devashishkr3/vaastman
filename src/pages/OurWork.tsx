import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const OurWork: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [filter, setFilter] = useState("all");

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "web",
            description:
                "Full-stack e-commerce solution with payment integration and real-time inventory management.",
            longDescription:
                "Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, secure payment processing via Stripe, order management, and admin dashboard. Implemented real-time inventory updates and email notifications.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
            preview: "https://example.com/demo1",
            image:
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 2,
            title: "Healthcare Management System",
            category: "web",
            description:
                "HIPAA compliant patient management system with appointment scheduling.",
            longDescription:
                "Developed a secure healthcare system with patient record management, appointment scheduling, and telemedicine capabilities.",
            technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
            preview: "https://example.com/demo2",
            image:
                "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 3,
            title: "AI Analytics Dashboard",
            category: "ai",
            description: "Real-time data analytics with ML predictions and insights.",
            longDescription:
                "Created an advanced analytics dashboard using machine learning for predictive insights and data visualization.",
            technologies: ["Angular", "TensorFlow", "Python", "AWS"],
            preview: "https://example.com/demo3",
            image:
                "https://images.unsplash.com/photo-1661961110321-84f0a7f1f01b?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 4,
            title: "Mobile Banking App",
            category: "app",
            description: "Secure mobile banking app with biometric authentication.",
            longDescription:
                "Developed a full-featured mobile banking app with account management, fund transfers, bill payments, and biometric login.",
            technologies: ["React Native", "Firebase", "Redux"],
            preview: "https://example.com/demo4",
            image:
                "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 5,
            title: "Cloud Migration Project",
            category: "cloud",
            description: "Enterprise cloud migration to Azure with Kubernetes.",
            longDescription:
                "Migrated enterprise infrastructure to Azure using Docker, Kubernetes, CI/CD pipelines, and monitoring solutions.",
            technologies: ["Docker", "Kubernetes", "Azure", "Terraform"],
            preview: "https://example.com/demo5",
            image:
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 6,
            title: "Cybersecurity Platform",
            category: "security",
            description: "Threat detection and real-time monitoring system.",
            longDescription:
                "Built a cybersecurity platform for real-time threat detection, vulnerability scanning, and analytics dashboards.",
            technologies: ["Python", "Elasticsearch", "Kibana", "Redis"],
            preview: "https://example.com/demo6",
            image:
                "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=900&q=80",
        },
    ];

    const filteredProjects =
        filter === "all" ? projects : projects.filter((p) => p.category === filter);

    return (
        <div className="min-h-screen bg-white font-cisco font-thin text-gray-800">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[70vh] flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1920&q=80"
                    alt="Our Work Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-left text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin mb-4">
                        Our <span className="font-bold">Work</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl">
                        Showcasing our finest IT projects that drive innovation, growth, and success.
                    </p>
                </div>
            </section>

            {/* ===== MAIN CONTENT ===== */}
            <main className="pt-20 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">
                        Explore Our Projects
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        From cloud migrations to AI-powered systems — discover how we’ve
                        transformed businesses through technology.
                    </p>

                    {/* Filter Tabs */}
                    <Tabs defaultValue="all" className="mb-12" onValueChange={setFilter}>
                        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-6">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="web">Web</TabsTrigger>
                            <TabsTrigger value="app">Mobile</TabsTrigger>
                            <TabsTrigger value="cloud">Cloud</TabsTrigger>
                            <TabsTrigger value="ai">AI</TabsTrigger>
                            <TabsTrigger value="security">Security</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    {/* Project Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <Card
                                key={project.id}
                                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                            >
                                <div className="h-56 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <Button
                                            variant="outline"
                                            className="border-white text-blue-600 hover:bg-white hover:text-black"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </div>

                                <div className="p-6 text-left">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold text-xl">{project.title}</h3>
                                        <Badge variant="secondary" className="capitalize">
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <Badge key={i} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            {/* ===== PROJECT DETAILS MODAL ===== */}
            <Dialog
                open={selectedProject !== null}
                onOpenChange={() => setSelectedProject(null)}
            >
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-bold text-blue-600">
                            {selectedProject?.title}
                        </DialogTitle>
                    </DialogHeader>

                    {selectedProject && (
                        <div className="space-y-6">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-72 object-cover rounded-lg"
                            />

                            <p className="text-gray-600 leading-relaxed">
                                {selectedProject.longDescription}
                            </p>

                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-blue-600">
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech: string, i: number) => (
                                        <Badge key={i} className="bg-blue-600 text-white">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                                    <a
                                        href={selectedProject.preview}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Preview
                                    </a>
                                </Button>
                                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                                    Close
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
};

export default OurWork;
