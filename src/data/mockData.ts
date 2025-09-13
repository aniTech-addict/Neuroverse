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
  }
];