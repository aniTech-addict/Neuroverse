import { Request, Response } from 'express';
import { AppDataSource } from '../index';
import { Personnel } from '../entities/Personnel';

export const getPersonnel = async (req: Request, res: Response) => {
  try {
    const personnelRepository = AppDataSource.getRepository(Personnel);
    const personnel = await personnelRepository.find({
      relations: ['unit', 'skills', 'deployments', 'trainingRecords', 'awards', 'disciplinaryRecords'],
    });
    res.json(personnel);
  } catch (error) {
    console.error("Error fetching personnel:", error);
    res.status(500).json({ message: "Error fetching personnel" });
  }
};

export const getPersonnelById = async (req: Request, res: Response) => {
  try {
    const personnelRepository = AppDataSource.getRepository(Personnel);
    const personnel = await personnelRepository.findOne({
      where: { id: req.params.id },
      relations: ['unit', 'skills', 'deployments', 'trainingRecords', 'awards', 'disciplinaryRecords'],
    });
    if (personnel) {
      res.json(personnel);
    } else {
      res.status(404).json({ message: "Personnel not found" });
    }
  } catch (error) {
    console.error("Error fetching personnel by ID:", error);
    res.status(500).json({ message: "Error fetching personnel by ID" });
  }
};

export const createPersonnel = async (req: Request, res: Response) => {
  try {
    const personnelRepository = AppDataSource.getRepository(Personnel);
    const newPersonnel = personnelRepository.create(req.body);
    await personnelRepository.save(newPersonnel);
    res.status(201).json(newPersonnel);
  } catch (error) {
    console.error("Error creating personnel:", error);
    res.status(500).json({ message: "Error creating personnel" });
  }
};

export const updatePersonnel = async (req: Request, res: Response) => {
  try {
    const personnelRepository = AppDataSource.getRepository(Personnel);
    const personnel = await personnelRepository.findOneBy({ id: req.params.id });
    if (personnel) {
      personnelRepository.merge(personnel, req.body);
      const result = await personnelRepository.save(personnel);
      res.json(result);
    } else {
      res.status(404).json({ message: "Personnel not found" });
    }
  } catch (error) {
    console.error("Error updating personnel:", error);
    res.status(500).json({ message: "Error updating personnel" });
  }
};

export const deletePersonnel = async (req: Request, res: Response) => {
  try {
    const personnelRepository = AppDataSource.getRepository(Personnel);
    const result = await personnelRepository.delete(req.params.id);
    if (result.affected === 1) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Personnel not found" });
    }
  } catch (error) {
    console.error("Error deleting personnel:", error);
    res.status(500).json({ message: "Error deleting personnel" });
  }
};