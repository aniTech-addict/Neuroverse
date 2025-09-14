import { Personnel, Unit } from '../types/personnel';

export const mockPersonnel: Personnel[] = [
  {
    id: '1',
    serviceNumber: 'IAF12345',
    name: 'Wing Commander Arun Prakash',
    rank: 'Wing Commander',
    branch: 'Fighter',
    unit: '1 Squadron',
    specialization: ['Air Combat', 'Electronic Warfare'],
    experience: 15,
    medicalStatus: 'Fit',
    missionReadiness: 95,
    lastDeployment: 'Ladakh Sector',
    trainingStatus: 'Current',
    leadershipPotential: 88,
    attritionRisk: 'Low',
    performanceRating: 4.8,
    securityClearance: 'Top Secret',
    skills: [
      { name: 'Air Combat', level: 'Expert', certificationDate: '2020-03-15', certifyingAuthority: 'IAF Training Command', practicalScore: 95, theoreticalScore: 92 },
      { name: 'Electronic Warfare', level: 'Advanced', certificationDate: '2021-06-10', certifyingAuthority: 'IAF Training Command', practicalScore: 88, theoreticalScore: 90 }
    ],
    deploymentHistory: [
      { location: 'Ladakh Sector', duration: 180, role: 'Flight Leader', startDate: '2023-01-15', endDate: '2023-07-15', performance: 4.9, missionType: 'Border Security', commendations: ['Gallantry in Action'], challenges: ['Extreme Weather'] }
    ],
    trainingRecords: [
      { course: 'Advanced Fighter Tactics', completionDate: '2023-12-10', score: 94, instructor: 'Sqn Ldr Mehta', status: 'Completed', trainingType: 'Combat', duration: 30, location: 'Air Force Academy', cost: 50000 }
    ],
    psychologicalProfile: {
      stressResilience: 92,
      teamwork: 88,
      decisionMaking: 95,
      adaptability: 87,
      leadership: 91,
      lastAssessment: '2024-01-15',
      assessor: 'Dr. Rajesh Kumar',
      recommendations: ['Suitable for high-stress missions', 'Leadership development recommended']
    },
    familyStatus: {
      maritalStatus: 'Married',
      dependents: 2,
      spouseOccupation: 'Teacher',
      childrenAges: [8, 12],
      familyLocation: 'Ambala',
      emergencySupport: true
    },
    awards: [
      { name: 'Vayu Sena Medal', category: 'Gallantry', dateAwarded: '2022-08-15', description: 'For exceptional courage during border operations', awardingAuthority: 'President of India' }
    ],
    disciplinaryRecords: [],
    fitnessScore: 94,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'Punjabi', proficiency: 'Advanced' }
    ],
    emergencyContact: {
      name: 'Sunita Prakash',
      relationship: 'Spouse',
      phone: '+91-9876543210',
      address: 'Ambala Cantt, Haryana'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12345_001',
      retinalScanId: 'RS_IAF12345_001',
      faceRecognitionId: 'FR_IAF12345_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: [
      {
        type: 'Career',
        priority: 'High',
        recommendation: 'Consider for Squadron Commander role within 18 months',
        confidence: 94,
        reasoning: 'High leadership potential, excellent performance record, and strong psychological profile',
        dateGenerated: '2024-01-20',
        status: 'New'
      }
    ]
  },
  {
    id: '2',
    serviceNumber: 'IAF12346',
    name: 'Squadron Leader Priya Gupta',
    rank: 'Squadron Leader',
    branch: 'Technical',
    unit: '2 BRD',
    specialization: ['Avionics', 'Radar Systems'],
    experience: 12,
    medicalStatus: 'Fit',
    missionReadiness: 92,
    lastDeployment: 'Eastern Command',
    trainingStatus: 'Due',
    leadershipPotential: 85,
    attritionRisk: 'Medium',
    performanceRating: 4.6,
    securityClearance: 'Secret',
    skills: [
      { name: 'Avionics Systems', level: 'Expert', certificationDate: '2019-08-20', certifyingAuthority: 'IAF Technical College', practicalScore: 90, theoreticalScore: 91 },
      { name: 'Radar Technology', level: 'Advanced', certificationDate: '2020-11-05', certifyingAuthority: 'IAF Technical College', practicalScore: 85, theoreticalScore: 87 }
    ],
    deploymentHistory: [
      { location: 'Eastern Command', duration: 365, role: 'Technical Officer', startDate: '2022-04-01', endDate: '2023-04-01', performance: 4.7, missionType: 'Training', commendations: [], challenges: ['Logistical Issues'] }
    ],
    trainingRecords: [
      { course: 'Modern Radar Systems', completionDate: '2023-06-15', score: 89, instructor: 'Wg Cdr Patel', status: 'Completed', trainingType: 'Technical', duration: 45, location: 'Pune Training Center', cost: 35000 }
    ],
    psychologicalProfile: {
      stressResilience: 85,
      teamwork: 92,
      decisionMaking: 88,
      adaptability: 91,
      leadership: 82,
      lastAssessment: '2024-01-10',
      assessor: 'Dr. Priya Sharma',
      recommendations: ['Excellent team player', 'Technical leadership potential']
    },
    familyStatus: {
      maritalStatus: 'Single',
      dependents: 0,
      childrenAges: [],
      familyLocation: 'Pune',
      emergencySupport: true
    },
    awards: [
      { name: 'Vishisht Seva Medal', category: 'Service', dateAwarded: '2023-01-26', description: 'For distinguished service in technical field', awardingAuthority: 'President of India' }
    ],
    disciplinaryRecords: [],
    fitnessScore: 88,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'Marathi', proficiency: 'Intermediate' }
    ],
    emergencyContact: {
      name: 'Rajesh Gupta',
      relationship: 'Father',
      phone: '+91-9876543211',
      address: 'Pune, Maharashtra'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12346_001',
      retinalScanId: 'RS_IAF12346_001',
      faceRecognitionId: 'FR_IAF12346_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: []
  },
  {
    id: '3',
    serviceNumber: 'IAF12347',
    name: 'Flight Lieutenant Rohit Sharma',
    rank: 'Flight Lieutenant',
    branch: 'Fighter',
    unit: '18 Squadron',
    specialization: ['Multi-role Combat', 'Air Refueling'],
    experience: 8,
    medicalStatus: 'Under Review',
    missionReadiness: 78,
    lastDeployment: 'Western Command',
    trainingStatus: 'Due',
    leadershipPotential: 75,
    attritionRisk: 'High',
    performanceRating: 4.2,
    securityClearance: 'Secret',
    skills: [
      { name: 'Multi-role Operations', level: 'Advanced', certificationDate: '2022-01-10', certifyingAuthority: 'IAF Combat School', practicalScore: 80, theoreticalScore: 78 },
      { name: 'Air-to-Air Refueling', level: 'Intermediate', certificationDate: '2022-08-25', certifyingAuthority: 'IAF Combat School', practicalScore: 70, theoreticalScore: 72 }
    ],
    deploymentHistory: [
      { location: 'Western Command', duration: 270, role: 'Pilot', startDate: '2023-03-01', endDate: '2023-11-30', performance: 4.3, missionType: 'Combat', commendations: [], challenges: ['Equipment Malfunction'] }
    ],
    trainingRecords: [
      { course: 'Combat Leadership', completionDate: '2024-02-28', score: 76, instructor: 'Wg Cdr Singh', status: 'In Progress', trainingType: 'Leadership', duration: 20, location: 'Leadership Institute', cost: 25000 }
    ],
    psychologicalProfile: {
      stressResilience: 78,
      teamwork: 85,
      decisionMaking: 82,
      adaptability: 88,
      leadership: 75,
      lastAssessment: '2024-01-05',
      assessor: 'Dr. Amit Verma',
      recommendations: ['Stress management training recommended', 'Good potential with proper guidance']
    },
    familyStatus: {
      maritalStatus: 'Married',
      dependents: 1,
      spouseOccupation: 'Software Engineer',
      childrenAges: [2],
      familyLocation: 'Kalaikunda',
      emergencySupport: true
    },
    awards: [],
    disciplinaryRecords: [
      { type: 'Minor', date: '2023-08-15', description: 'Late reporting for duty', action: 'Verbal warning', status: 'Resolved' }
    ],
    fitnessScore: 82,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Intermediate' }
    ],
    emergencyContact: {
      name: 'Neha Sharma',
      relationship: 'Spouse',
      phone: '+91-9876543212',
      address: 'Kalaikunda, West Bengal'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12347_001',
      retinalScanId: 'RS_IAF12347_001',
      faceRecognitionId: 'FR_IAF12347_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: []
  },
  {
    id: '4',
    serviceNumber: 'IAF12348',
    name: 'Air Commodore Vikram Singh',
    rank: 'Air Commodore',
    branch: 'Transport',
    unit: '25 Squadron',
    specialization: ['Strategic Transport', 'Logistics'],
    experience: 22,
    medicalStatus: 'Fit',
    missionReadiness: 96,
    lastDeployment: 'Northern Command',
    trainingStatus: 'Current',
    leadershipPotential: 95,
    attritionRisk: 'Low',
    performanceRating: 4.9,
    securityClearance: 'Top Secret',
    skills: [
      { name: 'Strategic Transport Operations', level: 'Expert', certificationDate: '2018-05-12', certifyingAuthority: 'IAF Transport Command', practicalScore: 97, theoreticalScore: 94 },
      { name: 'Logistics Management', level: 'Expert', certificationDate: '2019-09-08', certifyingAuthority: 'IAF Logistics School', practicalScore: 93, theoreticalScore: 96 }
    ],
    deploymentHistory: [
      { location: 'Northern Command', duration: 240, role: 'Squadron Commander', startDate: '2022-08-01', endDate: '2023-03-30', performance: 4.9, missionType: 'Training', commendations: ['Meritorious Service'], challenges: ['Weather Conditions'] }
    ],
    trainingRecords: [
      { course: 'Advanced Logistics Management', completionDate: '2023-11-20', score: 96, instructor: 'Air Cmde Rao', status: 'Completed', trainingType: 'Technical', duration: 40, location: 'Logistics Institute', cost: 60000 }
    ],
    psychologicalProfile: {
      stressResilience: 94,
      teamwork: 96,
      decisionMaking: 97,
      adaptability: 93,
      leadership: 95,
      lastAssessment: '2024-01-18',
      assessor: 'Dr. Sunita Patel',
      recommendations: ['Ideal for command positions', 'Excellent strategic thinking']
    },
    familyStatus: {
      maritalStatus: 'Married',
      dependents: 3,
      spouseOccupation: 'Doctor',
      childrenAges: [15, 18, 20],
      familyLocation: 'Delhi',
      emergencySupport: true
    },
    awards: [
      { name: 'Ati Vishisht Seva Medal', category: 'Service', dateAwarded: '2023-01-26', description: 'For exceptional service in transport operations', awardingAuthority: 'President of India' }
    ],
    disciplinaryRecords: [],
    fitnessScore: 96,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'French', proficiency: 'Intermediate' }
    ],
    emergencyContact: {
      name: 'Priya Singh',
      relationship: 'Spouse',
      phone: '+91-9876543213',
      address: 'Delhi Cantonment'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12348_001',
      retinalScanId: 'RS_IAF12348_001',
      faceRecognitionId: 'FR_IAF12348_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: [
      {
        type: 'Career',
        priority: 'High',
        recommendation: 'Consider for Wing Commander position',
        confidence: 96,
        reasoning: 'Outstanding leadership record and strategic expertise',
        dateGenerated: '2024-01-22',
        status: 'New'
      }
    ]
  },
  {
    id: '5',
    serviceNumber: 'IAF12349',
    name: 'Flight Lieutenant Ananya Rao',
    rank: 'Flight Lieutenant',
    branch: 'Helicopter',
    unit: '109 HU',
    specialization: ['Helicopter Operations', 'Search and Rescue'],
    experience: 6,
    medicalStatus: 'Fit',
    missionReadiness: 89,
    lastDeployment: 'Northeast Sector',
    trainingStatus: 'Current',
    leadershipPotential: 82,
    attritionRisk: 'Low',
    performanceRating: 4.5,
    securityClearance: 'Secret',
    skills: [
      { name: 'Helicopter Piloting', level: 'Advanced', certificationDate: '2021-03-15', certifyingAuthority: 'IAF Helicopter School', practicalScore: 88, theoreticalScore: 85 },
      { name: 'Search and Rescue', level: 'Advanced', certificationDate: '2022-07-20', certifyingAuthority: 'IAF SAR Training Center', practicalScore: 92, theoreticalScore: 89 }
    ],
    deploymentHistory: [
      { location: 'Northeast Sector', duration: 150, role: 'SAR Pilot', startDate: '2023-06-01', endDate: '2023-11-01', performance: 4.6, missionType: 'Humanitarian', commendations: ['Life Saving'], challenges: ['Terrain Difficulties'] }
    ],
    trainingRecords: [
      { course: 'Advanced SAR Techniques', completionDate: '2023-09-10', score: 91, instructor: 'Sqn Ldr Kapoor', status: 'Completed', trainingType: 'Technical', duration: 25, location: 'SAR Training Center', cost: 30000 }
    ],
    psychologicalProfile: {
      stressResilience: 89,
      teamwork: 94,
      decisionMaking: 87,
      adaptability: 95,
      leadership: 83,
      lastAssessment: '2024-01-12',
      assessor: 'Dr. Ramesh Jain',
      recommendations: ['Excellent in high-pressure situations', 'Strong humanitarian focus']
    },
    familyStatus: {
      maritalStatus: 'Single',
      dependents: 0,
      childrenAges: [],
      familyLocation: 'Guwahati',
      emergencySupport: true
    },
    awards: [
      { name: 'Mention in Despatches', category: 'Gallantry', dateAwarded: '2023-12-15', description: 'For successful rescue operations', awardingAuthority: 'Chief of Air Staff' }
    ],
    disciplinaryRecords: [],
    fitnessScore: 91,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'Assamese', proficiency: 'Intermediate' }
    ],
    emergencyContact: {
      name: 'Dr. Suresh Rao',
      relationship: 'Father',
      phone: '+91-9876543214',
      address: 'Guwahati, Assam'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12349_001',
      retinalScanId: 'RS_IAF12349_001',
      faceRecognitionId: 'FR_IAF12349_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: []
  },
  {
    id: '6',
    serviceNumber: 'IAF12350',
    name: 'Wing Commander Karan Mehta',
    rank: 'Wing Commander',
    branch: 'Intelligence',
    unit: 'Intelligence Directorate',
    specialization: ['Signals Intelligence', 'Cyber Warfare'],
    experience: 14,
    medicalStatus: 'Fit',
    missionReadiness: 93,
    lastDeployment: 'Cyber Operations Center',
    trainingStatus: 'Current',
    leadershipPotential: 89,
    attritionRisk: 'Medium',
    performanceRating: 4.7,
    securityClearance: 'Top Secret',
    skills: [
      { name: 'Signals Intelligence', level: 'Expert', certificationDate: '2020-02-28', certifyingAuthority: 'IAF Intelligence School', practicalScore: 94, theoreticalScore: 91 },
      { name: 'Cyber Warfare', level: 'Advanced', certificationDate: '2021-11-15', certifyingAuthority: 'IAF Cyber School', practicalScore: 87, theoreticalScore: 89 }
    ],
    deploymentHistory: [
      { location: 'Cyber Operations Center', duration: 300, role: 'Intelligence Officer', startDate: '2022-01-01', endDate: '2022-10-30', performance: 4.8, missionType: 'Training', commendations: ['Intelligence Excellence'], challenges: ['Technical Complexity'] }
    ],
    trainingRecords: [
      { course: 'Advanced Cyber Operations', completionDate: '2023-08-05', score: 92, instructor: 'Wg Cdr Sharma', status: 'Completed', trainingType: 'Technical', duration: 35, location: 'Cyber Training Institute', cost: 45000 }
    ],
    psychologicalProfile: {
      stressResilience: 91,
      teamwork: 87,
      decisionMaking: 94,
      adaptability: 89,
      leadership: 88,
      lastAssessment: '2024-01-08',
      assessor: 'Dr. Meera Gupta',
      recommendations: ['Excellent analytical skills', 'Strategic intelligence mindset']
    },
    familyStatus: {
      maritalStatus: 'Married',
      dependents: 1,
      spouseOccupation: 'Intelligence Analyst',
      childrenAges: [5],
      familyLocation: 'New Delhi',
      emergencySupport: true
    },
    awards: [
      { name: 'Vishisht Seva Medal', category: 'Service', dateAwarded: '2022-08-15', description: 'For outstanding intelligence work', awardingAuthority: 'President of India' }
    ],
    disciplinaryRecords: [],
    fitnessScore: 89,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'Chinese', proficiency: 'Intermediate' }
    ],
    emergencyContact: {
      name: 'Poonam Mehta',
      relationship: 'Spouse',
      phone: '+91-9876543215',
      address: 'New Delhi'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12350_001',
      retinalScanId: 'RS_IAF12350_001',
      faceRecognitionId: 'FR_IAF12350_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: [
      {
        type: 'Career',
        priority: 'Medium',
        recommendation: 'Specialized training in emerging cyber threats',
        confidence: 88,
        reasoning: 'Strong technical background with room for advanced specialization',
        dateGenerated: '2024-01-25',
        status: 'New'
      }
    ]
  },
  {
    id: '7',
    serviceNumber: 'IAF12351',
    name: 'Group Captain Rajesh Kumar',
    rank: 'Group Captain',
    branch: 'Fighter',
    unit: '7 Squadron',
    specialization: ['Air Superiority', 'Beyond Visual Range Combat'],
    experience: 18,
    medicalStatus: 'Fit',
    missionReadiness: 97,
    lastDeployment: 'Western Border',
    trainingStatus: 'Current',
    leadershipPotential: 92,
    attritionRisk: 'Low',
    performanceRating: 4.9,
    securityClearance: 'Top Secret',
    skills: [
      { name: 'Air Superiority Tactics', level: 'Expert', certificationDate: '2019-07-15', certifyingAuthority: 'IAF Fighter School', practicalScore: 96, theoreticalScore: 93 },
      { name: 'BVR Combat', level: 'Expert', certificationDate: '2020-09-20', certifyingAuthority: 'IAF Fighter School', practicalScore: 95, theoreticalScore: 94 }
    ],
    deploymentHistory: [
      { location: 'Western Border', duration: 200, role: 'Squadron Commander', startDate: '2023-02-01', endDate: '2023-08-20', performance: 4.9, missionType: 'Combat', commendations: ['Air Superiority Excellence'], challenges: ['High Altitude Operations'] }
    ],
    trainingRecords: [
      { course: 'Advanced Air Combat Tactics', completionDate: '2023-10-15', score: 97, instructor: 'Air Cmde Singh', status: 'Completed', trainingType: 'Combat', duration: 45, location: 'Air Combat School', cost: 55000 }
    ],
    psychologicalProfile: {
      stressResilience: 95,
      teamwork: 90,
      decisionMaking: 96,
      adaptability: 92,
      leadership: 94,
      lastAssessment: '2024-01-20',
      assessor: 'Dr. Anita Sharma',
      recommendations: ['Exceptional combat leadership', 'Ideal for command positions']
    },
    familyStatus: {
      maritalStatus: 'Married',
      dependents: 2,
      spouseOccupation: 'Teacher',
      childrenAges: [10, 14],
      familyLocation: 'Jodhpur',
      emergencySupport: true
    },
    awards: [
      { name: 'Vir Chakra', category: 'Gallantry', dateAwarded: '2021-12-15', description: 'For exceptional bravery in air combat', awardingAuthority: 'President of India' }
    ],
    disciplinaryRecords: [],
    fitnessScore: 95,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'Rajasthani', proficiency: 'Advanced' }
    ],
    emergencyContact: {
      name: 'Priya Kumar',
      relationship: 'Spouse',
      phone: '+91-9876543216',
      address: 'Jodhpur, Rajasthan'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12351_001',
      retinalScanId: 'RS_IAF12351_001',
      faceRecognitionId: 'FR_IAF12351_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: [
      {
        type: 'Career',
        priority: 'High',
        recommendation: 'Consider for Air Commodore position',
        confidence: 95,
        reasoning: 'Outstanding combat record and leadership capabilities',
        dateGenerated: '2024-01-28',
        status: 'New'
      }
    ]
  },
  {
    id: '8',
    serviceNumber: 'IAF12352',
    name: 'Squadron Leader Meera Patel',
    rank: 'Squadron Leader',
    branch: 'Medical',
    unit: 'Medical Directorate',
    specialization: ['Aviation Medicine', 'Trauma Care'],
    experience: 11,
    medicalStatus: 'Fit',
    missionReadiness: 91,
    lastDeployment: 'Field Hospital',
    trainingStatus: 'Current',
    leadershipPotential: 87,
    attritionRisk: 'Low',
    performanceRating: 4.6,
    securityClearance: 'Secret',
    skills: [
      { name: 'Aviation Medicine', level: 'Expert', certificationDate: '2020-04-10', certifyingAuthority: 'IAF Medical College', practicalScore: 93, theoreticalScore: 95 },
      { name: 'Trauma Care', level: 'Advanced', certificationDate: '2021-08-25', certifyingAuthority: 'IAF Medical College', practicalScore: 89, theoreticalScore: 91 }
    ],
    deploymentHistory: [
      { location: 'Field Hospital', duration: 180, role: 'Medical Officer', startDate: '2023-05-01', endDate: '2023-11-01', performance: 4.7, missionType: 'Humanitarian', commendations: ['Medical Excellence'], challenges: ['Resource Constraints'] }
    ],
    trainingRecords: [
      { course: 'Advanced Trauma Medicine', completionDate: '2023-07-20', score: 94, instructor: 'Dr. Rajan Gupta', status: 'Completed', trainingType: 'Academic', duration: 30, location: 'Medical Institute', cost: 40000 }
    ],
    psychologicalProfile: {
      stressResilience: 88,
      teamwork: 95,
      decisionMaking: 90,
      adaptability: 93,
      leadership: 86,
      lastAssessment: '2024-01-15',
      assessor: 'Dr. Sunil Verma',
      recommendations: ['Excellent medical leadership', 'Strong humanitarian focus']
    },
    familyStatus: {
      maritalStatus: 'Married',
      dependents: 1,
      spouseOccupation: 'Doctor',
      childrenAges: [3],
      familyLocation: 'Bangalore',
      emergencySupport: true
    },
    awards: [
      { name: 'Sena Medal', category: 'Gallantry', dateAwarded: '2023-09-15', description: 'For life-saving medical intervention', awardingAuthority: 'President of India' }
    ],
    disciplinaryRecords: [],
    fitnessScore: 90,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'Kannada', proficiency: 'Intermediate' }
    ],
    emergencyContact: {
      name: 'Dr. Amit Patel',
      relationship: 'Spouse',
      phone: '+91-9876543217',
      address: 'Bangalore, Karnataka'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12352_001',
      retinalScanId: 'RS_IAF12352_001',
      faceRecognitionId: 'FR_IAF12352_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: []
  },
  {
    id: '9',
    serviceNumber: 'IAF12353',
    name: 'Flight Lieutenant Arjun Singh',
    rank: 'Flight Lieutenant',
    branch: 'Fighter',
    unit: '45 Squadron',
    specialization: ['Precision Strike', 'Night Operations'],
    experience: 7,
    medicalStatus: 'Fit',
    missionReadiness: 85,
    lastDeployment: 'Southern Command',
    trainingStatus: 'Due',
    leadershipPotential: 78,
    attritionRisk: 'Medium',
    performanceRating: 4.3,
    securityClearance: 'Secret',
    skills: [
      { name: 'Precision Strike Operations', level: 'Advanced', certificationDate: '2022-02-15', certifyingAuthority: 'IAF Strike School', practicalScore: 85, theoreticalScore: 82 },
      { name: 'Night Vision Operations', level: 'Advanced', certificationDate: '2022-11-10', certifyingAuthority: 'IAF Night Ops School', practicalScore: 87, theoreticalScore: 84 }
    ],
    deploymentHistory: [
      { location: 'Southern Command', duration: 120, role: 'Strike Pilot', startDate: '2023-08-01', endDate: '2023-12-01', performance: 4.4, missionType: 'Combat', commendations: [], challenges: ['Weather Conditions'] }
    ],
    trainingRecords: [
      { course: 'Precision Strike Training', completionDate: '2024-01-10', score: 86, instructor: 'Sqn Ldr Rao', status: 'Completed', trainingType: 'Combat', duration: 28, location: 'Strike Training Center', cost: 38000 }
    ],
    psychologicalProfile: {
      stressResilience: 84,
      teamwork: 88,
      decisionMaking: 86,
      adaptability: 90,
      leadership: 79,
      lastAssessment: '2024-01-10',
      assessor: 'Dr. Meera Jain',
      recommendations: ['Good potential for leadership development', 'Strong technical skills']
    },
    familyStatus: {
      maritalStatus: 'Single',
      dependents: 0,
      childrenAges: [],
      familyLocation: 'Hyderabad',
      emergencySupport: true
    },
    awards: [],
    disciplinaryRecords: [],
    fitnessScore: 87,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'Telugu', proficiency: 'Intermediate' }
    ],
    emergencyContact: {
      name: 'Colonel Ramesh Singh',
      relationship: 'Father',
      phone: '+91-9876543218',
      address: 'Hyderabad, Telangana'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12353_001',
      retinalScanId: 'RS_IAF12353_001',
      faceRecognitionId: 'FR_IAF12353_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: [
      {
        type: 'Training',
        priority: 'Medium',
        recommendation: 'Advanced leadership training recommended',
        confidence: 82,
        reasoning: 'Shows promise in technical skills, needs leadership development',
        dateGenerated: '2024-01-30',
        status: 'New'
      }
    ]
  },
  {
    id: '10',
    serviceNumber: 'IAF12354',
    name: 'Air Marshal Sunita Sharma',
    rank: 'Air Marshal',
    branch: 'Administration',
    unit: 'Air Headquarters',
    specialization: ['Strategic Planning', 'Resource Management'],
    experience: 28,
    medicalStatus: 'Fit',
    missionReadiness: 98,
    lastDeployment: 'Strategic Command',
    trainingStatus: 'Current',
    leadershipPotential: 98,
    attritionRisk: 'Low',
    performanceRating: 4.9,
    securityClearance: 'Top Secret',
    skills: [
      { name: 'Strategic Planning', level: 'Expert', certificationDate: '2016-03-20', certifyingAuthority: 'National Defence College', practicalScore: 98, theoreticalScore: 97 },
      { name: 'Resource Management', level: 'Expert', certificationDate: '2017-08-15', certifyingAuthority: 'Defence Management Institute', practicalScore: 96, theoreticalScore: 95 }
    ],
    deploymentHistory: [
      { location: 'Strategic Command', duration: 365, role: 'Chief of Staff', startDate: '2022-01-01', endDate: '2022-12-31', performance: 4.9, missionType: 'Training', commendations: ['Strategic Excellence'], challenges: ['Complex Coordination'] }
    ],
    trainingRecords: [
      { course: 'National Security Strategy', completionDate: '2023-05-15', score: 98, instructor: 'Chief of Defence Staff', status: 'Completed', trainingType: 'Leadership', duration: 60, location: 'National Defence College', cost: 75000 }
    ],
    psychologicalProfile: {
      stressResilience: 97,
      teamwork: 95,
      decisionMaking: 98,
      adaptability: 96,
      leadership: 98,
      lastAssessment: '2024-01-25',
      assessor: 'Dr. Rajesh Verma',
      recommendations: ['Exceptional strategic leadership', 'Ideal for highest command positions']
    },
    familyStatus: {
      maritalStatus: 'Married',
      dependents: 2,
      spouseOccupation: 'Professor',
      childrenAges: [22, 25],
      familyLocation: 'New Delhi',
      emergencySupport: true
    },
    awards: [
      { name: 'Param Vishisht Seva Medal', category: 'Service', dateAwarded: '2022-01-26', description: 'For exceptional service in strategic planning', awardingAuthority: 'President of India' }
    ],
    disciplinaryRecords: [],
    fitnessScore: 92,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'Sanskrit', proficiency: 'Intermediate' }
    ],
    emergencyContact: {
      name: 'Dr. Ramesh Sharma',
      relationship: 'Spouse',
      phone: '+91-9876543219',
      address: 'New Delhi'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12354_001',
      retinalScanId: 'RS_IAF12354_001',
      faceRecognitionId: 'FR_IAF12354_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: [
      {
        type: 'Career',
        priority: 'High',
        recommendation: 'Consider for Chief of Air Staff position',
        confidence: 97,
        reasoning: 'Outstanding strategic vision and leadership record',
        dateGenerated: '2024-02-01',
        status: 'New'
      }
    ]
  },
  {
    id: '11',
    serviceNumber: 'IAF12355',
    name: 'Squadron Leader Ravi Kumar',
    rank: 'Squadron Leader',
    branch: 'Technical',
    unit: '3 BRD',
    specialization: ['Aircraft Maintenance', 'Engine Systems'],
    experience: 13,
    medicalStatus: 'Fit',
    missionReadiness: 88,
    lastDeployment: 'Maintenance Command',
    trainingStatus: 'Current',
    leadershipPotential: 84,
    attritionRisk: 'Low',
    performanceRating: 4.5,
    securityClearance: 'Secret',
    skills: [
      { name: 'Aircraft Maintenance', level: 'Expert', certificationDate: '2019-11-10', certifyingAuthority: 'IAF Technical College', practicalScore: 92, theoreticalScore: 89 },
      { name: 'Engine Systems', level: 'Advanced', certificationDate: '2020-06-25', certifyingAuthority: 'IAF Technical College', practicalScore: 88, theoreticalScore: 91 }
    ],
    deploymentHistory: [
      { location: 'Maintenance Command', duration: 240, role: 'Technical Officer', startDate: '2022-09-01', endDate: '2023-05-01', performance: 4.6, missionType: 'Training', commendations: ['Technical Excellence'], challenges: ['Equipment Shortages'] }
    ],
    trainingRecords: [
      { course: 'Advanced Aircraft Maintenance', completionDate: '2023-08-20', score: 90, instructor: 'Wg Cdr Jain', status: 'Completed', trainingType: 'Technical', duration: 35, location: 'Technical Training Institute', cost: 42000 }
    ],
    psychologicalProfile: {
      stressResilience: 86,
      teamwork: 91,
      decisionMaking: 89,
      adaptability: 88,
      leadership: 85,
      lastAssessment: '2024-01-18',
      assessor: 'Dr. Priya Singh',
      recommendations: ['Excellent technical leadership', 'Strong problem-solving skills']
    },
    familyStatus: {
      maritalStatus: 'Married',
      dependents: 1,
      spouseOccupation: 'Teacher',
      childrenAges: [6],
      familyLocation: 'Nagpur',
      emergencySupport: true
    },
    awards: [
      { name: 'Vishisht Seva Medal', category: 'Service', dateAwarded: '2023-08-15', description: 'For outstanding technical service', awardingAuthority: 'President of India' }
    ],
    disciplinaryRecords: [],
    fitnessScore: 85,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'Marathi', proficiency: 'Advanced' }
    ],
    emergencyContact: {
      name: 'Meera Kumar',
      relationship: 'Spouse',
      phone: '+91-9876543220',
      address: 'Nagpur, Maharashtra'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12355_001',
      retinalScanId: 'RS_IAF12355_001',
      faceRecognitionId: 'FR_IAF12355_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: []
  },
  {
    id: '12',
    serviceNumber: 'IAF12356',
    name: 'Flight Lieutenant Priya Nair',
    rank: 'Flight Lieutenant',
    branch: 'Helicopter',
    unit: '151 HU',
    specialization: ['Helicopter Gunnery', 'Close Air Support'],
    experience: 5,
    medicalStatus: 'Fit',
    missionReadiness: 82,
    lastDeployment: 'Northern Borders',
    trainingStatus: 'Current',
    leadershipPotential: 76,
    attritionRisk: 'Medium',
    performanceRating: 4.1,
    securityClearance: 'Secret',
    skills: [
      { name: 'Helicopter Gunnery', level: 'Advanced', certificationDate: '2022-05-15', certifyingAuthority: 'IAF Gunnery School', practicalScore: 83, theoreticalScore: 80 },
      { name: 'Close Air Support', level: 'Intermediate', certificationDate: '2022-12-10', certifyingAuthority: 'IAF CAS Training Center', practicalScore: 78, theoreticalScore: 76 }
    ],
    deploymentHistory: [
      { location: 'Northern Borders', duration: 90, role: 'Gunnery Pilot', startDate: '2023-10-01', endDate: '2024-01-01', performance: 4.2, missionType: 'Combat', commendations: [], challenges: ['Mountain Terrain'] }
    ],
    trainingRecords: [
      { course: 'Helicopter Gunnery Training', completionDate: '2023-12-15', score: 84, instructor: 'Sqn Ldr Verma', status: 'Completed', trainingType: 'Combat', duration: 25, location: 'Gunnery Training Center', cost: 35000 }
    ],
    psychologicalProfile: {
      stressResilience: 81,
      teamwork: 87,
      decisionMaking: 83,
      adaptability: 89,
      leadership: 77,
      lastAssessment: '2024-01-12',
      assessor: 'Dr. Amit Kumar',
      recommendations: ['Good potential with experience', 'Focus on leadership development']
    },
    familyStatus: {
      maritalStatus: 'Single',
      dependents: 0,
      childrenAges: [],
      familyLocation: 'Thiruvananthapuram',
      emergencySupport: true
    },
    awards: [],
    disciplinaryRecords: [],
    fitnessScore: 84,
    languageProficiency: [
      { language: 'Hindi', proficiency: 'Native' },
      { language: 'English', proficiency: 'Advanced' },
      { language: 'Malayalam', proficiency: 'Advanced' }
    ],
    emergencyContact: {
      name: 'Dr. Rajan Nair',
      relationship: 'Father',
      phone: '+91-9876543221',
      address: 'Thiruvananthapuram, Kerala'
    },
    biometricData: {
      fingerprintId: 'FP_IAF12356_001',
      retinalScanId: 'RS_IAF12356_001',
      faceRecognitionId: 'FR_IAF12356_001',
      lastUpdated: '2024-01-01'
    },
    aiRecommendations: [
      {
        type: 'Training',
        priority: 'Medium',
        recommendation: 'Advanced combat training recommended',
        confidence: 79,
        reasoning: 'Shows promise in gunnery skills, needs more combat experience',
        dateGenerated: '2024-02-05',
        status: 'New'
      }
    ]
  }
];

