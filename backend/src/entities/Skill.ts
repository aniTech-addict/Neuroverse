import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Personnel } from './Personnel';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column()
  level!: string; // 'Novice' | 'Intermediate' | 'Advanced' | 'Expert'

  @Column()
  certificationDate!: string;

  @Column({ nullable: true })
  expiryDate?: string;

  @Column({ nullable: true })
  certifyingAuthority?: string;

  @Column({ nullable: true })
  practicalScore?: number;

  @Column({ nullable: true })
  theoreticalScore?: number;

  @ManyToMany(() => Personnel, personnel => personnel.skills)
  personnel!: Personnel[];
}