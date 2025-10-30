// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Award, Shield, Users, FileCheck, ArrowRight } from 'lucide-react';
// import { Navbar } from '@/components/common/Navbar';
// import { Footer } from '@/components/common/Footer';

// const Home = () => {
//   const features = [
//     {
//       icon: Shield,
//       title: 'Admin Control',
//       description: 'Complete management of colleges, employees, and certificates',
//     },
//     {
//       icon: Users,
//       title: 'Employee Access',
//       description: 'Create and manage student certificates with ease',
//     },
//     {
//       icon: FileCheck,
//       title: 'Public Verification',
//       description: 'Students can verify and download certificates instantly',
//     },
//     {
//       icon: Award,
//       title: 'Secure System',
//       description: 'Role-based access control for maximum security',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-background">
//       <Navbar />

//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
//             <Award className="h-12 w-12 text-primary" />
//           </div>
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
//             Certificate Management System
//           </h1>
//           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//             A comprehensive platform for managing student certificates with role-based access for admins, employees, and public verification.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Link to="/admin/login">
//               <Button size="lg" className="shadow-lg hover:shadow-xl transition-all">
//                 Admin Login
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Link to="/employee/login">
//               <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all">
//                 Employee Login
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Link to="/certificate-corner">
//               <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all">
//                 Certificate Corner
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
//                 <CardContent className="p-6 text-center">
//                   <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
//                     <Icon className="h-8 w-8 text-primary" />
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//                   <p className="text-sm text-muted-foreground">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Info Section */}
//         <Card className="bg-gradient-to-r from-primary to-blue-600 text-white shadow-xl">
//           <CardContent className="p-8 text-center">
//             <h2 className="text-3xl font-bold mb-4">Default Admin Credentials</h2>
//             <p className="text-lg mb-6 opacity-90">
//               Get started with the system using these default credentials
//             </p>
//             <div className="bg-white/10 backdrop-blur rounded-lg p-6 inline-block">
//               <p className="text-left">
//                 <span className="font-semibold">Email:</span> admin@cms.com
//               </p>
//               <p className="text-left mt-2">
//                 <span className="font-semibold">Password:</span> admin123
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Home;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, Users, FileCheck, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import SliderdownBox from '@/components/SliderdownBox';
import AboutIntro from '@/components/AboutIntro';
import ServiceCard from '@/components/ServiceCard';
import TrustedBrands from '@/components/TrustedBrands';
import StatsCounter from '@/components/StatsCounter';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClientTestimonials from '@/components/ClientTestimonials';
import OurWork from '@/components/OurWork';
import TransformSection from '@/components/TransformSection';

const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-background">
      <Navbar />

      <HeroSlider />
      <SliderdownBox />
      <TrustedBrands />
      <AboutIntro />
      <ServiceCard />
      <StatsCounter />
      <WhyChooseUs />
      <OurWork />
      <ClientTestimonials />
      <TransformSection />

      <Footer />
    </div>
  );
};

export default Home;