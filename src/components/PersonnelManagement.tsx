import React, { useState } from 'react';
import { Search, Filter, Download, Plus, Eye, Edit, Award, AlertCircle } from 'lucide-react';
import { mockPersonnel } from '../data/mockData';
import { Personnel } from '../types/personnel';

const PersonnelManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPersonnel, setSelectedPersonnel] = useState<Personnel | null>(null);
  const [filterBranch, setFilterBranch] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredPersonnel = mockPersonnel.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.serviceNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = filterBranch === 'All' || person.branch === filterBranch;
    const matchesStatus = filterStatus === 'All' || person.medicalStatus === filterStatus;
    return matchesSearch && matchesBranch && matchesStatus;
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fit': return 'text-green-600 bg-green-100';
      case 'Unfit': return 'text-red-600 bg-red-100';
      case 'Under Review': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Personnel Management</h1>
          <p className="text-gray-600">Comprehensive personnel records and management</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>Add Personnel</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search personnel..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filterBranch}
            onChange={(e) => setFilterBranch(e.target.value)}
          >
            <option value="All">All Branches</option>
            <option value="Fighter">Fighter</option>
            <option value="Technical">Technical</option>
            <option value="Support">Support</option>
          </select>

          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Fit">Fit</option>
            <option value="Unfit">Unfit</option>
            <option value="Under Review">Under Review</option>
          </select>

          <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Advanced Filters</span>
          </button>
        </div>
      </div>

      {/* Personnel Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Personnel Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Branch & Unit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Readiness
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPersonnel.map((person) => (
                <tr key={person.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.serviceNumber} • {person.rank}</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{person.branch}</div>
                    <div className="text-sm text-gray-500">{person.unit}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${person.missionReadiness}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{person.missionReadiness}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(person.medicalStatus)}`}>
                      {person.medicalStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskColor(person.attritionRisk)}`}>
                      {person.attritionRisk} Risk
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => setSelectedPersonnel(person)}
                      className="text-blue-600 hover:text-blue-900 p-1 rounded"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900 p-1 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-purple-600 hover:text-purple-900 p-1 rounded">
                      <Award className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Personnel Detail Modal */}
      {selectedPersonnel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Personnel Details</h2>
                <button
                  onClick={() => setSelectedPersonnel(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Basic Information</h3>
                    <div className="space-y-2">
                      <p><span className="font-medium">Name:</span> {selectedPersonnel.name}</p>
                      <p><span className="font-medium">Service Number:</span> {selectedPersonnel.serviceNumber}</p>
                      <p><span className="font-medium">Rank:</span> {selectedPersonnel.rank}</p>
                      <p><span className="font-medium">Branch:</span> {selectedPersonnel.branch}</p>
                      <p><span className="font-medium">Unit:</span> {selectedPersonnel.unit}</p>
                      <p><span className="font-medium">Experience:</span> {selectedPersonnel.experience} years</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Status & Metrics</h3>
                    <div className="space-y-2">
                      <p><span className="font-medium">Medical Status:</span> 
                        <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedPersonnel.medicalStatus)}`}>
                          {selectedPersonnel.medicalStatus}
                        </span>
                      </p>
                      <p><span className="font-medium">Mission Readiness:</span> {selectedPersonnel.missionReadiness}%</p>
                      <p><span className="font-medium">Performance Rating:</span> {selectedPersonnel.performanceRating}/5.0</p>
                      <p><span className="font-medium">Leadership Potential:</span> {selectedPersonnel.leadershipPotential}%</p>
                      <p><span className="font-medium">Attrition Risk:</span> 
                        <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskColor(selectedPersonnel.attritionRisk)}`}>
                          {selectedPersonnel.attritionRisk}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills & Specializations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedPersonnel.skills.map((skill, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-blue-600">{skill.level}</span>
                      </div>
                      <p className="text-sm text-gray-500">Certified: {skill.certificationDate}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Training */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Training Records</h3>
                <div className="space-y-3">
                  {selectedPersonnel.trainingRecords.map((training, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{training.course}</h4>
                          <p className="text-sm text-gray-500">Instructor: {training.instructor}</p>
                          <p className="text-sm text-gray-500">Completed: {training.completionDate}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{training.score}%</div>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            training.status === 'Completed' ? 'text-green-600 bg-green-100' : 'text-yellow-600 bg-yellow-100'
                          }`}>
                            {training.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Generate Report
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Update Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonnelManagement;