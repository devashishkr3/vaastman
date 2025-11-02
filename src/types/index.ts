// export interface User {
//   id: string;
//   email: string;
//   password: string;
//   role: 'admin' | 'employee';
//   name: string;
//   isActive?: boolean;
//   createdAt: string;
// }

import { ReactNode } from "react";

// export interface College {
//   id: string;
//   name: string;
//   location: string;
//   code: string;
//   createdAt: string;
// }

// export interface Certificate {
//   universityId(universityId: any): unknown;
//   collegeId(collegeId: any): unknown;
//   domain(domain: any): unknown;
//   id: string;
//   certificateId: string;
//   studentName: string;
//   studentEmail: string;
//   course: string;
//   collegeName: string;
//   issueDate: string;
//   createdBy: string;
//   createdByName: string;
//   createdAt: string;
// }


// export interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
//   role: 'admin' | 'employee' | 'public' | null;
// }



// export interface User {
//   id: string;
//   email: string;
//   password: string;
//   role: 'admin' | 'employee';
//   name: string;
//   isActive?: boolean;
//   createdAt: string;
// }

// export interface University {
//   id: string;
//   name: string;
//   location: string;
//   code: string;
//   createdAt: string;
// }

// export interface College {
//   id: string;
//   name: string;
//   location: string;
//   code: string;
//   universityId: string; // linked university
//   createdAt: string;
// }

// export interface Certificate {
//   id: string;
//   certificateId: string;
//   studentName: string;
//   studentEmail: string;
//   universityId: string;
//   collegeId: string;
//   collegeName: string;
//   domain: string;
//   course: string;
//   issueDate: string;
//   createdBy: string;
//   createdByName: string;
//   createdAt: string;
// }

// export interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
//   role: 'admin' | 'employee' | 'public' | null;
// }



export interface User {
  id: string;
  role: 'ADMIN' | 'EMPLOYEE';
  name: string;
  email: string;
  mobile:string;
  password: string;
  isActive?: boolean;
  createdAt: string;
  updatedAt?: string; // last date when employee created a certificate
}

export interface University {
  id: string;
  name: string;
  location: string;
  code: string;
  createdAt: string;
}

export interface College {
  code: string;
  id: string;
  name: string;
  universityId: string; // link to university
  createdAt: string;
}

export interface Certificate {
  email: ReactNode;
  id: string;
  certificateId: string;
  studentName: string;
  studentEmail: string;
  universityId: string;
  collegeId: string;
  collegeName: string;
  domain: string;
  course: string;
  issueDate: string;
  createdBy: string;
  createdByName: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  role: 'ADMIN' | 'EMPLOYEE' | 'PUBLIC' | null;
}
