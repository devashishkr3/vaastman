import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '@/types';
// import { getAuth, saveAuth, clearAuth, initializeDefaultData } from '@/utils/localStorage';
import { initializeDefaultData, getAuth, saveAuth, clearAuth } from '@/utils/localStorage';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    role: null,
  });

  useEffect(() => {
    initializeDefaultData();
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
    const usersData = localStorage.getItem('cms_users');
    const users: User[] = usersData ? JSON.parse(usersData) : [];

    const user = users.find(u => u.email === email && u.password === password);

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
  };

  const logout = () => {
    clearAuth();
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
