

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getCertificates, getUniversities } from '@/utils/localStorage';
import { Award, Search, Download } from 'lucide-react';
import { toast } from 'sonner';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const CertificateCorner = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any>(null);
  const [universities, setUniversities] = useState<any[]>([]);

  // Load universities once
  useState(() => {
    setUniversities(getUniversities());
  });

  const handleSearch = () => {
    const certs = getCertificates();
    const found = certs.find(c => c.certificateId === query || c.studentEmail === query);
    if (found) {
      setResult(found);
      toast.success('Certificate found!');
    } else {
      setResult(null);
      toast.error('Certificate not found');
    }
  };

  const handleDownload = () => {
    if (result) {
      toast.success('Certificate download started!');
      const university = universities.find(u => u.id === result.universityId)?.name || '-';
      const certificateText = `
CERTIFICATE OF COMPLETION

This is to certify that

${result.studentName}

Has successfully completed the ${result.domain} program

at ${result.collegeName}, ${university}

Certificate ID: ${result.certificateId}
Issue Date: ${new Date(result.issueDate).toLocaleDateString()}

Email: ${result.studentEmail}
      `;

      const blob = new Blob([certificateText], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Certificate_${result.certificateId}.txt`;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const getUniversityName = (id: string) => {
    return universities.find(u => u.id === id)?.name || '-';
  };

  return (
    <div className="min-h-screen bg-gray-50 font-cisco font-normal">
      <Navbar />

      <div className="container mx-auto max-w-4xl py-20 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Award className="h-20 w-20 text-blue-600 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-blue-600 mb-2">Certificate Checker</h1>
          <p className="text-blue-600 text-lg">Verify and download your certificates instantly</p>
        </div>

        {/* Search Card */}
        <Card className="shadow-lg rounded-2xl border border-blue-600 mb-10">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-blue-600">Search Certificate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Enter Certificate ID or Email"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-lg"
            />
            <Button
              onClick={handleSearch}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </CardContent>
        </Card>

        {/* Result Card */}
        {result && (
          <Card className="shadow-lg rounded-2xl border border-blue-600 bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{result.studentName}</h3>
                <Button
                  onClick={handleDownload}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center px-4 py-2 transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-blue-600 text-base">
                <p><strong>Certificate ID:</strong> {result.certificateId}</p>
                <p><strong>Email:</strong> {result.studentEmail}</p>
                <p><strong>Domain:</strong> {result.domain}</p>
                <p><strong>College:</strong> {result.collegeName}</p>
                <p><strong>University:</strong> {getUniversityName(result.universityId)}</p>
                <p><strong>Issue Date:</strong> {new Date(result.issueDate).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CertificateCorner;
