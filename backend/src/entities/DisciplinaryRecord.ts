import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Personnel } from './Personnel';

@Entity()
export class DisciplinaryRecord {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  type!: string; // 'Minor' | 'Major' | 'Court Martial'

  @Column()
  date!: string;

  @Column()
  description!: string;

  @Column()
  action!: string;

  @Column()
  status!: string; // 'Active' | 'Resolved' | 'Appealed'

  @ManyToOne(() => Personnel, personnel => personnel.disciplinaryRecords)
  @JoinColumn({ name: 'personnelId' })
  personnel!: Personnel;
}