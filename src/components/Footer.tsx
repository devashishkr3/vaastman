import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 font-cisco font-thin pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-thin mb-4 text-blue-600">Vaastman</h3>
            <p className="text-gray-400 mb-6">
              Empowering businesses with innovative IT solutions, driving digital transformation and sustainable growth.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-transform transform hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", to: "/" },
                { name: "About Us", to: "/about" },
                { name: "Our Work", to: "/our-work" },
                { name: "Careers", to: "/career" },
                { name: "Contact", to: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Web Development", to: "/services/web-development" },
                { name: "Mobile App Development", to: "/services/mobile-app" },
                { name: "Cloud Solutions", to: "/services/cloud" },
                { name: "Cyber Security", to: "/services/cybersecurity" },
                { name: "AI & Automation", to: "/services/ai-automation" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Vaastman IT Solutions Pvt. Ltd., Patna, Bihar – 800001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-600 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a href="mailto:info@vaastman.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                  info@vaastman.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Vaastman. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
