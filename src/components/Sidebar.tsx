import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Calendar, 
  FileText, 
  Settings,
  Brain,
  MapPin,
  Bot
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAuth();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['Commander', 'HR Manager', 'Medical Officer', 'Training Officer'] },
    { id: 'personnel', label: 'Personnel Management', icon: Users, roles: ['Commander', 'HR Manager'] },
    { id: 'allocation', label: 'Workforce Allocation', icon: MapPin, roles: ['Commander', 'HR Manager'] },
    { id: 'analytics', label: 'Predictive Analytics', icon: Brain, roles: ['Commander', 'HR Manager'] },
    { id: 'ai-adjutant', label: 'AI Adjutant', icon: Bot, roles: ['Commander'] },
    { id: 'readiness', label: 'Mission Readiness', icon: Target, roles: ['Commander', 'Medical Officer'] },
    { id: 'training', label: 'Training Management', icon: Calendar, roles: ['Training Officer', 'HR Manager'] },
    { id: 'reports', label: 'Reports & Insights', icon: FileText, roles: ['Commander', 'HR Manager'] },
    { id: 'security', label: 'Security & Compliance', icon: Shield, roles: ['Commander'] },
    { id: 'settings', label: 'System Settings', icon: Settings, roles: ['Commander'] }
  ];

  const filteredMenuItems = menuItems.filter(item => 
    item.roles.includes(user?.role.role || '')
  );

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-lg">IAF HMS</h2>
            <p className="text-xs text-gray-400">v2.0.1</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {filteredMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto p-4"> {/* Use mt-auto to push to bottom */}
        <div className="bg-gray-800 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs text-gray-400">System Status</span>
          </div>
          <p className="text-xs text-green-400 font-medium">All Systems Operational</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;