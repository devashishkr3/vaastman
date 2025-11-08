import { useEffect, useState } from 'react';
import { StatCard } from '@/components/StatCard';
import { FileCheck, Users } from 'lucide-react';
import { getCertificates } from '@/utils/localStorage';
import { useAuth } from '@/contexts/AuthContext';

const url=import.meta.env.VITE_API_URL;
const refreshToken=localStorage.getItem("refreshToken");


const EmployeeDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ certificatesIssued: 0, totalStudents: 0 });


  const updateDashboard = async () => {
    try {
      const response = await fetch(`${url}/api/v1/employee/dashboard`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to get data:", errorData);
        return;
      }


      const result = await response.json();

      setStats({
        certificatesIssued:result.data.certificatesIssued,
        totalStudents:result.data.totalStudents
      });


      console.log("Dashboard data updated successfully:", result);
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  }


  useEffect(() => {
    // const certs = getCertificates().filter(c => c.createdBy === user?.id);
    // setStats({ total: certs.length, students: new Set(certs.map(c => c.studentEmail)).size });

    updateDashboard();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard title="Certificates Created" value={stats.certificatesIssued} icon={FileCheck} />
        <StatCard title="Total Students" value={stats.totalStudents} icon={Users} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
