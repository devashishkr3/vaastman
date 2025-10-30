import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Send } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Career: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<any>(null);

    const positions = [
        {
            id: 1,
            title: "Frontend Developer",
            type: "Job",
            domain: "Web Development",
            description:
                "We are looking for a skilled frontend developer with React and Tailwind experience.",
            requirements: ["React", "Tailwind CSS", "TypeScript", "Git"],
            location: "Remote / Onsite",
            experience: "1-3 Years",
        },
        {
            id: 2,
            title: "UI/UX Designer Intern",
            type: "Internship",
            domain: "Design",
            description:
                "Join our design team as an intern and help build creative interfaces for web & mobile.",
            requirements: ["Figma", "Adobe XD", "Creativity", "Wireframing"],
            location: "Remote",
            duration: "3 Months",
        },
        {
            id: 3,
            title: "Digital Marketing Specialist",
            type: "Job",
            domain: "Marketing",
            description:
                "We need an experienced marketer to manage SEO, social media, and campaigns.",
            requirements: ["SEO", "Social Media", "Analytics", "Content Strategy"],
            location: "Patna, India",
            experience: "2-5 Years",
        },
        {
            id: 4,
            title: "Cybersecurity Intern",
            type: "Internship",
            domain: "Cybersecurity",
            description:
                "Work with our security team to learn penetration testing, threat analysis, and compliance.",
            requirements: ["Kali Linux", "Networking", "Nmap", "Wireshark"],
            location: "Remote",
            duration: "6 Months",
        },
    ];

    const jobTitles = positions.filter((p) => p.type === "Job").map((p) => p.title);
    const internshipTitles = positions.filter((p) => p.type === "Internship").map((p) => p.title);

    return (
        <div className="min-h-screen bg-white text-gray-800 font-cisco font-thin mt-10">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative h-[70vh] flex items-center text-left px-6 md:px-20"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 max-w-2xl text-white">
                    <h1 className="text-4xl md:text-5xl mb-4 font-thin">
                        Join the <span className="text-blue-600">Vaastman</span> Team
                    </h1>
                    <p className="text-lg md:text-xl">
                        Explore exciting career opportunities and internships with us.
                    </p>
                </div>
            </section>

            {/* Positions Section */}
            <main className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
                    Open Positions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {positions.map((role) => (
                        <Card
                            key={role.id}
                            className="p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-xl font-semibold text-blue-600">{role.title}</h3>
                                <Badge
                                    className={`px-3 py-1 text-sm font-semibold text-white rounded-full shadow-md ${role.type === "Job"
                                        ? "bg-gradient-to-r from-blue-600 to-indigo-500"
                                        : "bg-gradient-to-r from-blue-400 to-blue-600"
                                        }`}
                                >
                                    {role.type}
                                </Badge>
                            </div>

                            <p className="text-gray-600 mb-3">{role.description}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {role.requirements.map((req, i) => (
                                    <Badge
                                        key={i}
                                        variant="outline"
                                        className="text-blue-600 border-blue-600"
                                    >
                                        {req}
                                    </Badge>
                                ))}
                            </div>
                            <p className="text-sm mb-1">
                                <strong>Domain:</strong> {role.domain}
                            </p>
                            <p className="text-sm mb-1">
                                <strong>Location:</strong> {role.location}
                            </p>
                            {role.type === "Job" && (
                                <p className="text-sm mb-3">
                                    <strong>Experience:</strong> {role.experience}
                                </p>
                            )}
                            {role.type === "Internship" && (
                                <p className="text-sm mb-3">
                                    <strong>Duration:</strong> {role.duration}
                                </p>
                            )}

                            <Button
                                className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={() => {
                                    setSelectedRole(role);
                                    setOpen(true);
                                }}
                            >
                                Apply Now
                            </Button>
                        </Card>
                    ))}
                </div>
            </main>

            {/* Application Form Modal */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center text-blue-600">
                            Apply for {selectedRole?.title}
                        </DialogTitle>
                    </DialogHeader>

                    <Tabs
                        defaultValue={selectedRole?.type === "Internship" ? "internship" : "job"}
                        className="mt-4"
                    >
                        <TabsList className="grid grid-cols-2 w-full mb-4">
                            <TabsTrigger value="job">Job Application</TabsTrigger>
                            <TabsTrigger value="internship">Internship Application</TabsTrigger>
                        </TabsList>

                        {/* Job Tab */}
                        <TabsContent value="job">
                            <form className="space-y-4">
                                <div>
                                    <Label>Full Name</Label>
                                    <Input placeholder="Enter your name" required />
                                </div>
                                <div>
                                    <Label>Email Address</Label>
                                    <Input type="email" placeholder="example@email.com" required />
                                </div>
                                <div>
                                    <Label>Phone Number</Label>
                                    <Input type="tel" placeholder="+91 9876543210" required />
                                </div>
                                <div>
                                    <Label>Position Applying For</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Job Role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {jobTitles.map((title, i) => (
                                                <SelectItem key={i} value={title}>
                                                    {title}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Experience (Years)</Label>
                                    <Input type="number" placeholder="e.g. 2" />
                                </div>
                                <div>
                                    <Label>Upload Resume</Label>
                                    <Input type="file" accept=".pdf,.doc,.docx" />
                                </div>
                                <div>
                                    <Label>Why do you want to join Vaastman?</Label>
                                    <Textarea placeholder="Write a short answer..." />
                                </div>
                                <div className="pt-2 pb-4">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                        <Send className="w-4 h-4 mr-2" /> Submit Application
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>

                        {/* Internship Tab */}
                        <TabsContent value="internship">
                            <form className="space-y-4">
                                <div>
                                    <Label>Full Name</Label>
                                    <Input placeholder="Enter your name" required />
                                </div>
                                <div>
                                    <Label>Email Address</Label>
                                    <Input type="email" placeholder="example@email.com" required />
                                </div>
                                <div>
                                    <Label>Phone Number</Label>
                                    <Input type="tel" placeholder="+91 9876543210" required />
                                </div>
                                <div>
                                    <Label>Internship Domain</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Internship Role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {internshipTitles.map((title, i) => (
                                                <SelectItem key={i} value={title}>
                                                    {title}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>College / University</Label>
                                    <Input placeholder="Your institution name" />
                                </div>
                                <div>
                                    <Label>Upload Resume</Label>
                                    <Input type="file" accept=".pdf,.doc,.docx" />
                                </div>
                                <div>
                                    <Label>What do you expect to learn?</Label>
                                    <Textarea placeholder="Write your answer..." />
                                </div>
                                <div className="pt-2 pb-4">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                        <Send className="w-4 h-4 mr-2" /> Submit Application
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>
                    </Tabs>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
};

export default Career;
