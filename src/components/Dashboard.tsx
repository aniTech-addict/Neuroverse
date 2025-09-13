import React from 'react';
import { Users, Target, TrendingUp, AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { mockPersonnel, mockUnits } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const totalPersonnel = mockPersonnel.length;
  const avgReadiness = Math.round(mockPersonnel.reduce((acc, p) => acc + p.missionReadiness, 0) / totalPersonnel);
  const highRiskPersonnel = mockPersonnel.filter(p => p.attritionRisk === 'High').length;
  const trainingDue = mockPersonnel.filter(p => p.trainingStatus === 'Due' || p.trainingStatus === 'Overdue').length;

  const readinessData = mockUnits.map(unit => ({
    name: unit.name.split(' ')[0] + ' Sqn',
    readiness: unit.readinessLevel,
    strength: Math.round((unit.strength / unit.requiredStrength) * 100)
  }));

  const skillDistribution = [
    { name: 'Air Combat', value: 35, color: '#3B82F6' },
    { name: 'Technical', value: 28, color: '#10B981' },
    { name: 'Electronics', value: 22, color: '#F59E0B' },
    { name: 'Support', value: 15, color: '#EF4444' }
  ];

  const attritionTrend = [
    { month: 'Jan', predicted: 12, actual: 8 },
    { month: 'Feb', predicted: 15, actual: 11 },
    { month: 'Mar', predicted: 18, actual: 14 },
    { month: 'Apr', predicted: 22, actual: 19 },
    { month: 'May', predicted: 16, actual: 13 },
    { month: 'Jun', predicted: 20, actual: 17 }
  ];

  const performanceMetrics = [
    { subject: 'Leadership', A: 88, fullMark: 100 },
    { subject: 'Technical Skills', A: 92, fullMark: 100 },
    { subject: 'Mission Readiness', A: 85, fullMark: 100 },
    { subject: 'Training Compliance', A: 78, fullMark: 100 },
    { subject: 'Physical Fitness', A: 91, fullMark: 100 },
    { subject: 'Security Clearance', A: 96, fullMark: 100 }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Strategic Dashboard</h1>
          <p className="text-gray-600">Real-time intelligence and workforce insights</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Last Updated</p>
          <p className="text-sm font-medium">{new Date().toLocaleString()}</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Personnel</p>
              <p className="text-3xl font-bold text-gray-900">{totalPersonnel.toLocaleString()}</p>
              <p className="text-sm text-green-600 font-medium">+2.4% from last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Readiness</p>
              <p className="text-3xl font-bold text-gray-900">{avgReadiness}%</p>
              <p className="text-sm text-green-600 font-medium">+5.2% improvement</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">At-Risk Personnel</p>
              <p className="text-3xl font-bold text-gray-900">{highRiskPersonnel}</p>
              <p className="text-sm text-red-600 font-medium">Requires attention</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Training Due</p>
              <p className="text-3xl font-bold text-gray-900">{trainingDue}</p>
              <p className="text-sm text-yellow-600 font-medium">Schedule required</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Unit Readiness Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={readinessData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="readiness" fill="#3B82F6" name="Mission Readiness %" />
              <Bar dataKey="strength" fill="#10B981" name="Manning Level %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skillDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {skillDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Attrition Prediction vs Actual</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attritionTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="predicted" stroke="#F59E0B" strokeDasharray="5 5" name="AI Predicted" />
              <Line type="monotone" dataKey="actual" stroke="#EF4444" name="Actual Attrition" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={performanceMetrics}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Performance" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Priority Action Items</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <div>
                <p className="font-medium text-red-800">Critical Skill Shortage: Flight Engineers</p>
                <p className="text-sm text-red-600">1 Squadron requires immediate reinforcement</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700">
              Take Action
            </button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="font-medium text-yellow-800">Training Certifications Expiring</p>
                <p className="text-sm text-yellow-600">12 personnel require recertification within 30 days</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700">
              Schedule Training
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-800">AI Recommendation: Career Progression</p>
                <p className="text-sm text-blue-600">8 high-potential officers ready for advancement</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
              Review Candidates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;