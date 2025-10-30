// import { User, College, Certificate } from '@/types';

// // Storage keys
// const USERS_KEY = 'cms_users';
// const COLLEGES_KEY = 'cms_colleges';
// const CERTIFICATES_KEY = 'cms_certificates';
// const AUTH_KEY = 'cms_auth';

// // Initialize default admin
// export const initializeDefaultData = () => {
//   const users = getUsers();
//   if (users.length === 0) {
//     const defaultAdmin: User = {
//       id: '1',
//       email: 'admin@cms.com',
//       password: 'admin123',
//       role: 'admin',
//       name: 'System Administrator',
//       isActive: true,
//       createdAt: new Date().toISOString(),
//     };
//     saveUsers([defaultAdmin]);
//   }
// };

// // Users
// export const getUsers = (): User[] => {
//   const data = localStorage.getItem(USERS_KEY);
//   return data ? JSON.parse(data) : [];
// };

// export const saveUsers = (users: User[]) => {
//   localStorage.setItem(USERS_KEY, JSON.stringify(users));
// };

// export const addUser = (user: User) => {
//   const users = getUsers();
//   users.push(user);
//   saveUsers(users);
// };

// export const updateUser = (id: string, userData: Partial<User>) => {
//   const users = getUsers();
//   const index = users.findIndex(u => u.id === id);
//   if (index !== -1) {
//     users[index] = { ...users[index], ...userData };
//     saveUsers(users);
//   }
// };

// export const deleteUser = (id: string) => {
//   const users = getUsers().filter(u => u.id !== id);
//   saveUsers(users);
// };

// // Colleges
// export const getColleges = (): College[] => {
//   const data = localStorage.getItem(COLLEGES_KEY);
//   return data ? JSON.parse(data) : [];
// };

// export const saveColleges = (colleges: College[]) => {
//   localStorage.setItem(COLLEGES_KEY, JSON.stringify(colleges));
// };

// export const addCollege = (college: College) => {
//   const colleges = getColleges();
//   colleges.push(college);
//   saveColleges(colleges);
// };

// export const updateCollege = (id: string, collegeData: Partial<College>) => {
//   const colleges = getColleges();
//   const index = colleges.findIndex(c => c.id === id);
//   if (index !== -1) {
//     colleges[index] = { ...colleges[index], ...collegeData };
//     saveColleges(colleges);
//   }
// };

// export const deleteCollege = (id: string) => {
//   const colleges = getColleges().filter(c => c.id !== id);
//   saveColleges(colleges);
// };

// // Certificates
// export const getCertificates = (): Certificate[] => {
//   const data = localStorage.getItem(CERTIFICATES_KEY);
//   return data ? JSON.parse(data) : [];
// };

// export const saveCertificates = (certificates: Certificate[]) => {
//   localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(certificates));
// };

// export const addCertificate = (certificate: Certificate) => {
//   const certificates = getCertificates();
//   certificates.push(certificate);
//   saveCertificates(certificates);
// };

// export const deleteCertificate = (id: string) => {
//   const certificates = getCertificates().filter(c => c.id !== id);
//   saveCertificates(certificates);
// };

// // Auth
// export const saveAuth = (user: User) => {
//   localStorage.setItem(AUTH_KEY, JSON.stringify(user));
// };

// export const getAuth = (): User | null => {
//   const data = localStorage.getItem(AUTH_KEY);
//   return data ? JSON.parse(data) : null;
// };

// export const clearAuth = () => {
//   localStorage.removeItem(AUTH_KEY);
// };

// // Certificate ID Generator
// export const generateCertificateId = (): string => {
//   const prefix = 'CERT';
//   const timestamp = Date.now().toString(36).toUpperCase();
//   const random = Math.random().toString(36).substring(2, 7).toUpperCase();
//   return `${prefix}-${timestamp}-${random}`;
// };

// sencdchange


// import { User, College, Certificate, University } from '@/types';

