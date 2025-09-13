import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Personnel } from './Personnel';

@Entity()
export class Deployment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  location!: string;

  @Column()
  duration!: number;

  @Column()
  role!: string;

  @Column()
  startDate!: string;

  @Column()
  endDate!: string;

  @Column("decimal", { precision: 3, scale: 1 })
  performance!: number;

  @Column({ nullable: true })
  missionType?: string; // 'Combat' | 'Training' | 'Peacekeeping' | 'Humanitarian' | 'Border Security'

  @Column("text", { array: true, nullable: true })
  commendations?: string[];

  @Column("text", { array: true, nullable: true })
  challenges?: string[];

  @ManyToOne(() => Personnel, personnel => personnel.deployments)
  @JoinColumn({ name: 'personnelId' })
  personnel!: Personnel;
}