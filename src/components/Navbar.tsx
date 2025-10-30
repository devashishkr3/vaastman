// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Award } from 'lucide-react';
// import logo from '../assets/vaastman.png';

// export const Navbar = () => {
//   return (
//     <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
//             <img src={logo} className='w-[80px] h-[40px]' alt="" />
//           </Link>

//           {/* Navigation Links */}
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <Link to="/admin/login">
//               <Button variant="ghost" size="sm">
//                 Admin Login
//               </Button>
//             </Link>
//             <Link to="/employee/login">
//               <Button variant="ghost" size="sm">
//                 Employee Login
//               </Button>
//             </Link>
//             <Link to="/certificate-corner">
//               <Button variant="default" size="sm">
//                 Certificate Corner
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };




import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/vaastman.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "Mobile App Development", path: "/services/mobile-app" },
    { name: "Cloud Solutions", path: "/services/cloud" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "AI & ML Solutions", path: "/services/ai-ml-solutions" },
    { name: "Data Analysis", path: "/services/data-analysis" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-cisco transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
    >
      <div className="container mx-auto px-4 font-cisco">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img src={logo} className="w-[70px] h-[30px]" alt="Vaastman" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-cisco font-thin text-[15px]">
            <NavItem to="/" label="Home" location={location} />
            <NavItem to="/about" label="About" location={location} />

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center transition-colors hover:text-primary focus:outline-none font-thin">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors font-thin"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavItem to="/our-work" label="Our Work" location={location} />
            <NavItem to="/career" label="Career" location={location} />
            <NavItem to="/contact" label="Contact" location={location} />

            <Link to="/certificate-corner">
              <Button variant="default" size="sm">
                Certificate Corner
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md animate-slide-down border-t">
            <div className="flex flex-col py-4 space-y-3 font-thin text-[15px]">
              <MobileLink
                to="/"
                label="Home"
                onClick={() => setIsOpen(false)}
              />
              <MobileLink
                to="/about"
                label="About"
                onClick={() => setIsOpen(false)}
              />

              {/* Mobile Services Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                  className="flex items-center justify-between px-2 py-2 text-gray-700 hover:text-primary transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${isServiceOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isServiceOpen && (
                  <div className="pl-4 flex flex-col space-y-2 mt-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => {
                          setIsOpen(false);
                          setIsServiceOpen(false);
                        }}
                        className="text-gray-600 hover:text-primary text-[14px] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <MobileLink
                to="/our-work"
                label="Our Work"
                onClick={() => setIsOpen(false)}
              />
              <MobileLink
                to="/career"
                label="Career"
                onClick={() => setIsOpen(false)}
              />
              <MobileLink
                to="/contact"
                label="Contact"
                onClick={() => setIsOpen(false)}
              />

              <Link
                to="/certificate-corner"
                className="px-2 mt-2"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full" size="sm">
                  Certificate Corner
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

/* -------------------- Helper Components -------------------- */
const NavItem = ({
  to,
  label,
  location,
}: {
  to: string;
  label: string;
  location: any;
}) => (
  <Link
    to={to}
    className={`transition-colors hover:text-primary font-thin ${location.pathname === to ? "text-primary" : "text-gray-700"
      }`}
  >
    {label}
  </Link>
);

const MobileLink = ({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="px-2 text-gray-700 hover:text-primary transition-colors"
  >
    {label}
  </Link>
);