export const mockUnits: Unit[] = [
  {
    id: '1',
    name: '1 Squadron "Tigers"',
    location: 'Ambala Air Force Station',
    strength: 185,
    requiredStrength: 200,
    readinessLevel: 88,
    criticalShortages: ['Flight Engineers', 'Electronic Warfare Specialists'],
    commandStructure: {
      commandingOfficer: 'Group Captain Vikram Singh',
      deputyCommander: 'Wing Commander Arun Prakash',
      seniorOfficers: ['Squadron Leader Rajesh Kumar', 'Squadron Leader Priya Mehta'],
      reportingStructure: [
        { level: 1, positions: ['Group Captain'], personnelCount: 1 },
        { level: 2, positions: ['Wing Commander'], personnelCount: 3 },
        { level: 3, positions: ['Squadron Leader'], personnelCount: 8 },
        { level: 4, positions: ['Flight Lieutenant'], personnelCount: 15 }
      ]
    },
    equipment: [
      { type: 'Fighter Aircraft', model: 'Sukhoi Su-30MKI', quantity: 18, condition: 'Good', lastMaintenance: '2024-01-15', operationalStatus: 94.00 }
    ],
    operationalStatus: 'Active',
    lastInspection: '2024-01-10',
    budget: {
      allocated: 50000000,
      spent: 32000000,
      remaining: 18000000,
      categories: [
        { name: 'Operations', allocated: 25000000, spent: 18000000 },
        { name: 'Maintenance', allocated: 15000000, spent: 9000000 },
        { name: 'Training', allocated: 10000000, spent: 5000000 }
      ]
    }
  },
  {
    id: '2',
    name: '18 Squadron "Flying Bullets"',
    location: 'Kalaikunda Air Force Station',
    strength: 192,
    requiredStrength: 210,
    readinessLevel: 82,
    criticalShortages: ['Pilots', 'Avionics Technicians'],
    commandStructure: {
      commandingOfficer: 'Group Captain Suresh Reddy',
      deputyCommander: 'Wing Commander Anita Sharma',
      seniorOfficers: ['Squadron Leader Rohit Sharma', 'Squadron Leader Kavita Nair'],
      reportingStructure: [
        { level: 1, positions: ['Group Captain'], personnelCount: 1 },
        { level: 2, positions: ['Wing Commander'], personnelCount: 2 },
        { level: 3, positions: ['Squadron Leader'], personnelCount: 6 },
        { level: 4, positions: ['Flight Lieutenant'], personnelCount: 12 }
      ]
    },
    equipment: [
      { type: 'Fighter Aircraft', model: 'MiG-29', quantity: 16, condition: 'Fair', lastMaintenance: '2024-01-08', operationalStatus: 87.00 }
    ],
    operationalStatus: 'Training',
    lastInspection: '2024-01-05',
    budget: {
      allocated: 45000000,
      spent: 28000000,
      remaining: 17000000,
      categories: []
    }
  },
  {
    id: '3',
    name: '2 BRD "Winged Arrows"',
    location: 'Pune Air Force Station',
    strength: 156,
    requiredStrength: 175,
    readinessLevel: 91,
    criticalShortages: ['Radar Specialists'],
    commandStructure: {
      commandingOfficer: 'Group Captain Meera Joshi',
      deputyCommander: 'Wing Commander Priya Gupta',
      seniorOfficers: ['Squadron Leader Amit Patel', 'Squadron Leader Ravi Kumar'],
      reportingStructure: [
        { level: 1, positions: ['Group Captain'], personnelCount: 1 },
        { level: 2, positions: ['Wing Commander'], personnelCount: 2 },
        { level: 3, positions: ['Squadron Leader'], personnelCount: 5 },
        { level: 4, positions: ['Flight Lieutenant'], personnelCount: 10 }
      ]
    },
    equipment: [
      { type: 'Radar System', model: 'AESA Radar', quantity: 8, condition: 'Excellent', lastMaintenance: '2024-01-20', operationalStatus: 98.00 }
    ],
    operationalStatus: 'Active',
    lastInspection: '2024-01-18',
    budget: {
      allocated: 35000000,
      spent: 22000000,
      remaining: 13000000,
      categories: []
    }
  },
  {
    id: '4',
    name: '25 Squadron "Himalayan Eagles"',
    location: 'Chandigarh Air Force Station',
    strength: 178,
    requiredStrength: 190,
    readinessLevel: 94,
    criticalShortages: ['Transport Pilots'],
    commandStructure: {
      commandingOfficer: 'Group Captain Rajesh Verma',
      deputyCommander: 'Wing Commander Vikram Singh',
      seniorOfficers: ['Squadron Leader Amit Sharma', 'Squadron Leader Sunita Patel'],
      reportingStructure: [
        { level: 1, positions: ['Group Captain'], personnelCount: 1 },
        { level: 2, positions: ['Wing Commander'], personnelCount: 2 },
        { level: 3, positions: ['Squadron Leader'], personnelCount: 7 },
        { level: 4, positions: ['Flight Lieutenant'], personnelCount: 14 }
      ]
    },
    equipment: [
      { type: 'Transport Aircraft', model: 'C-130J Super Hercules', quantity: 12, condition: 'Excellent', lastMaintenance: '2024-01-12', operationalStatus: 96.00 }
    ],
    operationalStatus: 'Active',
    lastInspection: '2024-01-14',
    budget: {
      allocated: 42000000,
      spent: 25000000,
      remaining: 17000000,
      categories: [
        { name: 'Operations', allocated: 20000000, spent: 15000000 },
        { name: 'Maintenance', allocated: 12000000, spent: 7000000 },
        { name: 'Training', allocated: 10000000, spent: 3000000 }
      ]
    }
  },
  {
    id: '5',
    name: '109 Helicopter Unit "Guardians"',
    location: 'Guwahati Air Force Station',
    strength: 145,
    requiredStrength: 160,
    readinessLevel: 87,
    criticalShortages: ['Helicopter Technicians', 'SAR Specialists'],
    commandStructure: {
      commandingOfficer: 'Group Captain Ramesh Kumar',
      deputyCommander: 'Wing Commander Ananya Rao',
      seniorOfficers: ['Squadron Leader Deepak Jain', 'Squadron Leader Meera Singh'],
      reportingStructure: [
        { level: 1, positions: ['Group Captain'], personnelCount: 1 },
        { level: 2, positions: ['Wing Commander'], personnelCount: 2 },
        { level: 3, positions: ['Squadron Leader'], personnelCount: 4 },
        { level: 4, positions: ['Flight Lieutenant'], personnelCount: 8 }
      ]
    },
    equipment: [
      { type: 'Helicopter', model: 'Mi-17V5', quantity: 10, condition: 'Good', lastMaintenance: '2024-01-18', operationalStatus: 89.00 }
    ],
    operationalStatus: 'Active',
    lastInspection: '2024-01-16',
    budget: {
      allocated: 38000000,
      spent: 24000000,
      remaining: 14000000,
      categories: [
        { name: 'Operations', allocated: 18000000, spent: 12000000 },
        { name: 'Maintenance', allocated: 10000000, spent: 8000000 },
        { name: 'Training', allocated: 10000000, spent: 4000000 }
      ]
    }
  },
  {
    id: '6',
    name: '45 Squadron "Flying Daggers"',
    location: 'Sulur Air Force Station',
    strength: 167,
    requiredStrength: 180,
    readinessLevel: 89,
    criticalShortages: ['Strike Pilots', 'Weapons Specialists'],
    commandStructure: {
      commandingOfficer: 'Group Captain Arjun Singh',
      deputyCommander: 'Wing Commander Rajesh Kumar',
      seniorOfficers: ['Squadron Leader Vikram Rao', 'Squadron Leader Priya Sharma'],
      reportingStructure: [
        { level: 1, positions: ['Group Captain'], personnelCount: 1 },
        { level: 2, positions: ['Wing Commander'], personnelCount: 2 },
        { level: 3, positions: ['Squadron Leader'], personnelCount: 6 },
        { level: 4, positions: ['Flight Lieutenant'], personnelCount: 13 }
      ]
    },
    equipment: [
      { type: 'Strike Aircraft', model: 'Dassault Mirage 2000', quantity: 14, condition: 'Good', lastMaintenance: '2024-01-22', operationalStatus: 91.00 }
    ],
    operationalStatus: 'Active',
    lastInspection: '2024-01-20',
    budget: {
      allocated: 48000000,
      spent: 29000000,
      remaining: 19000000,
      categories: [
        { name: 'Operations', allocated: 24000000, spent: 17000000 },
        { name: 'Maintenance', allocated: 14000000, spent: 8000000 },
        { name: 'Training', allocated: 10000000, spent: 4000000 }
      ]
    }
  }
];
