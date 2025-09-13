import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserRole } from '../types/personnel';

interface User {
  id: string;
  name: string;
  serviceNumber: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: { serviceNumber: string; password: string }) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock users for demo
  const mockUsers = {
    'IAF001': {
      id: '1',
      name: 'Air Marshal Rajesh Kumar',
      serviceNumber: 'IAF001',
      role: {
        role: 'Commander' as const,
        permissions: ['view_all', 'manage_deployments', 'strategic_planning'],
        accessLevel: 'Air HQ' as const
      }
    },
    'IAF002': {
      id: '2',
      name: 'Wing Commander Priya Sharma',
      serviceNumber: 'IAF002',
      role: {
        role: 'HR Manager' as const,
        permissions: ['view_personnel', 'manage_postings', 'career_planning'],
        accessLevel: 'Command' as const
      }
    },
    'IAF003': {
      id: '3',
      name: 'Squadron Leader Dr. Amit Singh',
      serviceNumber: 'IAF003',
      role: {
        role: 'Medical Officer' as const,
        permissions: ['view_medical', 'fitness_assessments', 'medical_reports'],
        accessLevel: 'Base' as const
      }
    }
  };

  const login = async (credentials: { serviceNumber: string; password: string }): Promise<boolean> => {
    // Mock authentication - in real system, this would call secure API
    const mockUser = mockUsers[credentials.serviceNumber as keyof typeof mockUsers];
    
    if (mockUser && credentials.password === 'iaf@2024') {
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('iaf_token', 'mock_jwt_token');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('iaf_token');
  };

  useEffect(() => {
    // Check for existing session on mount
    const token = localStorage.getItem('iaf_token');
    if (token) {
      // In real system, validate token with server
      setUser(mockUsers.IAF001);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};