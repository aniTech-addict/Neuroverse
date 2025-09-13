import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PersonnelManagement from './components/PersonnelManagement';
import PredictiveAnalytics from './components/PredictiveAnalytics';
import WorkforceAllocation from './components/WorkforceAllocation';
import MissionReadiness from './components/MissionReadiness';
import TrainingManagement from './components/TrainingManagement';
import SecurityCompliance from './components/SecurityCompliance';
import AIAdjutant from './components/AIAdjutant';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isAuthenticated) {
    return <Login />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'personnel':
        return <PersonnelManagement />;
      case 'analytics':
        return <PredictiveAnalytics />;
      case 'allocation':
        return <WorkforceAllocation />;
      case 'readiness':
        return <MissionReadiness />;
      case 'training':
        return <TrainingManagement />;
      case 'reports':
        return <div className="p-6"><h1 className="text-2xl font-bold">Reports & Insights</h1><p className="text-gray-600">Feature coming soon...</p></div>;
      case 'ai-adjutant':
        return <AIAdjutant />;
      case 'security':
        return <SecurityCompliance />;
      case 'settings':
        return <div className="p-6"><h1 className="text-2xl font-bold">System Settings</h1><p className="text-gray-600">Feature coming soon...</p></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;