import { useEffect, useState } from 'react';
import { StatCard } from '@/components/StatCard';
import {
  Building2,
  Users,
  FileCheck,
  CalendarDays,
  GraduationCap,
} from 'lucide-react';
import {
  getColleges,
  getUsers,
  getCertificates,
  getUniversities,
} from '@/utils/localStorage';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    colleges: 0,
    universities: 0,
    employees: 0,
    certificates: 0,
  });

  const [certificateSummary, setCertificateSummary] = useState([]);

  // ✅ update dashboard data
  const updateDashboardData = () => {
    const colleges = getColleges() || [];
    const universities = getUniversities() || [];
    const users = getUsers() || [];
    const certificates = getCertificates() || [];

    const employees = users.filter((u) => u.role === 'employee');

    // group certificates by employee name + date
    const summaryMap = {};
    certificates.forEach((cert) => {
      const empName = cert.createdByName || 'Admin';// username
      const date = cert.createdAt
        ? new Date(cert.createdAt).toLocaleDateString()
        : 'Unknown Date';
      const key = `${empName}-${date}`;

      if (!summaryMap[key]) summaryMap[key] = { employee: empName, date, count: 0 };
      summaryMap[key].count += 1;
    });

    setCertificateSummary(Object.values(summaryMap));

    setStats({
      colleges: colleges.length,
      universities: universities.length,
      employees: employees.length,
      certificates: certificates.length,
    });
  };

  useEffect(() => {
    updateDashboardData();

    // listen for localStorage changes and custom event
    const handleStorageChange = (e) => {
      if (
        [
          'cms_colleges',
          'cms_users',
          'cms_certificates',
          'cms_universities',
        ].includes(e.key)
      ) updateDashboardData();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('localDataUpdated', updateDashboardData);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localDataUpdated', updateDashboardData);
    };
  }, []);

  const handleCardClick = (type) => {
    if (type === 'certificates') navigate('/admin/certificates-report');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the Certificate Management System admin panel
        </p>
      </div>

      {/* 4 Cards in 1 row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div onClick={() => handleCardClick('colleges')} className="cursor-pointer">
          <StatCard
            title="Total Colleges"
            value={stats.colleges}
            icon={Building2}
            description="Registered institutions"
          />
        </div>

        <div onClick={() => handleCardClick('universities')} className="cursor-pointer">
          <StatCard
            title="Total Universities"
            value={stats.universities}
            icon={GraduationCap}
            description="Registered universities"
          />
        </div>

        <div onClick={() => handleCardClick('employees')} className="cursor-pointer">
          <StatCard
            title="Total Employees"
            value={stats.employees}
            icon={Users}
            description="Active staff members"
          />
        </div>

        <div onClick={() => handleCardClick('certificates')} className="cursor-pointer">
          <StatCard
            title="Total Certificates"
            value={stats.certificates}
            icon={FileCheck}
            description="Issued certificates"
          />
        </div>
      </div>

      {/* Certificate Summary Table */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <CalendarDays className="w-6 h-6 text-primary" />
          Certificate Creation Summary
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="py-3 px-4 text-left">Employee Name</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Certificates Created</th>
              </tr>
            </thead>
            <tbody>
              {certificateSummary.length > 0 ? (
                certificateSummary.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-4">{item.employee}</td>
                    <td className="py-3 px-4">{item.date}</td>
                    <td className="py-3 px-4 font-medium text-primary">{item.count}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="py-4 text-center text-gray-500">
                    No certificate data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

