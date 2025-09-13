import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { mockPersonnel } from '../data/mockData';
import { Personnel } from '../types/personnel';

const AIAdjutant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const mockNLP = (text: string): string[] => {
    const lowerCaseText = text.toLowerCase();
    let results: string[] = [];

    if (lowerCaseText.includes('best suited technician') || lowerCaseText.includes('lead repair team')) {
      const suitableTechnicians = mockPersonnel.filter(p =>
        p.specialization.includes('Technical') && p.leadershipPotential > 80 && p.performanceRating > 4.5
      ).sort((a, b) => b.leadershipPotential - a.leadershipPotential);

      if (suitableTechnicians.length > 0) {
        results.push("Based on leadership potential and technical skills, here are the best-suited technicians:");
        suitableTechnicians.slice(0, 3).forEach(p => {
          results.push(`- ${p.name} (${p.rank}, ${p.unit}) - Leadership: ${p.leadershipPotential}, Performance: ${p.performanceRating}`);
        });
      } else {
        results.push("No highly suitable technicians found for leading a repair team based on current criteria.");
      }
    } else if (lowerCaseText.includes('personnel in') && lowerCaseText.includes('squadron')) {
      const unitNameMatch = lowerCaseText.match(/personnel in (.*) squadron/);
      if (unitNameMatch && unitNameMatch[1]) {
        const unitName = unitNameMatch[1].trim();
        const personnelInUnit = mockPersonnel.filter(p => p.unit.toLowerCase().includes(unitName));
        if (personnelInUnit.length > 0) {
          results.push(`Personnel in ${unitName.charAt(0).toUpperCase() + unitName.slice(1)} Squadron:`);
          personnelInUnit.forEach(p => results.push(`- ${p.name} (${p.rank})`));
        } else {
          results.push(`No personnel found in ${unitName.charAt(0).toUpperCase() + unitName.slice(1)} Squadron.`);
        }
      } else {
        results.push("Please specify the squadron name, e.g., 'personnel in 1 squadron'.");
      }
    } else if (lowerCaseText.includes('attrition risk')) {
      const highRisk = mockPersonnel.filter(p => p.attritionRisk === 'High');
      if (highRisk.length > 0) {
        results.push("Personnel identified with high attrition risk:");
        highRisk.forEach(p => results.push(`- ${p.name} (${p.rank}, ${p.unit})`));
      } else {
        results.push("No personnel currently identified with high attrition risk.");
      }
    } else if (lowerCaseText.includes('training due')) {
      const trainingDuePersonnel = mockPersonnel.filter(p => p.trainingStatus === 'Due' || p.trainingStatus === 'Overdue');
      if (trainingDuePersonnel.length > 0) {
        results.push("Personnel with training due or overdue:");
        trainingDuePersonnel.forEach(p => results.push(`- ${p.name} (${p.rank}, ${p.unit}) - Status: ${p.trainingStatus}`));
      } else {
        results.push("All personnel are current with their training.");
      }
    } else if (lowerCaseText.includes('hello') || lowerCaseText.includes('hi')) {
      results.push("Hello Commander! How can I assist you today?");
    } else if (lowerCaseText.includes('thank you') || lowerCaseText.includes('thanks')) {
      results.push("You're welcome, Commander!");
    } else {
      results.push("I'm sorry, Commander. I can only answer questions related to personnel, training, and readiness at the moment. Please try a query like: 'Who is the best suited technician to lead this new repair team?', 'Show personnel in 1 Squadron', 'Who has high attrition risk?', or 'Who has training due?'.");
    }
    return results;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse([]); // Clear previous responses

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const aiResponse = mockNLP(query);
    setResponse(aiResponse);
    setIsLoading(false);
    setQuery('');
  };

  return (
    <div className="flex flex-col h-full p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Commander's AI Adjutant</h1>
      <p className="text-gray-600 mb-8">Your AI-powered co-pilot for instant personnel insights. Ask me anything about your team's readiness, skills, and more.</p>

      <div className="flex-1 bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6 overflow-y-auto">
        {response.length === 0 && !isLoading ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <Bot className="w-16 h-16 mb-4 text-gray-400" />
            <p className="text-lg">How can I assist you today, Commander?</p>
            <p className="text-sm mt-2">Try asking: "Who is the best suited technician to lead this new repair team?"</p>
          </div>
        ) : (
          <div className="space-y-4">
            {response.map((line, index) => (
              <p key={index} className="text-gray-800 leading-relaxed">{line}</p>
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 text-blue-600">
                <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Thinking...</span>
              </div>
            )}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-200">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask your AI Adjutant..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          disabled={isLoading}
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default AIAdjutant;