// import { useState, useEffect } from 'react';
// import { Card } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { getCertificates } from '@/utils/localStorage';
// import { useAuth } from '@/contexts/AuthContext';
// import { Certificate } from '@/types';

// const ViewCertificates = () => {
//   const { user } = useAuth();
//   const [certificates, setCertificates] = useState<Certificate[]>([]);

//   useEffect(() => {
//     const certs = getCertificates().filter(c => c.createdBy === user?.id);
//     setCertificates(certs);
//   }, [user]);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">My Certificates</h1>
//       <Card className="p-6">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Certificate ID</TableHead>
//               <TableHead>Student</TableHead>
//               <TableHead>Course</TableHead>
//               <TableHead>Issue Date</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {certificates.map(cert => (
//               <TableRow key={cert.id}>
//                 <TableCell className="font-mono text-xs">{cert.certificateId}</TableCell>
//                 <TableCell>{cert.studentName}</TableCell>
//                 <TableCell>{cert.course}</TableCell>
//                 <TableCell>{new Date(cert.issueDate).toLocaleDateString()}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Card>
//     </div>
//   );
// };

// export default ViewCertificates;




import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getCertificates } from '@/utils/localStorage';
import { useAuth } from '@/contexts/AuthContext';
import { Certificate } from '@/types';

const ViewCertificates = () => {
  const { user } = useAuth();
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    if (!user) return;
    // ✅ Filter certificates created by the logged-in employee
    const certs = getCertificates().filter(c => c.createdBy === user.id);
    setCertificates(certs);
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Certificates</h1>
      <Card className="p-6 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Certificate ID</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Email</TableHead> {/* ✅ New Column */}
              <TableHead>College</TableHead> {/* ✅ New Column */}
              <TableHead>Domain</TableHead>
              <TableHead>Issue Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {certificates.length > 0 ? (
              certificates.map(cert => (
                <TableRow key={cert.id}>
                  <TableCell className="font-mono text-xs">{cert.certificateId}</TableCell>
                  <TableCell>{cert.studentName}</TableCell>
                  <TableCell>{cert.studentEmail}</TableCell> {/* ✅ Email field */}
                  <TableCell>{cert.collegeName}</TableCell> {/* ✅ College field */}
                  <TableCell>{cert.domain}</TableCell>
                  <TableCell>{new Date(cert.issueDate).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                  No certificates found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ViewCertificates;

