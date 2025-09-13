import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Personnel } from './Personnel';

@Entity()
export class Award {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  category!: string; // 'Gallantry' | 'Service' | 'Academic' | 'Sports' | 'Technical'

  @Column()
  dateAwarded!: string;

  @Column()
  description!: string;

  @Column()
  awardingAuthority!: string;

  @ManyToOne(() => Personnel, personnel => personnel.awards)
  @JoinColumn({ name: 'personnelId' })
  personnel!: Personnel;
}