// const USERS_KEY = 'cms_users';
// const COLLEGES_KEY = 'cms_colleges';
// const UNIVERSITIES_KEY = 'cms_universities';
// const CERTIFICATES_KEY = 'cms_certificates';
// const AUTH_KEY = 'cms_auth';

// // Users
// export const getUsers = (): User[] => JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
// export const saveUsers = (users: User[]) => localStorage.setItem(USERS_KEY, JSON.stringify(users));
// export const addUser = (user: User) => { const u = getUsers(); u.push(user); saveUsers(u); };
// export const updateUser = (id: string, data: Partial<User>) => {
//   const users = getUsers().map(u => u.id === id ? { ...u, ...data } : u);
//   saveUsers(users);
// };
// export const deleteUser = (id: string) => saveUsers(getUsers().filter(u => u.id !== id));

// // Universities
// export const getUniversities = (): University[] => JSON.parse(localStorage.getItem(UNIVERSITIES_KEY) || '[]');
// export const saveUniversities = (universities: University[]) => localStorage.setItem(UNIVERSITIES_KEY, JSON.stringify(universities));
// export const addUniversity = (uni: University) => { const u = getUniversities(); u.push(uni); saveUniversities(u); };
// export const updateUniversity = (id: string, data: Partial<University>) => {
//   const universities = getUniversities().map(u => u.id === id ? { ...u, ...data } : u);
//   saveUniversities(universities);
// };
// export const deleteUniversity = (id: string) => saveUniversities(getUniversities().filter(u => u.id !== id));

// // Colleges
// export const getColleges = (): College[] => JSON.parse(localStorage.getItem(COLLEGES_KEY) || '[]');
// export const saveColleges = (colleges: College[]) => localStorage.setItem(COLLEGES_KEY, JSON.stringify(colleges));
// export const addCollege = (c: College) => { const col = getColleges(); col.push(c); saveColleges(col); };
// export const updateCollege = (id: string, data: Partial<College>) => {
//   const colleges = getColleges().map(c => c.id === id ? { ...c, ...data } : c);
//   saveColleges(colleges);
// };
// export const deleteCollege = (id: string) => saveColleges(getColleges().filter(c => c.id !== id));

// // Certificates
// export const getCertificates = (): Certificate[] => JSON.parse(localStorage.getItem(CERTIFICATES_KEY) || '[]');
// export const saveCertificates = (certs: Certificate[]) => localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(certs));
// export const addCertificate = (c: Certificate) => { const certs = getCertificates(); certs.push(c); saveCertificates(certs); };
// export const updateCertificate = (updatedCert: Certificate) => {
//   const certs = getCertificates();
//   const index = certs.findIndex(c => c.id === updatedCert.id);
//   if (index !== -1) { certs[index] = { ...certs[index], ...updatedCert }; saveCertificates(certs); }
// };
// export const deleteCertificate = (id: string) => saveCertificates(getCertificates().filter(c => c.id !== id));

// // Auth
// export const saveAuth = (user: User) => localStorage.setItem(AUTH_KEY, JSON.stringify(user));
// export const getAuth = (): User | null => JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');
// export const clearAuth = () => localStorage.removeItem(AUTH_KEY);

// // Certificate ID
// export const generateCertificateId = () => `CERT-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

// // --- at the top of localStorage.ts ---
// export const initializeDefaultData = () => {
//   const users = getUsers();
//   if (users.length === 0) {
//     const defaultAdmin: User = {
//       id: '1',
//       email: 'admin@cms.com',
//       password: 'admin123',
//       role: 'admin',
//       name: 'System Administrator',
//       isActive: true,
//       createdAt: new Date().toISOString(),
//     };
//     saveUsers([defaultAdmin]);
//   }
// };






// import { User, University, College, Certificate } from '@/types';

// const USERS_KEY = 'cms_users';
// const UNIVERSITIES_KEY = 'cms_universities';
// const COLLEGES_KEY = 'cms_colleges';
// const CERTIFICATES_KEY = 'cms_certificates';
// const AUTH_KEY = 'cms_auth';

