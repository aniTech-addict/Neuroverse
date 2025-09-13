import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Personnel } from './Personnel';

@Entity()
export class TrainingRecord {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  course!: string;

  @Column()
  completionDate!: string;

  @Column()
  score!: number;

  @Column()
  instructor!: string;

  @Column()
  status!: string; // 'Completed' | 'In Progress' | 'Scheduled'

  @Column({ nullable: true })
  trainingType?: string; // 'Technical' | 'Leadership' | 'Combat' | 'Academic' | 'Physical'

  @Column({ nullable: true })
  duration?: number;

  @Column({ nullable: true })
  location?: string;

  @Column({ nullable: true })
  cost?: number;

  @ManyToOne(() => Personnel, personnel => personnel.trainingRecords)
  @JoinColumn({ name: 'personnelId' })
  personnel!: Personnel;
}