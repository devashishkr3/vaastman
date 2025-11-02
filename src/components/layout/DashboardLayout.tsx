import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  LayoutDashboard,
  Building2,
  Users,
  FileCheck,
  LogOut,
  Menu,
  X,
  PlusCircle,
  Eye,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import logo from '@/assets/vaastman.png'

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { role, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate(role === 'ADMIN' ? '/admin/login' : '/employee/login');
  };

  const adminMenu = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Colleges', path: '/admin/colleges', icon: Building2 },
    { name: 'University', path: '/admin/university', icon: GraduationCap },
    { name: 'Employees', path: '/admin/employees', icon: Users },
    { name: 'Certificates', path: '/admin/certificates', icon: FileCheck },
  ];

  const employeeMenu = [
    { name: 'Dashboard', path: '/employee/dashboard', icon: LayoutDashboard },
    { name: 'Create Certificate', path: '/employee/create', icon: PlusCircle },
    { name: 'View Certificates', path: '/employee/certificates', icon: Eye },
  ];

  const menuItems = role === 'ADMIN' ? adminMenu : employeeMenu;

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } bg-sidebar text-sidebar-foreground w-64 shadow-lg`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-8 px-2">
            {/* <h2 className="text-xl font-bold text-primary">CMS Portal</h2> */}
            <img src={logo} className='w-[60px] h-[40px] items-center ' alt="" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                    }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-4 left-0 right-0 px-3">
            <div className="bg-sidebar-accent rounded-lg p-4 mb-3">
              <p className="text-sm font-medium text-sidebar-foreground">{user?.name}</p>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
              <p className="text-xs text-primary mt-1 capitalize">{role}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="w-full"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300`}>
        {/* Top Navbar */}
        <header className="bg-card shadow-sm border-b sticky top-0 z-30">
          <div className="px-4 py-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Welcome back, <span className="font-semibold text-foreground">{user?.name}</span>
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};
