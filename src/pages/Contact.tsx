import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { toast } from 'sonner';
import { Footer } from "@/components/Footer";

// const API_URL = import.meta.env.VITE_API_URL;

const Contact: React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [subject, setSubject]=useState("");
    const [message, setMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name,email,message);
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/public/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();
            console.log("Server response:", data);
            // alert(data.message);
            setName("");
            setEmail("");
            setMsg("");
            toast.success(data.message);
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-cisco font-thin bg-gray-50 text-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative h-[70vh] flex items-center px-6 md:px-20"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Glass Text Card */}
                <div className="relative z-10 max-w-3xl text-left">
                    <h1 className="text-4xl md:text-5xl font-thin text-white mb-4">
                        Contact <span className="text-blue-600">Vaastman</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl">
                        Let’s collaborate and build innovative IT solutions together.
                    </p>
                </div>
            </section>

            {/* Contact Info + Form Section */}
            <main className="flex-1 container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Info Cards */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-blue-600">Get in Touch</h2>
                        <p className="text-gray-600">
                            Our team is available to discuss your projects, collaborations, or any questions you may have.
                        </p>
                    </div>

                    {/* Info Cards */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <div className="p-4 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full text-white">
                                <Phone />
                            </div>
                            <div>
                                <p className="font-semibold text-blue-600">Phone</p>
                                <p className="text-black">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <div className="p-4 bg-gradient-to-tr from-green-400 to-green-600 rounded-full text-white">
                                <Mail />
                            </div>
                            <div>
                                <p className="font-semibold text-blue-600">Email</p>
                                <p className="text-black">contact@vaastman.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                            <div className="p-4 bg-gradient-to-tr from-purple-400 to-purple-600 rounded-full text-white">
                                <MapPin />
                            </div>
                            <div>
                                <p className="font-semibold text-blue-600">Office</p>
                                <p className="text-black">
                                    Vaastman IT Solutions Pvt. Ltd., Patna, Bihar – 800001, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <Card className="p-8 shadow-xl bg-white/30 backdrop-blur-md border border-white/20 rounded-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Send Us a Message</h2>
                    <form
                        className="space-y-5"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <Label htmlFor="name" className="text-blue-600">Full Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="focus:border-blue-600 focus:ring focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <Label htmlFor="email" className="text-blue-600">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@email.com"
                                required
                                className="focus:border-blue-600 focus:ring focus:ring-blue-200"
                            />
                        </div>

                        {/* <div>
                            <Label htmlFor="subject" className="text-blue-600">Subject</Label>
                            <Input
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="e.g. Website Development Inquiry"
                                className="focus:border-blue-600 focus:ring focus:ring-blue-200"
                            />
                        </div> */}

                        <div>
                            <Label htmlFor="message" className="text-blue-600">Your Message</Label>
                            <Textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMsg(e.target.value)}
                                placeholder="Write your message here..."
                                rows={5}
                                required
                                className="focus:border-blue-600 focus:ring focus:ring-blue-200"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white"
                        >
                            <Send className="w-4 h-4 mr-2" /> Send Message
                        </Button>
                    </form>
                </Card>
            </main>

            {/* Map Section */}
            <section className="w-full h-[400px] px-6 mb-16 rounded-xl overflow-hidden shadow-xl">
                <iframe
                    title="Vaastman Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8284120374973!2d85.13756427459491!3d25.612677516752853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58434492efc5%3A0x1af7b0e018dfb5f2!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1698058549332!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    className="rounded-xl"
                ></iframe>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