// // Users
// export const getUsers = (): User[] => JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
// export const saveUsers = (users: User[]) => localStorage.setItem(USERS_KEY, JSON.stringify(users));
// export const addUser = (user: User) => { const u = getUsers(); u.push(user); saveUsers(u); };
// export const updateUser = (id: string, data: Partial<User>) => {
//   const u = getUsers().map(user => user.id === id ? { ...user, ...data } : user);
//   saveUsers(u);
// };
// export const deleteUser = (id: string) => saveUsers(getUsers().filter(u => u.id !== id));

// // Universities
// export const getUniversities = (): University[] => JSON.parse(localStorage.getItem(UNIVERSITIES_KEY) || '[]');
// export const saveUniversities = (unis: University[]) => localStorage.setItem(UNIVERSITIES_KEY, JSON.stringify(unis));
// export const addUniversity = (uni: University) => { const u = getUniversities(); u.push(uni); saveUniversities(u); };
// export const updateUniversity = (id: string, data: Partial<University>) => {
//   const u = getUniversities().map(un => un.id === id ? { ...un, ...data } : un);
//   saveUniversities(u);
// };
// export const deleteUniversity = (id: string) => saveUniversities(getUniversities().filter(u => u.id !== id));

// // Colleges
// export const getColleges = (): College[] => JSON.parse(localStorage.getItem(COLLEGES_KEY) || '[]');
// export const saveColleges = (cols: College[]) => localStorage.setItem(COLLEGES_KEY, JSON.stringify(cols));
// export const addCollege = (col: College) => { const c = getColleges(); c.push(col); saveColleges(c); };
// export const updateCollege = (id: string, data: Partial<College>) => {
//   const c = getColleges().map(col => col.id === id ? { ...col, ...data } : col);
//   saveColleges(c);
// };
// export const deleteCollege = (id: string) => saveColleges(getColleges().filter(c => c.id !== id));

// // Certificates
// export const getCertificates = (): Certificate[] => JSON.parse(localStorage.getItem(CERTIFICATES_KEY) || '[]');
// export const saveCertificates = (certs: Certificate[]) => localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(certs));
// export const addCertificate = (cert: Certificate) => { const c = getCertificates(); c.push(cert); saveCertificates(c); };
// export const updateCertificate = (cert: Certificate) => {
//   const c = getCertificates();
//   const index = c.findIndex(item => item.id === cert.id);
//   if (index !== -1) { c[index] = { ...c[index], ...cert }; saveCertificates(c); }
// };
// export const deleteCertificate = (id: string) => saveCertificates(getCertificates().filter(c => c.id !== id));

// // Auth
// export const saveAuth = (user: User) => localStorage.setItem(AUTH_KEY, JSON.stringify(user));
// export const getAuth = (): User | null => JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');
// export const clearAuth = () => localStorage.removeItem(AUTH_KEY);

// // Certificate ID
// export const generateCertificateId = () => `CERT-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

// // Initialize default admin
// export const initializeDefaultData = () => {
//   if (getUsers().length === 0) {
//     addUser({ id: '1', email: 'admin@cms.com', password: 'admin123', role: 'admin', name: 'System Admin', isActive: true, createdAt: new Date().toISOString() });
//   }
// };



import { User, University, College, Certificate } from '@/types';

const USERS_KEY = 'cms_users';
const UNIVERSITIES_KEY = 'cms_universities';
const COLLEGES_KEY = 'cms_colleges';
const CERTIFICATES_KEY = 'cms_certificates';
const AUTH_KEY = 'cms_auth';

// 🔔 trigger dashboard update
const triggerUpdate = () => {
  window.dispatchEvent(new Event('localDataUpdated'));
};

// ======================== USERS ==========================
export const getUsers = (): User[] =>
  JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

export const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  triggerUpdate();
};

export const addUser = (user: User) => {
  const u = getUsers();
  u.push(user);
  saveUsers(u);
};

