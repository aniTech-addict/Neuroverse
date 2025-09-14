import { Router } from 'express';
import { getPersonnel, getPersonnelById, createPersonnel, updatePersonnel, deletePersonnel, aiQuery } from '../controllers/personnel.controller';

const router = Router();

router.get('/', getPersonnel);
router.get('/:id', getPersonnelById);
router.post('/', createPersonnel);
router.put('/:id', updatePersonnel);
router.delete('/:id', deletePersonnel);

// AI Query endpoint for flexible natural language queries
router.post('/ai-query', aiQuery);

export default router;
