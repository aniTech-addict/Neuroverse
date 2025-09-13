import "reflect-metadata";
import { AppDataSource } from '../index';
import { Personnel } from '../entities/Personnel';
import { Unit } from '../entities/Unit';
import { Skill } from '../entities/Skill';
import { Deployment } from '../entities/Deployment';
import { TrainingRecord } from '../entities/TrainingRecord';
import { Award } from '../entities/Award';
import { DisciplinaryRecord } from '../entities/DisciplinaryRecord';
import { Equipment } from '../entities/Equipment';
import { mockPersonnel, mockUnits } from '../../../src/data/mockData';

const seedDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized for seeding!");

    // Clear existing data (optional, for clean seeding)
    await AppDataSource.manager.clear(Personnel);
    await AppDataSource.manager.clear(Unit);
    await AppDataSource.manager.clear(Skill);
    await AppDataSource.manager.clear(Deployment);
    await AppDataSource.manager.clear(TrainingRecord);
    await AppDataSource.manager.clear(Award);
    await AppDataSource.manager.clear(DisciplinaryRecord);
    await AppDataSource.manager.clear(Equipment);

    console.log("Existing data cleared.");

    // Seed Units
    const unitRepository = AppDataSource.getRepository(Unit);
    const seededUnits: Unit[] = [];
    for (const mockUnit of mockUnits) {
      const unit = unitRepository.create(mockUnit);
      await unitRepository.save(unit);
      seededUnits.push(unit);
    }
    console.log("Units seeded successfully.");

    // Seed Personnel
    const personnelRepository = AppDataSource.getRepository(Personnel);
    for (const mockP of mockPersonnel) {
      const unit = seededUnits.find(u => u.name === mockP.unit);
      if (!unit) {
        console.warn(`Unit "${mockP.unit}" not found for personnel "${mockP.name}". Skipping.`);
        continue;
      }

      const personnel = personnelRepository.create({
        ...mockP,
        unit: unit,
        skills: [], // Skills will be handled separately for ManyToMany
        deployments: [],
        trainingRecords: [],
        awards: [],
        disciplinaryRecords: [],
      });
      await personnelRepository.save(personnel);

      // Handle nested entities for Personnel
      // Skills (Many-to-Many)
      const skillRepository = AppDataSource.getRepository(Skill);
      const personnelSkills: Skill[] = [];
      for (const mockSkill of mockP.skills) {
        let skill = await skillRepository.findOneBy({ name: mockSkill.name });
        if (!skill) {
          skill = skillRepository.create(mockSkill);
          await skillRepository.save(skill);
        }
        personnelSkills.push(skill);
      }
      personnel.skills = personnelSkills;
      await personnelRepository.save(personnel);

      // Deployments (One-to-Many)
      const deploymentRepository = AppDataSource.getRepository(Deployment);
      const deployments = mockP.deploymentHistory.map(d => deploymentRepository.create({ ...d, personnel }));
      await deploymentRepository.save(deployments);

      // Training Records (One-to-Many)
      const trainingRecordRepository = AppDataSource.getRepository(TrainingRecord);
      const trainingRecords = mockP.trainingRecords.map(tr => trainingRecordRepository.create({ ...tr, personnel }));
      await trainingRecordRepository.save(trainingRecords);

      // Awards (One-to-Many)
      const awardRepository = AppDataSource.getRepository(Award);
      const awards = mockP.awards.map(a => awardRepository.create({ ...a, personnel }));
      await awardRepository.save(awards);

      // Disciplinary Records (One-to-Many)
      const disciplinaryRecordRepository = AppDataSource.getRepository(DisciplinaryRecord);
      const disciplinaryRecords = mockP.disciplinaryRecords.map(dr => disciplinaryRecordRepository.create({ ...dr, personnel }));
      await disciplinaryRecordRepository.save(disciplinaryRecords);
    }
    console.log("Personnel seeded successfully.");

    // Seed Equipment (One-to-Many with Unit)
    const equipmentRepository = AppDataSource.getRepository(Equipment);
    for (const mockUnit of mockUnits) {
      const unit = seededUnits.find(u => u.name === mockUnit.name);
      if (unit && mockUnit.equipment) {
        const equipment = mockUnit.equipment.map(eq => equipmentRepository.create({ ...eq, unit }));
        await equipmentRepository.save(equipment);
      }
    }
    console.log("Equipment seeded successfully.");


    console.log("Database seeding complete!");
  } catch (error) {
    console.error("Error during database seeding:", error);
  } finally {
    await AppDataSource.destroy();
    console.log("Data Source has been closed.");
  }
};

seedDatabase();