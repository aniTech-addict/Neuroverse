import React, { useState } from 'react';
import { Brain, TrendingUp, Users, AlertTriangle, Target, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const PredictiveAnalytics: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('attrition');

  const attritionPrediction = [
    { month: 'Jul 2024', predicted: 18, confidence: 92, actual: 15 },
    { month: 'Aug 2024', predicted: 22, confidence: 89, actual: 19 },
    { month: 'Sep 2024', predicted: 16, confidence: 94, actual: 14 },
    { month: 'Oct 2024', predicted: 24, confidence: 87, actual: null },
    { month: 'Nov 2024', predicted: 19, confidence: 91, actual: null },
    { month: 'Dec 2024', predicted: 21, confidence: 88, actual: null }
  ];

  const skillDemandForecast = [
    { skill: 'Cyber Security', current: 45, predicted: 78, demand: 'High' },
    { skill: 'UAV Operations', current: 32, predicted: 65, demand: 'High' },
    { skill: 'AI/ML Systems', current: 12, predicted: 45, demand: 'Critical' },
    { skill: 'Electronic Warfare', current: 58, predicted: 62, demand: 'Medium' },
    { skill: 'Traditional Maintenance', current: 89, predicted: 67, demand: 'Declining' }
  ];

  const leadershipPipeline = [
    { name: 'Wg Cdr A. Kumar', currentRank: 'Wing Commander', predictedRole: 'Group Captain', probability: 94, timeframe: '18 months' },
    { name: 'Sqn Ldr P. Sharma', currentRank: 'Squadron Leader', predictedRole: 'Wing Commander', probability: 87, timeframe: '24 months' },
    { name: 'Flt Lt R. Singh', currentRank: 'Flight Lieutenant', predictedRole: 'Squadron Leader', probability: 78, timeframe: '30 months' },
    { name: 'Fg Ofr M. Patel', currentRank: 'Flying Officer', predictedRole: 'Flight Lieutenant', probability: 82, timeframe: '36 months' }
  ];

  const missionReadinessData = [
    { unit: 'Squadron 1', current: 88, predicted: 92, factors: ['Training Complete', 'Equipment Upgraded'] },
    { unit: 'Squadron 18', current: 82, predicted: 78, factors: ['Personnel Shortage', 'Equipment Issues'] },
    { unit: 'Squadron 2', current: 91, predicted: 94, factors: ['High Morale', 'Recent Deployment Success'] }
  ];

  const riskFactors = [
    { factor: 'Work-Life Balance', impact: 85, trend: 'Increasing' },
    { factor: 'Career Growth', impact: 78, trend: 'Stable' },
    { factor: 'Compensation', impact: 65, trend: 'Improving' },
    { factor: 'Technology Gap', impact: 72, trend: 'Concerning' },
    { factor: 'Deployment Frequency', impact: 80, trend: 'Increasing' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Predictive Analytics</h1>
          <p className="text-gray-600">AI-powered insights and forecasting for strategic planning</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-green-600">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Models Active</span>
          </div>
        </div>
      </div>

      {/* Model Selector */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Analytics Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button
            onClick={() => setSelectedModel('attrition')}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selectedModel === 'attrition' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-medium text-gray-900">Attrition Prediction</h3>
            <p className="text-sm text-gray-600">92% accuracy</p>
          </button>

          <button
            onClick={() => setSelectedModel('skills')}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selectedModel === 'skills' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
          >
            <Target className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-medium text-gray-900">Skill Forecasting</h3>
            <p className="text-sm text-gray-600">89% accuracy</p>
          </button>

          <button
            onClick={() => setSelectedModel('leadership')}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selectedModel === 'leadership' 
                ? 'border-purple-500 bg-purple-50' 
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="font-medium text-gray-900">Leadership Pipeline</h3>
            <p className="text-sm text-gray-600">87% accuracy</p>
          </button>

          <button
            onClick={() => setSelectedModel('readiness')}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selectedModel === 'readiness' 
                ? 'border-orange-500 bg-orange-50' 
                : 'border-gray-200 hover:border-orange-300'
            }`}
          >
            <AlertTriangle className="w-8 h-8 text-orange-600 mb-2" />
            <h3 className="font-medium text-gray-900">Mission Readiness</h3>
            <p className="text-sm text-gray-600">94% accuracy</p>
          </button>
        </div>
      </div>

      {/* Attrition Prediction */}
      {selectedModel === 'attrition' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Attrition Trend Prediction</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={attritionPrediction}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="actual" stroke="#10B981" name="Actual" strokeWidth={2} />
                  <Line type="monotone" dataKey="predicted" stroke="#F59E0B" strokeDasharray="5 5" name="Predicted" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Factors Analysis</h3>
              <div className="space-y-4">
                {riskFactors.map((risk, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{risk.factor}</span>
                        <span className="text-sm text-gray-600">{risk.impact}% impact</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: `${risk.impact}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className={`ml-4 text-xs px-2 py-1 rounded-full ${
                      risk.trend === 'Increasing' ? 'text-red-600 bg-red-100' :
                      risk.trend === 'Concerning' ? 'text-orange-600 bg-orange-100' :
                      risk.trend === 'Improving' ? 'text-green-600 bg-green-100' :
                      'text-gray-600 bg-gray-100'
                    }`}>
                      {risk.trend}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600 mb-2" />
                <h4 className="font-medium text-red-800">High-Risk Personnel</h4>
                <p className="text-sm text-red-600">15 officers showing early attrition indicators</p>
                <button className="mt-2 text-sm text-red-700 underline">View Details →</button>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600 mb-2" />
                <h4 className="font-medium text-yellow-800">Retention Programs</h4>
                <p className="text-sm text-yellow-600">Deploy targeted retention strategies for technical branch</p>
                <button className="mt-2 text-sm text-yellow-700 underline">View Programs →</button>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <Brain className="w-6 h-6 text-green-600 mb-2" />
                <h4 className="font-medium text-green-800">Proactive Measures</h4>
                <p className="text-sm text-green-600">Early intervention could reduce attrition by 23%</p>
                <button className="mt-2 text-sm text-green-700 underline">Implement →</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Forecasting */}
      {selectedModel === 'skills' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Future Skill Requirements</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={skillDemandForecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="skill" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="current" fill="#94A3B8" name="Current Personnel" />
                <Bar dataKey="predicted" fill="#3B82F6" name="Predicted Requirement" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Recommendations</h3>
            <div className="space-y-4">
              {skillDemandForecast.map((skill, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{skill.skill}</h4>
                    <p className="text-sm text-gray-600">
                      Gap: {skill.predicted - skill.current} personnel required
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      skill.demand === 'Critical' ? 'text-red-600 bg-red-100' :
                      skill.demand === 'High' ? 'text-orange-600 bg-orange-100' :
                      skill.demand === 'Medium' ? 'text-yellow-600 bg-yellow-100' :
                      'text-gray-600 bg-gray-100'
                    }`}>
                      {skill.demand} Priority
                    </span>
                    <button className="ml-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                      Plan Training
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Leadership Pipeline */}
      {selectedModel === 'leadership' && (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Leadership Succession Pipeline</h3>
          <div className="space-y-4">
            {leadershipPipeline.map((candidate, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{candidate.name}</h4>
                    <p className="text-sm text-gray-600">{candidate.currentRank}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{candidate.probability}%</div>
                    <div className="text-sm text-gray-500">Promotion Probability</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-700">Predicted Role: {candidate.predictedRole}</span>
                      <span className="text-sm text-gray-500">{candidate.timeframe}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${candidate.probability}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="ml-4 px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mission Readiness */}
      {selectedModel === 'readiness' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Unit Readiness Forecasting</h3>
            <div className="space-y-4">
              {missionReadinessData.map((unit, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{unit.name}</h4>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{unit.current}%</div>
                        <div className="text-xs text-gray-500">Current</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-bold ${unit.predicted > unit.current ? 'text-green-600' : 'text-red-600'}`}>
                          {unit.predicted}%
                        </div>
                        <div className="text-xs text-gray-500">Predicted</div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm text-gray-600 mb-1">Key Factors:</div>
                    <div className="flex flex-wrap gap-2">
                      {unit.factors.map((factor, factorIndex) => (
                        <span key={factorIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictiveAnalytics;