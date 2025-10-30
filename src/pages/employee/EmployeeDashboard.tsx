import { useEffect, useState } from 'react';
import { StatCard } from '@/components/StatCard';
import { FileCheck, Users } from 'lucide-react';
import { getCertificates } from '@/utils/localStorage';
import { useAuth } from '@/contexts/AuthContext';

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ total: 0, students: 0 });

  useEffect(() => {
    const certs = getCertificates().filter(c => c.createdBy === user?.id);
    setStats({ total: certs.length, students: new Set(certs.map(c => c.studentEmail)).size });
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard title="Certificates Created" value={stats.total} icon={FileCheck} />
        <StatCard title="Total Students" value={stats.students} icon={Users} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
