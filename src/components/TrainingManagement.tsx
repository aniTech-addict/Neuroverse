import React, { useState } from 'react';
import { Calendar, Users, Award, Clock, TrendingUp, BookOpen, Target, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const TrainingManagement: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'overview' | 'programs' | 'schedule' | 'analytics'>('overview');

  const trainingMetrics = {
    totalPrograms: 45,
    activeTrainees: 287,
    completionRate: 94,
    avgScore: 87
  };

  const trainingPrograms = [
    {
      id: 'TP001',
      name: 'Advanced Fighter Tactics',
      type: 'Combat',
      duration: 12,
      capacity: 20,
      enrolled: 18,
      waitlist: 5,
      instructor: 'Wing Commander Rajesh Singh',
      startDate: '2024-02-15',
      status: 'Ongoing',
      completionRate: 92,
      avgScore: 89
    },
    {
      id: 'TP002',
      name: 'Electronic Warfare Systems',
      type: 'Technical',
      duration: 8,
      capacity: 15,
      enrolled: 15,
      waitlist: 8,
      instructor: 'Squadron Leader Priya Sharma',
      startDate: '2024-02-20',
      status: 'Scheduled',
      completionRate: 0,
      avgScore: 0
    },
    {
      id: 'TP003',
      name: 'Leadership Development',
      type: 'Leadership',
      duration: 6,
      capacity: 25,
      enrolled: 22,
      waitlist: 3,
      instructor: 'Group Captain Amit Kumar',
      startDate: '2024-01-10',
      status: 'Completed',
      completionRate: 96,
      avgScore: 91
    }
  ];

  const trainingAnalytics = [
    { month: 'Jan', completed: 45, scheduled: 52, cancelled: 3 },
    { month: 'Feb', completed: 38, scheduled: 48, cancelled: 2 },
    { month: 'Mar', completed: 42, scheduled: 50, cancelled: 1 },
    { month: 'Apr', completed: 47, scheduled: 55, cancelled: 4 },
    { month: 'May', completed: 51, scheduled: 58, cancelled: 2 },
    { month: 'Jun', completed: 49, scheduled: 56, cancelled: 3 }
  ];

  const skillDevelopment = [
    { skill: 'Technical Skills', current: 78, target: 85, progress: 92 },
    { skill: 'Leadership', current: 82, target: 88, progress: 93 },
    { skill: 'Combat Readiness', current: 89, target: 92, progress: 97 },
    { skill: 'Communication', current: 75, target: 80, progress: 94 },
    { skill: 'Decision Making', current: 84, target: 90, progress: 93 }
  ];

  const upcomingTraining = [
    {
      program: 'Cyber Security Fundamentals',
      date: '2024-02-25',
      participants: 30,
      instructor: 'Squadron Leader Tech Singh',
      priority: 'High'
    },
    {
      program: 'Advanced Maintenance Procedures',
      date: '2024-03-01',
      participants: 25,
      instructor: 'Wing Commander Maintenance',
      priority: 'Medium'
    },
    {
      program: 'Emergency Response Training',
      date: '2024-03-05',
      participants: 40,
      instructor: 'Group Captain Safety',
      priority: 'High'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-600 bg-green-100';
      case 'Ongoing': return 'text-blue-600 bg-blue-100';
      case 'Scheduled': return 'text-yellow-600 bg-yellow-100';
      case 'Cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
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
          <h1 className="text-2xl font-bold text-gray-900">Training Management System</h1>
          <p className="text-gray-600">Comprehensive training program management and analytics</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={selectedView}
            onChange={(e) => setSelectedView(e.target.value as any)}
          >
            <option value="overview">Overview</option>
            <option value="programs">Programs</option>
            <option value="schedule">Schedule</option>
            <option value="analytics">Analytics</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            New Program
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Programs</p>
              <p className="text-3xl font-bold text-gray-900">{trainingMetrics.totalPrograms}</p>
              <p className="text-sm text-blue-600 font-medium">12 new this month</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Trainees</p>
              <p className="text-3xl font-bold text-gray-900">{trainingMetrics.activeTrainees}</p>
              <p className="text-sm text-green-600 font-medium">+8% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completion Rate</p>
              <p className="text-3xl font-bold text-gray-900">{trainingMetrics.completionRate}%</p>
              <p className="text-sm text-green-600 font-medium">Above target</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-3xl font-bold text-gray-900">{trainingMetrics.avgScore}%</p>
              <p className="text-sm text-blue-600 font-medium">+2.1% improvement</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {selectedView === 'overview' && (
        <div className="space-y-6">
          {/* Training Programs Overview */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Training Programs</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Program</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Enrollment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {trainingPrograms.map((program) => (
                    <tr key={program.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{program.name}</div>
                          <div className="text-sm text-gray-500">{program.instructor}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {program.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{program.enrolled}/{program.capacity}</div>
                        <div className="text-xs text-gray-500">Waitlist: {program.waitlist}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(program.status)}`}>
                          {program.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {program.status === 'Completed' || program.status === 'Ongoing' ? (
                          <div>
                            <div className="text-sm font-medium text-gray-900">{program.avgScore}% avg</div>
                            <div className="text-xs text-gray-500">{program.completionRate}% completion</div>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">Not started</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Training */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Training Sessions</h3>
            <div className="space-y-4">
              {upcomingTraining.map((training, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{training.program}</h4>
                      <p className="text-sm text-gray-600">{training.instructor} • {training.participants} participants</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(training.priority)}`}>
                      {training.priority}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{training.date}</div>
                    </div>
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedView === 'analytics' && (
        <div className="space-y-6">
          {/* Training Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Completion Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trainingAnalytics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="completed" stroke="#10B981" strokeWidth={2} name="Completed" />
                  <Line type="monotone" dataKey="scheduled" stroke="#3B82F6" strokeWidth={2} name="Scheduled" />
                  <Line type="monotone" dataKey="cancelled" stroke="#EF4444" strokeWidth={2} name="Cancelled" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Development Progress</h3>
              <div className="space-y-4">
                {skillDevelopment.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                      <span className="text-sm text-gray-600">{skill.current}% / {skill.target}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(skill.current / skill.target) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">Progress: {skill.progress}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Insights */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Generated Training Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
                <h4 className="font-medium text-green-800">High Performance Areas</h4>
                <p className="text-sm text-green-600">Combat training shows 96% completion rate with excellent scores</p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600 mb-2" />
                <h4 className="font-medium text-yellow-800">Areas for Improvement</h4>
                <p className="text-sm text-yellow-600">Technical training needs more practical components</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Target className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="font-medium text-blue-800">Recommendations</h4>
                <p className="text-sm text-blue-600">Increase cyber security training capacity by 40%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingManagement;