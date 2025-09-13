import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { Skill } from './Skill';
import { Deployment } from './Deployment';
import { TrainingRecord } from './TrainingRecord';
import { Award } from './Award';
import { DisciplinaryRecord } from './DisciplinaryRecord';
import { Unit } from './Unit';

@Entity()
export class Personnel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  serviceNumber!: string;

  @Column()
  name!: string;

  @Column()
  rank!: string;

  @Column()
  branch!: string;

  @ManyToOne(() => Unit, unit => unit.personnel)
  @JoinColumn({ name: 'unitId' })
  unit!: Unit;

  @Column("text", { array: true })
  specialization!: string[];

  @Column()
  experience!: number;

  @Column()
  medicalStatus!: string; // 'Fit' | 'Unfit' | 'Under Review'

  @Column()
  missionReadiness!: number;

  @Column()
  lastDeployment!: string;

  @Column()
  trainingStatus!: string; // 'Current' | 'Due' | 'Overdue'

  @Column()
  leadershipPotential!: number;

  @Column()
  attritionRisk!: string; // 'Low' | 'Medium' | 'High'

  @Column("decimal", { precision: 3, scale: 1 })
  performanceRating!: number;

  @Column()
  securityClearance!: string;

  @Column("jsonb", { nullable: true })
  psychologicalProfile?: {
    stressResilience: number;
    teamwork: number;
    decisionMaking: number;
    adaptability: number;
    leadership: number;
    lastAssessment: string;
    assessor: string;
    recommendations: string[];
  };

  @Column("jsonb", { nullable: true })
  familyStatus?: {
    maritalStatus: string; // 'Single' | 'Married' | 'Divorced' | 'Widowed'
    dependents: number;
    spouseOccupation?: string;
    childrenAges: number[];
    familyLocation: string;
    emergencySupport: boolean;
  };

  @Column()
  fitnessScore!: number;

  @Column("jsonb", { nullable: true })
  languageProficiency?: { language: string; proficiency: string; certification?: string; }[];

  @Column("jsonb", { nullable: true })
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
    address: string;
  };

  @Column("jsonb", { nullable: true })
  biometricData?: {
    fingerprintId: string;
    retinalScanId: string;
    faceRecognitionId: string;
    lastUpdated: string;
  };

  @Column("jsonb", { nullable: true })
  aiRecommendations?: {
    type: string; // 'Career' | 'Training' | 'Deployment' | 'Health' | 'Performance'
    priority: string; // 'Low' | 'Medium' | 'High' | 'Critical'
    recommendation: string;
    confidence: number;
    reasoning: string;
    dateGenerated: string;
    status: string; // 'New' | 'Reviewed' | 'Implemented' | 'Dismissed'
  }[];

  @OneToMany(() => Deployment, deployment => deployment.personnel)
  deployments!: Deployment[];

  @OneToMany(() => TrainingRecord, trainingRecord => trainingRecord.personnel)
  trainingRecords!: TrainingRecord[];

  @OneToMany(() => Award, award => award.personnel)
  awards!: Award[];

  @OneToMany(() => DisciplinaryRecord, disciplinaryRecord => disciplinaryRecord.personnel)
  disciplinaryRecords!: DisciplinaryRecord[];

  @ManyToMany(() => Skill, skill => skill.personnel)
  @JoinTable({
    name: "personnel_skills",
    joinColumn: { name: "personnelId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "skillId", referencedColumnName: "id" }
  })
  skills!: Skill[];
}