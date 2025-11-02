import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Home from "./pages/Home";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CollegeManagement from "./pages/admin/CollegeManagement";
import EmployeeManagement from "./pages/admin/EmployeeManagement";
import CertificateManagement from "./pages/admin/CertificateManagement";
import EmployeeLogin from "./pages/employee/EmployeeLogin";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import CreateCertificate from "./pages/employee/CreateCertificate";
import ViewCertificates from "./pages/employee/ViewCertificates";
import CertificateCorner from "./pages/public/CertificateCorner";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/Services/WebDevelopment";
import MobileAppDevelopment from "./pages/Services/MobileAppDevelopment";
import CloudSolutions from "./pages/Services/CloudSolutions";
import DigitalMarketingPage from "./pages/Services/digital-marketing";
import AIMLSolutions from "./pages/Services/ai-ml-solutions";
import DataAnalysis from "./pages/Services/data-analysis";
import UniversityManagement from "./pages/admin/UniversityManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-app" element={<MobileAppDevelopment />} />
            <Route path="/services/cloud" element={<CloudSolutions />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/ai-ml-solutions" element={<AIMLSolutions />} />
            <Route path="/services/data-analysis" element={<DataAnalysis />} />




            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/employee/login" element={<EmployeeLogin />} />
            <Route path="/certificate-corner" element={<CertificateCorner />} />
            <Route path="/admin" element={<ProtectedRoute allowedRole="ADMIN"><DashboardLayout /></ProtectedRoute>}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="colleges" element={<CollegeManagement />} />
              <Route path="university" element={<UniversityManagement />} />
              <Route path="employees" element={<EmployeeManagement />} />
              <Route path="certificates" element={<CertificateManagement />} />
            </Route>
            <Route path="/employee" element={<ProtectedRoute allowedRole="EMPLOYEE"><DashboardLayout /></ProtectedRoute>}>
              <Route path="dashboard" element={<EmployeeDashboard />} />
              <Route path="create" element={<CreateCertificate />} />
              <Route path="certificates" element={<ViewCertificates />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
