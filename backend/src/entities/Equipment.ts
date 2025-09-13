import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Unit } from './Unit';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  type!: string;

  @Column()
  model!: string;

  @Column()
  quantity!: number;

  @Column()
  condition!: string; // 'Excellent' | 'Good' | 'Fair' | 'Poor'

  @Column()
  lastMaintenance!: string;

  @Column("decimal", { precision: 4, scale: 2 })
  operationalStatus!: number;

  @ManyToOne(() => Unit, unit => unit.equipment)
  @JoinColumn({ name: 'unitId' })
  unit!: Unit;
}