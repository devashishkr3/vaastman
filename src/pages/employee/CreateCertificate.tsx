
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Trash2, Plus, Edit } from 'lucide-react';
import { toast } from 'sonner';
import { Certificate, College, University } from '@/types';
import { addCertificate, getCertificates, updateCertificate, deleteCertificate, generateCertificateId, getColleges, getUniversities } from '@/utils/localStorage';
import { useAuth } from '@/contexts/AuthContext';

const domains = ['Web Development', 'App Development', 'UI/UX', 'Digital Marketing', 'Cloud Computing'];

const EmployeeCreateCertificate = () => {
  const { user } = useAuth();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingCert, setEditingCert] = useState<Certificate | null>(null);

  const [universities, setUniversities] = useState<University[]>([]);
  const [colleges, setColleges] = useState<College[]>([]);
  const [filteredColleges, setFilteredColleges] = useState<College[]>([]);

  // Form state
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [universityId, setUniversityId] = useState('');
  const [collegeId, setCollegeId] = useState('');
  const [domain, setDomain] = useState('');
  const [issueDate, setIssueDate] = useState('');

  // Load data
  useEffect(() => {
    const allCerts = getCertificates();
    const empCerts = user ? allCerts.filter(c => c.createdBy === user.id) : [];
    setCertificates(empCerts);
    setUniversities(getUniversities());
    setColleges(getColleges());
  }, [user]);

  // Filter colleges when university changes
  useEffect(() => {
    setFilteredColleges(colleges.filter(c => c.universityId === universityId));
    setCollegeId('');
  }, [universityId, colleges]);

  const filteredCertificates = certificates.filter(
    c =>
      c.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.certificateId.includes(searchTerm) ||
      c.studentEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (cert?: Certificate) => {
    if (cert) {
      setEditingCert(cert);
      setStudentName(cert.studentName);
      setStudentEmail(cert.studentEmail);
      setUniversityId(cert.universityId);
      setCollegeId(cert.collegeId);
      setDomain(cert.domain);
      setIssueDate(cert.issueDate.split('T')[0]);
    } else {
      setEditingCert(null);
      setStudentName('');
      setStudentEmail('');
      setUniversityId('');
      setCollegeId('');
      setDomain('');
      setIssueDate('');
    }
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (!studentName || !studentEmail || !universityId || !collegeId || !domain || !issueDate) {
      toast.error('Fill all fields');
      return;
    }

    const college = colleges.find(c => c.id === collegeId);
    if (!college) {
      toast.error('College not found');
      return;
    }

    if (editingCert) {
      // Update certificate
      const updatedCert: Certificate = {
        ...editingCert,
        studentName,
        studentEmail,
        universityId,
        collegeId,
        collegeName: college.name,
        domain,
        issueDate: new Date(issueDate).toISOString(),
      };
      updateCertificate(updatedCert);
      setCertificates(prev => prev.map(c => c.id === updatedCert.id ? updatedCert : c));
      toast.success('Certificate updated!');
    } else {
      // Create new certificate
      const newCert: Certificate = {
        id: Date.now().toString(),
        certificateId: generateCertificateId(),
        studentName,
        studentEmail,
        universityId,
        collegeId,
        collegeName: college.name,
        domain,
        issueDate: new Date(issueDate).toISOString(),
        createdBy: user?.id || '',
        createdByName: user?.name || '',
        createdAt: new Date().toISOString(),
        course: ''
      };
      addCertificate(newCert);
      setCertificates(prev => [...prev, newCert]);
      toast.success('Certificate created!');
    }

    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete certificate?')) {
      deleteCertificate(id);
      setCertificates(prev => prev.filter(c => c.id !== id));
      toast.success('Deleted!');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Certificates</h1>
      <Card className="p-6 mb-6">
        <div className="flex justify-between mb-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" />
          </div>
          <Button onClick={() => openModal()}><Plus className="mr-2 h-4 w-4" /> Create Certificate</Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Certificate ID</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>College</TableHead>
              <TableHead>Domain</TableHead>
              <TableHead>Issue Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCertificates.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground">No certificates found</TableCell>
              </TableRow>
            ) : (
              filteredCertificates.map(cert => (
                <TableRow key={cert.id}>
                  <TableCell>{cert.certificateId}</TableCell>
                  <TableCell>{cert.studentName}</TableCell>
                  <TableCell>{cert.studentEmail}</TableCell>
                  <TableCell>{cert.collegeName}</TableCell>
                  <TableCell>{cert.domain}</TableCell>
                  <TableCell>{new Date(cert.issueDate).toLocaleDateString()}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => openModal(cert)}><Edit className="h-4 w-4 text-primary" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(cert.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <Card className="p-6 w-96 relative">
            <h2 className="text-xl font-bold mb-4">{editingCert ? 'Update Certificate' : 'Create Certificate'}</h2>

            <Input placeholder="Student Name" value={studentName} onChange={e => setStudentName(e.target.value)} className="mb-3" />
            <Input placeholder="Student Email" value={studentEmail} onChange={e => setStudentEmail(e.target.value)} className="mb-3" />

            <Select value={universityId} onValueChange={setUniversityId}>
              <SelectTrigger className="mb-3"><SelectValue placeholder="Select University" /></SelectTrigger>
              <SelectContent>
                {universities.map(u => <SelectItem key={u.id} value={u.id}>{u.name}</SelectItem>)}
              </SelectContent>
            </Select>

            <Select value={collegeId} onValueChange={setCollegeId}>
              <SelectTrigger className="mb-3"><SelectValue placeholder="Select College" /></SelectTrigger>
              <SelectContent>
                {filteredColleges.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
              </SelectContent>
            </Select>

            <Select value={domain} onValueChange={setDomain}>
              <SelectTrigger className="mb-3"><SelectValue placeholder="Select Domain" /></SelectTrigger>
              <SelectContent>
                {domains.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
              </SelectContent>
            </Select>

            <Input type="date" value={issueDate} onChange={e => setIssueDate(e.target.value)} className="mb-3" />

            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
              <Button onClick={handleSubmit}>{editingCert ? 'Update' : 'Create'}</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default EmployeeCreateCertificate;
