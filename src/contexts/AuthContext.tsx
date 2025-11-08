import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '@/types';
import { toast } from 'sonner';
import { getAuth, saveAuth, clearAuth, initializeDefaultData } from '@/utils/localStorage';
// import { initializeDefaultData, getAuth, saveAuth, clearAuth } from '@/utils/localStorage';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const url=import.meta.env.VITE_API_URL

export const getAuthHeader = (useRefresh = false) => {
  const token = useRefresh
    ? localStorage.getItem("refreshToken")
    : localStorage.getItem("accessToken");

  return token ? { Authorization: `Bearer ${token}` } : {};
};



export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    role: null,
  });

  useEffect(() => {
    // initializeDefaultData();
    const user = getAuth();
    if (user) {
      setAuthState({
        user,
        isAuthenticated: true,
        role: user.role,
      });
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // const usersData = localStorage.getItem('cms_users');
    // const users: User[] = usersData ? JSON.parse(usersData) : [];

    // const user = users.find(u => u.email === email && u.password === password);
    const res = await fetch(`${url}/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) //throw new Error(data.message || "Login failed")
    {
      toast.dismiss(data.message)
      return false
    }
    toast.dismiss(data.message);
    console.log("login: ",data);
    
    const user = data.data;
    // Save tokens for later
    localStorage.setItem("accessToken", data.accessToken);
    // console.log(data.accessToken)
    localStorage.setItem("refreshToken", data.resreshToken);
    // console.log(data.resreshToken)
    // console.log("login role: ",user.role)
    if (user && user.isActive !== false) {
      saveAuth(user);
      setAuthState({
        user,
        isAuthenticated: true,
        role: user.role,
      });
      return true;
    }
    return false;
    // temp
    // return true;
  };

  const logout =async () => {
    clearAuth();

    const headers = {
    "Content-Type": "application/json",
    ...getAuthHeader(true), // send refresh token
  };
    const res = await fetch(`${url}/api/v1/auth/logout`, {
      method: "POST",
      headers,
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Logout failed");

    // Clear tokens
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAuthState({
      user: null,
      isAuthenticated: false,
      role: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