export const updateUser = (id: string, data: Partial<User>) => {
  const u = getUsers().map((user) =>
    user.id === id ? { ...user, ...data } : user
  );
  saveUsers(u);
};

export const deleteUser = (id: string) => {
  saveUsers(getUsers().filter((u) => u.id !== id));
};

// ===================== UNIVERSITIES ======================
export const getUniversities = (): University[] =>
  JSON.parse(localStorage.getItem(UNIVERSITIES_KEY) || '[]');

export const saveUniversities = (unis: University[]) => {
  localStorage.setItem(UNIVERSITIES_KEY, JSON.stringify(unis));
  triggerUpdate();
};

export const addUniversity = (uni: University) => {
  const u = getUniversities();
  u.push(uni);
  saveUniversities(u);
};

export const updateUniversity = (id: string, data: Partial<University>) => {
  const u = getUniversities().map((un) =>
    un.id === id ? { ...un, ...data } : un
  );
  saveUniversities(u);
};

export const deleteUniversity = (id: string) => {
  saveUniversities(getUniversities().filter((u) => u.id !== id));
};

// ======================== COLLEGES =======================
export const getColleges = (): College[] =>
  JSON.parse(localStorage.getItem(COLLEGES_KEY) || '[]');

export const saveColleges = (cols: College[]) => {
  localStorage.setItem(COLLEGES_KEY, JSON.stringify(cols));
  triggerUpdate();
};

export const addCollege = (col: College) => {
  const c = getColleges();
  c.push(col);
  saveColleges(c);
};

export const updateCollege = (id: string, data: Partial<College>) => {
  const c = getColleges().map((col) =>
    col.id === id ? { ...col, ...data } : col
  );
  saveColleges(c);
};

export const deleteCollege = (id: string) => {
  saveColleges(getColleges().filter((c) => c.id !== id));
};

// ====================== CERTIFICATES =====================
export const getCertificates = (): Certificate[] =>
  JSON.parse(localStorage.getItem(CERTIFICATES_KEY) || '[]');

export const saveCertificates = (certs: Certificate[]) => {
  localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(certs));
  triggerUpdate();
};

// 🧾 Add new certificate and update employee stats
export const addCertificate = (cert: Certificate) => {
  const c = getCertificates();
  c.push(cert);
  saveCertificates(c);

  // update employee stats by name
  const users = getUsers();
  const empIndex = users.findIndex((u) => u.name === cert.createdBy); // match by name
  if (empIndex !== -1) {
    const emp = users[empIndex];
    users[empIndex] = {
      ...emp,
      certificatesCreatedCount: (emp.certificatesCreatedCount || 0) + 1,
      lastCertificateDate: new Date().toISOString(),
    };
    saveUsers(users);
  }
};

export const updateCertificate = (cert: Certificate) => {
  const c = getCertificates();
  const index = c.findIndex((item) => item.id === cert.id);
  if (index !== -1) {
    c[index] = { ...c[index], ...cert };
    saveCertificates(c);
  }
};

export const deleteCertificate = (id: string) => {
  saveCertificates(getCertificates().filter((c) => c.id !== id));
};

// ========================= AUTH ===========================
export const saveAuth = (user: User) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  triggerUpdate();
};

export const getAuth = (): User | null =>
  JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');

export const clearAuth = () => {
  localStorage.removeItem(AUTH_KEY);
  triggerUpdate();
};

// ===================== CERTIFICATE ID =====================
export const generateCertificateId = () =>
  `CERT-${Date.now().toString(36).toUpperCase()}-${Math.random()
    .toString(36)
    .substring(2, 7)
    .toUpperCase()}`;

// ================== INITIAL DEFAULT DATA ===================
export const initializeDefaultData = () => {
  if (getUsers().length === 0) {
    addUser({
      id: '1',
      name: 'System Admin',
      email: 'admin@cms.com',
      password: 'admin123',
      role: 'admin',
      isActive: true,
      createdAt: new Date().toISOString(),
      certificatesCreatedCount: 0,
      lastCertificateDate: '',
    });
  }
};

