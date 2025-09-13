import React, { useState } from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Clock, FileText, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const SecurityCompliance: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'clearances' | 'audit' | 'compliance'>('overview');

  const securityMetrics = {
    totalPersonnel: 533,
    activeClearances: 498,
    pendingReviews: 12,
    complianceScore: 96
  };

  const clearanceLevels = [
    { level: 'Top Secret', count: 45, percentage: 8.4, color: '#EF4444' },
    { level: 'Secret', count: 187, percentage: 35.1, color: '#F59E0B' },
    { level: 'Confidential', count: 266, percentage: 49.9, color: '#10B981' },
    { level: 'Restricted', count: 35, percentage: 6.6, color: '#6B7280' }
  ];

  const auditTrail = [
    {
      timestamp: '2024-01-20 14:30:25',
      user: 'Wing Commander A. Singh',
      action: 'Accessed Personnel File',
      resource: 'IAF12345 - Classified Records',
      result: 'Success',
      ipAddress: '192.168.1.45',
      riskLevel: 'Low'
    },
    {
      timestamp: '2024-01-20 14:28:12',
      user: 'Squadron Leader P. Sharma',
      action: 'Modified Training Record',
      resource: 'Training Database',
      result: 'Success',
      ipAddress: '192.168.1.67',
      riskLevel: 'Low'
    },
    {
      timestamp: '2024-01-20 14:25:08',
      user: 'Unknown User',
      action: 'Failed Login Attempt',
      resource: 'HMS Login Portal',
      result: 'Failed',
      ipAddress: '203.45.67.89',
      riskLevel: 'High'
    }
  ];

  const complianceChecks = [
    {
      category: 'Data Encryption',
      status: 'Compliant',
      score: 100,
      lastCheck: '2024-01-20',
      issues: 0,
      description: 'All data encrypted with AES-256'
    },
    {
      category: 'Access Controls',
      status: 'Compliant',
      score: 98,
      lastCheck: '2024-01-19',
      issues: 1,
      description: 'Role-based access properly implemented'
    },
    {
      category: 'Audit Logging',
      status: 'Compliant',
      score: 95,
      lastCheck: '2024-01-20',
      issues: 2,
      description: 'Comprehensive audit trail maintained'
    },
    {
      category: 'Password Policy',
      status: 'Warning',
      score: 87,
      lastCheck: '2024-01-18',
      issues: 8,
      description: '8 users with weak passwords'
    },
    {
      category: 'Session Management',
      status: 'Compliant',
      score: 99,
      lastCheck: '2024-01-20',
      issues: 0,
      description: 'Secure session handling implemented'
    }
  ];

  const securityIncidents = [
    {
      id: 'SEC-2024-001',
      type: 'Unauthorized Access Attempt',
      severity: 'High',
      status: 'Investigating',
      reportedBy: 'System Monitor',
      timestamp: '2024-01-20 14:25:08',
      description: 'Multiple failed login attempts from external IP',
      assignedTo: 'Security Team Alpha'
    },
    {
      id: 'SEC-2024-002',
      type: 'Data Export Anomaly',
      severity: 'Medium',
      status: 'Resolved',
      reportedBy: 'Audit System',
      timestamp: '2024-01-19 09:15:32',
      description: 'Unusual data export pattern detected',
      assignedTo: 'Data Protection Officer'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant': return 'text-green-600 bg-green-100';
      case 'Warning': return 'text-yellow-600 bg-yellow-100';
      case 'Critical': return 'text-red-600 bg-red-100';
      case 'Resolved': return 'text-green-600 bg-green-100';
      case 'Investigating': return 'text-blue-600 bg-blue-100';
      case 'Open': return 'text-red-600 bg-red-100';
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

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Security & Compliance Center</h1>
          <p className="text-gray-600">Military-grade security monitoring and compliance management</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-green-600">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Security Status: Active</span>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Security Alert
          </button>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Personnel</p>
              <p className="text-3xl font-bold text-gray-900">{securityMetrics.totalPersonnel}</p>
              <p className="text-sm text-blue-600 font-medium">Under monitoring</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Clearances</p>
              <p className="text-3xl font-bold text-gray-900">{securityMetrics.activeClearances}</p>
              <p className="text-sm text-green-600 font-medium">93% of personnel</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
              <p className="text-3xl font-bold text-gray-900">{securityMetrics.pendingReviews}</p>
              <p className="text-sm text-yellow-600 font-medium">Requires attention</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compliance Score</p>
              <p className="text-3xl font-bold text-gray-900">{securityMetrics.complianceScore}%</p>
              <p className="text-sm text-green-600 font-medium">Excellent rating</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Security Overview', icon: Shield },
              { id: 'clearances', label: 'Security Clearances', icon: Lock },
              { id: 'audit', label: 'Audit Trail', icon: Eye },
              { id: 'compliance', label: 'Compliance', icon: FileText }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {selectedTab === 'overview' && (
            <div className="space-y-6">
              {/* Security Clearance Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Clearance Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={clearanceLevels}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ level, percentage }) => `${level} (${percentage}%)`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                      >
                        {clearanceLevels.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Clearance Level Details</h3>
                  <div className="space-y-3">
                    {clearanceLevels.map((level, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: level.color }}
                          ></div>
                          <span className="font-medium text-gray-900">{level.level}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{level.count}</div>
                          <div className="text-sm text-gray-500">{level.percentage}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Security Incidents */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Security Incidents</h3>
                <div className="space-y-3">
                  {securityIncidents.map((incident) => (
                    <div key={incident.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                            {incident.severity}
                          </span>
                          <span className="font-medium text-gray-900">{incident.id}</span>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                            {incident.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">{incident.timestamp}</div>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">{incident.type}</h4>
                      <p className="text-sm text-gray-600 mb-3">{incident.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Reported by: {incident.reportedBy}</span>
                        <span>Assigned to: {incident.assignedTo}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'audit' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">System Audit Trail</h3>
                <div className="flex items-center space-x-3">
                  <input
                    type="date"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Export Logs
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Resource</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Result</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {auditTrail.map((entry, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{entry.timestamp}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{entry.user}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{entry.action}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{entry.resource}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            entry.result === 'Success' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                          }`}>
                            {entry.result}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-sm font-medium ${getRiskColor(entry.riskLevel)}`}>
                            {entry.riskLevel}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedTab === 'compliance' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Compliance Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceChecks.map((check, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-900">{check.category}</h4>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(check.status)}`}>
                        {check.status}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Compliance Score</span>
                        <span className="text-lg font-bold text-gray-900">{check.score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${check.score >= 95 ? 'bg-green-500' : check.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${check.score}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{check.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>Last Check: {check.lastCheck}</span>
                      <span>{check.issues} Issues</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityCompliance;