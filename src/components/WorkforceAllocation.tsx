import React, { useState } from 'react';
import { MapPin, Users, Target, AlertTriangle, CheckCircle, Clock, TrendingUp, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { mockPersonnel, mockUnits } from '../data/mockData';

const WorkforceAllocation: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [allocationMode, setAllocationMode] = useState<'current' | 'optimized' | 'simulation'>('current');

  const allocationData = [
    { unit: '1 Squadron', current: 185, required: 200, optimized: 195, efficiency: 92 },
    { unit: '18 Squadron', current: 192, required: 210, optimized: 205, efficiency: 87 },
    { unit: '2 BRD', current: 156, required: 175, optimized: 170, efficiency: 95 }
  ];

  const skillGapAnalysis = [
    { skill: 'Fighter Pilots', shortage: 12, surplus: 0, priority: 'Critical' },
    { skill: 'Electronic Warfare', shortage: 8, surplus: 0, priority: 'High' },
    { skill: 'Radar Specialists', shortage: 5, surplus: 0, priority: 'High' },
    { skill: 'Maintenance Crew', shortage: 0, surplus: 3, priority: 'Medium' },
    { skill: 'Administrative', shortage: 0, surplus: 7, priority: 'Low' }
  ];

  const deploymentReadiness = [
    { month: 'Jan', ready: 85, training: 10, unavailable: 5 },
    { month: 'Feb', ready: 88, training: 8, unavailable: 4 },
    { month: 'Mar', ready: 82, training: 12, unavailable: 6 },
    { month: 'Apr', ready: 90, training: 7, unavailable: 3 },
    { month: 'May', ready: 87, training: 9, unavailable: 4 },
    { month: 'Jun', ready: 92, training: 6, unavailable: 2 }
  ];

  const aiRecommendations = [
    {
      type: 'Transfer',
      priority: 'High',
      recommendation: 'Transfer 3 Electronic Warfare specialists from 2 BRD to 1 Squadron',
      impact: 'Improves 1 Squadron readiness by 8%',
      timeline: '2 weeks',
      confidence: 94
    },
    {
      type: 'Training',
      priority: 'Medium',
      recommendation: 'Cross-train 5 maintenance personnel in avionics systems',
      impact: 'Reduces skill gap by 40%',
      timeline: '6 weeks',
      confidence: 87
    },
    {
      type: 'Recruitment',
      priority: 'Critical',
      recommendation: 'Recruit 12 additional fighter pilots through lateral entry',
      impact: 'Addresses critical pilot shortage',
      timeline: '12 weeks',
      confidence: 91
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'text-red-600 bg-red-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI-Powered Workforce Allocation</h1>
          <p className="text-gray-600">Optimize personnel distribution and skill allocation across units</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={allocationMode}
            onChange={(e) => setAllocationMode(e.target.value as any)}
          >
            <option value="current">Current Allocation</option>
            <option value="optimized">AI Optimized</option>
            <option value="simulation">What-If Simulation</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Personnel</p>
              <p className="text-3xl font-bold text-gray-900">533</p>
              <p className="text-sm text-blue-600 font-medium">Across 3 units</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Allocation Efficiency</p>
              <p className="text-3xl font-bold text-gray-900">91%</p>
              <p className="text-sm text-green-600 font-medium">+3% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Critical Shortages</p>
              <p className="text-3xl font-bold text-gray-900">25</p>
              <p className="text-sm text-red-600 font-medium">Immediate attention</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Deployment Ready</p>
              <p className="text-3xl font-bold text-gray-900">92%</p>
              <p className="text-sm text-green-600 font-medium">Above target</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Allocation Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Unit Strength Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={allocationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="unit" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="current" fill="#94A3B8" name="Current Strength" />
              <Bar dataKey="required" fill="#3B82F6" name="Required Strength" />
              {allocationMode === 'optimized' && (
                <Bar dataKey="optimized" fill="#10B981" name="AI Optimized" />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Deployment Readiness Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={deploymentReadiness}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="ready" stroke="#10B981" name="Ready %" strokeWidth={2} />
              <Line type="monotone" dataKey="training" stroke="#F59E0B" name="Training %" strokeWidth={2} />
              <Line type="monotone" dataKey="unavailable" stroke="#EF4444" name="Unavailable %" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Skill Gap Analysis */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Critical Skill Gap Analysis</h3>
        <div className="space-y-4">
          {skillGapAnalysis.map((skill, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{skill.skill}</h4>
                  <p className="text-sm text-gray-600">
                    {skill.shortage > 0 ? `Shortage: ${skill.shortage}` : `Surplus: ${skill.surplus}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(skill.priority)}`}>
                  {skill.priority}
                </span>
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  Action Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">AI-Generated Recommendations</h3>
          <div className="flex items-center space-x-2 text-green-600">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Analysis</span>
          </div>
        </div>
        <div className="space-y-4">
          {aiRecommendations.map((rec, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                    {rec.priority}
                  </span>
                  <span className="text-sm text-gray-600">{rec.type}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{rec.confidence}% Confidence</div>
                  <div className="text-xs text-gray-500">{rec.timeline}</div>
                </div>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">{rec.recommendation}</h4>
              <p className="text-sm text-gray-600 mb-3">{rec.impact}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 w-32">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${rec.confidence}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{rec.confidence}%</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    Review
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                    Implement
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Simulation Panel */}
      {allocationMode === 'simulation' && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What-If Simulation Center</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Scenario 1: Mass Retirement</h4>
              <p className="text-sm text-gray-600 mb-3">Simulate impact of 50 senior officers retiring</p>
              <button className="w-full px-3 py-2 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">
                Run Simulation
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Scenario 2: Emergency Deployment</h4>
              <p className="text-sm text-gray-600 mb-3">Deploy 200 personnel to border operations</p>
              <button className="w-full px-3 py-2 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">
                Run Simulation
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Scenario 3: New Technology</h4>
              <p className="text-sm text-gray-600 mb-3">Impact of introducing AI-powered systems</p>
              <button className="w-full px-3 py-2 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">
                Run Simulation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkforceAllocation;