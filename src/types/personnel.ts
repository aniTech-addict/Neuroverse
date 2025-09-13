export interface Personnel {
  id: string;
  serviceNumber: string;
  name: string;
  rank: string;
  branch: string;
  unit: string;
  specialization: string[];
  experience: number;
  medicalStatus: 'Fit' | 'Unfit' | 'Under Review';
  missionReadiness: number;
  lastDeployment: string;
  trainingStatus: 'Current' | 'Due' | 'Overdue';
  leadershipPotential: number;
  attritionRisk: 'Low' | 'Medium' | 'High';
  skills: Skill[];
  deploymentHistory: Deployment[];
  trainingRecords: TrainingRecord[];
  performanceRating: number;
  securityClearance: string;
  psychologicalProfile: PsychologicalProfile;
  familyStatus: FamilyStatus;
  awards: Award[];
  disciplinaryRecords: DisciplinaryRecord[];
  fitnessScore: number;
  languageProficiency: LanguageSkill[];
  emergencyContact: EmergencyContact;
  biometricData: BiometricData;
  aiRecommendations: AIRecommendation[];
}

export interface Skill {
  name: string;
  level: 'Novice' | 'Intermediate' | 'Advanced' | 'Expert';
  certificationDate: string;
  expiryDate?: string;
  certifyingAuthority: string;
  practicalScore: number;
  theoreticalScore: number;
}

export interface Deployment {
  location: string;
  duration: number;
  role: string;
  startDate: string;
  endDate: string;
  performance: number;
  missionType: 'Combat' | 'Training' | 'Peacekeeping' | 'Humanitarian' | 'Border Security';
  commendations: string[];
  challenges: string[];
}

export interface TrainingRecord {
  course: string;
  completionDate: string;
  score: number;
  instructor: string;
  status: 'Completed' | 'In Progress' | 'Scheduled';
  trainingType: 'Technical' | 'Leadership' | 'Combat' | 'Academic' | 'Physical';
  duration: number;
  location: string;
  cost: number;
}

export interface PsychologicalProfile {
  stressResilience: number;
  teamwork: number;
  decisionMaking: number;
  adaptability: number;
  leadership: number;
  lastAssessment: string;
  assessor: string;
  recommendations: string[];
}

export interface FamilyStatus {
  maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
  dependents: number;
  spouseOccupation?: string;
  childrenAges: number[];
  familyLocation: string;
  emergencySupport: boolean;
}

export interface Award {
  name: string;
  category: 'Gallantry' | 'Service' | 'Academic' | 'Sports' | 'Technical';
  dateAwarded: string;
  description: string;
  awardingAuthority: string;
}

export interface DisciplinaryRecord {
  type: 'Minor' | 'Major' | 'Court Martial';
  date: string;
  description: string;
  action: string;
  status: 'Active' | 'Resolved' | 'Appealed';
}

export interface LanguageSkill {
  language: string;
  proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Native';
  certification?: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  address: string;
}

export interface BiometricData {
  fingerprintId: string;
  retinalScanId: string;
  faceRecognitionId: string;
  lastUpdated: string;
}

export interface AIRecommendation {
  type: 'Career' | 'Training' | 'Deployment' | 'Health' | 'Performance';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  recommendation: string;
  confidence: number;
  reasoning: string;
  dateGenerated: string;
  status: 'New' | 'Reviewed' | 'Implemented' | 'Dismissed';
}

export interface Unit {
  id: string;
  name: string;
  location: string;
  strength: number;
  requiredStrength: number;
  readinessLevel: number;
  criticalShortages: string[];
  commandStructure: CommandStructure;
  equipment: Equipment[];
  operationalStatus: 'Active' | 'Training' | 'Maintenance' | 'Standby';
  lastInspection: string;
  budget: Budget;
}

export interface CommandStructure {
  commandingOfficer: string;
  deputyCommander?: string;
  seniorOfficers: string[];
  reportingStructure: ReportingLevel[];
}

export interface ReportingLevel {
  level: number;
  positions: string[];
  personnelCount: number;
}

export interface Equipment {
  type: string;
  model: string;
  quantity: number;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  lastMaintenance: string;
  operationalStatus: number;
}

export interface Budget {
  allocated: number;
  spent: number;
  remaining: number;
  categories: BudgetCategory[];
}

export interface BudgetCategory {
  name: string;
  allocated: number;
  spent: number;
}

export interface UserRole {
  role: 'Commander' | 'HR Manager' | 'Medical Officer' | 'Training Officer';
  permissions: string[];
  accessLevel: 'Base' | 'Command' | 'Air HQ';
  securityClearance: 'Confidential' | 'Secret' | 'Top Secret';
  dataAccessScope: string[];
  auditTrail: AuditEntry[];
}

export interface AuditEntry {
  action: string;
  timestamp: string;
  resource: string;
  ipAddress: string;
  result: 'Success' | 'Failed' | 'Blocked';
}

export interface MissionRequirement {
  id: string;
  missionType: string;
  requiredSkills: string[];
  personnelCount: number;
  duration: number;
  location: string;
  securityLevel: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Critical';
  startDate: string;
  endDate: string;
  status: 'Planning' | 'Active' | 'Completed' | 'Cancelled';
}

export interface TrainingProgram {
  id: string;
  name: string;
  type: 'Technical' | 'Leadership' | 'Combat' | 'Academic' | 'Physical';
  duration: number;
  capacity: number;
  prerequisites: string[];
  outcomes: string[];
  cost: number;
  location: string;
  instructor: string;
  schedule: TrainingSchedule[];
}

export interface TrainingSchedule {
  startDate: string;
  endDate: string;
  enrolled: number;
  waitlist: number;
  status: 'Scheduled' | 'Ongoing' | 'Completed' | 'Cancelled';
}