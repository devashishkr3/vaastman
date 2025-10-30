import { Certificate } from '@/types';

const CERT_KEY = 'certificates';

// Update certificate by ID
export const updateCertificate = (updatedCert: Certificate) => {
    const data = localStorage.getItem(CERT_KEY);
    if (!data) return;

    const certificates: Certificate[] = JSON.parse(data);
    const newCertificates = certificates.map(cert =>
        cert.id === updatedCert.id ? updatedCert : cert
    );

    localStorage.setItem(CERT_KEY, JSON.stringify(newCertificates));
};
