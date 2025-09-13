import React, { useState } from 'react';
import { Target, Shield, AlertTriangle, CheckCircle, Clock, TrendingUp, Activity, Zap } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { mockPersonnel, mockUnits } from '../data/mockData';

const MissionReadiness: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'24h' | '7d' | '30d' | '90d'>('30d');
  const [readinessLevel, setReadinessLevel] = useState<'individual' | 'unit' | 'command'>('unit');

  const overallReadiness = {
    current: 88,
    target: 90,
    trend: '+2.3%',
    lastUpdated: new Date().toLocaleString()
  };

  const readinessCategories = [
    { category: 'Personnel Fitness', score: 92, status: 'Excellent', trend: '+1.2%' },
    { category: 'Equipment Status', score: 85, status: 'Good', trend: '-0.8%' },
    { category: 'Training Currency', score: 89, status: 'Good', trend: '+3.1%' },
    { category: 'Medical Clearance', score: 94, status: 'Excellent', trend: '+0.5%' },
    { category: 'Security Clearance', score: 96, status: 'Excellent', trend: '0.0%' },
    { category: 'Operational Experience', score: 87, status: 'Good', trend: '+1.8%' }
  ];

  const unitReadiness = [
    { unit: '1 Squadron', overall: 88, personnel: 92, equipment: 85, training: 89, medical: 94 },
    { unit: '18 Squadron', overall: 82, personnel: 86, equipment: 78, training: 84, medical: 91 },
    { unit: '2 BRD', overall: 91, personnel: 94, equipment: 89, training: 92, medical: 96 }
  ];

  const readinessTrend = [
    { date: '2024-01-01', readiness: 85, target: 90 },
    { date: '2024-01-08', readiness: 86, target: 90 },
    { date: '2024-01-15', readiness: 87, target: 90 },
    { date: '2024-01-22', readiness: 88, target: 90 },
    { date: '2024-01-29', readiness: 88, target: 90 }
  ];

  const criticalIssues = [
    {
      type: 'Equipment',
      severity: 'High',
      description: '3 aircraft grounded for maintenance',
      unit: '18 Squadron',
      impact: 'Reduces squadron readiness by 12%',
      eta: '5 days',
      assignedTo: 'Maintenance Team Alpha'
    },
    {
      type: 'Personnel',
      severity: 'Medium',
      description: '2 pilots medical review pending',
      unit: '1 Squadron',
      impact: 'Affects deployment capability',
      eta: '3 days',
      assignedTo: 'Medical Officer'
    },
    {
      type: 'Training',
      severity: 'Medium',
      description: '15 personnel overdue for recertification',
      unit: 'Multiple',
      impact: 'Training compliance at risk',
      eta: '14 days',
      assignedTo: 'Training Department'
    }
  ];

  const deploymentScenarios = [
    {
      scenario: 'Border Security Operation',
      requiredPersonnel: 150,
      availablePersonnel: 142,
      readinessScore: 94,
      deploymentTime: '6 hours',
      status: 'Ready'
    },
    {
      scenario: 'Humanitarian Mission',
      requiredPersonnel: 80,
      availablePersonnel: 95,
      readinessScore: 97,
      deploymentTime: '4 hours',
      status: 'Ready'
    },
    {
      scenario: 'Combat Operations',
      requiredPersonnel: 200,
      availablePersonnel: 178,
      readinessScore: 87,
      deploymentTime: '12 hours',
      status: 'Partial'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent': return 'text-green-600 bg-green-100';
      case 'Good': return 'text-blue-600 bg-blue-100';
      case 'Fair': return 'text-yellow-600 bg-yellow-100';
      case 'Poor': return 'text-red-600 bg-red-100';
      case 'Ready': return 'text-green-600 bg-green-100';
      case 'Partial': return 'text-yellow-600 bg-yellow-100';
      case 'Not Ready': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mission Readiness Assessment</h1>
          <p className="text-gray-600">Real-time operational readiness monitoring and analysis</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={readinessLevel}
            onChange={(e) => setReadinessLevel(e.target.value as any)}
          >
            <option value="individual">Individual Level</option>
            <option value="unit">Unit Level</option>
            <option value="command">Command Level</option>
          </select>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value as any)}
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Generate Assessment
          </button>
        </div>
      </div>

      {/* Overall Readiness Status */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Overall Mission Readiness</h2>
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold">{overallReadiness.current}%</div>
              <div className="text-green-300 font-medium">{overallReadiness.trend}</div>
            </div>
            <p className="text-blue-100 mt-2">Target: {overallReadiness.target}% | Last Updated: {overallReadiness.lastUpdated}</p>
          </div>
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Target className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      {/* Readiness Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {readinessCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{category.category}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(category.status)}`}>
                {category.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900">{category.score}%</div>
              <div className={`text-sm font-medium ${category.trend.startsWith('+') ? 'text-green-600' : category.trend.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                {category.trend}
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${category.score}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Unit Readiness Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Unit Readiness Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={unitReadiness}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="unit" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="overall" fill="#3B82F6" name="Overall Readiness" />
              <Bar dataKey="personnel" fill="#10B981" name="Personnel" />
              <Bar dataKey="equipment" fill="#F59E0B" name="Equipment" />
              <Bar dataKey="training" fill="#8B5CF6" name="Training" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Readiness Trend Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={readinessTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[80, 95]} />
              <Tooltip />
              <Line type="monotone" dataKey="readiness" stroke="#3B82F6" strokeWidth={3} name="Current Readiness" />
              <Line type="monotone" dataKey="target" stroke="#EF4444" strokeDasharray="5 5" strokeWidth={2} name="Target" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Critical Issues */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Critical Issues Affecting Readiness</h3>
          <div className="flex items-center space-x-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-medium">{criticalIssues.length} Active Issues</span>
          </div>
        </div>
        <div className="space-y-4">
          {criticalIssues.map((issue, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                    {issue.severity}
                  </span>
                  <span className="text-sm text-gray-600">{issue.type}</span>
                  <span className="text-sm font-medium text-gray-900">{issue.unit}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">ETA: {issue.eta}</div>
                  <div className="text-xs text-gray-500">{issue.assignedTo}</div>
                </div>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">{issue.description}</h4>
              <p className="text-sm text-gray-600 mb-3">{issue.impact}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500">Assigned to {issue.assignedTo}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                    Escalate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deployment Scenarios */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Deployment Scenario Readiness</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {deploymentScenarios.map((scenario, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{scenario.scenario}</h4>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(scenario.status)}`}>
                  {scenario.status}
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Required Personnel:</span>
                  <span className="font-medium">{scenario.requiredPersonnel}</span>
                </div>
                <div className="flex justify-between">
                  <span>Available Personnel:</span>
                  <span className="font-medium">{scenario.availablePersonnel}</span>
                </div>
                <div className="flex justify-between">
                  <span>Readiness Score:</span>
                  <span className="font-medium">{scenario.readinessScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Deployment Time:</span>
                  <span className="font-medium">{scenario.deploymentTime}</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${scenario.status === 'Ready' ? 'bg-green-500' : scenario.status === 'Partial' ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${scenario.readinessScore}%` }}
                  ></div>
                </div>
              </div>
              <button className="w-full mt-3 px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Detailed Analysis
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Monitoring */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Real-time Monitoring</h3>
          <div className="flex items-center space-x-2 text-green-600">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Updates</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <Activity className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">533</div>
            <div className="text-sm text-gray-600">Active Personnel</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">42</div>
            <div className="text-sm text-gray-600">Aircraft Ready</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">96%</div>
            <div className="text-sm text-gray-600">Systems Operational</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12min</div>
            <div className="text-sm text-gray-600">Avg Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionReadiness;