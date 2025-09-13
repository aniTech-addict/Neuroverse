import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Personnel } from './Personnel';
import { Equipment } from './Equipment';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column()
  location!: string;

  @Column()
  strength!: number;

  @Column()
  requiredStrength!: number;

  @Column()
  readinessLevel!: number;

  @Column("text", { array: true, nullable: true })
  criticalShortages?: string[];

  @Column("jsonb", { nullable: true })
  commandStructure?: {
    commandingOfficer: string;
    deputyCommander?: string;
    seniorOfficers: string[];
    reportingStructure: { level: number; positions: string[]; personnelCount: number; }[];
  };

  @OneToMany(() => Equipment, equipment => equipment.unit)
  equipment!: Equipment[];

  @Column()
  operationalStatus!: string; // 'Active' | 'Training' | 'Maintenance' | 'Standby'

  @Column()
  lastInspection!: string;

  @Column("jsonb", { nullable: true })
  budget?: {
    allocated: number;
    spent: number;
    remaining: number;
    categories: { name: string; allocated: number; spent: number; }[];
  };

  @OneToMany(() => Personnel, personnel => personnel.unit)
  personnel!: Personnel[];
}