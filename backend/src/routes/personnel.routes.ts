import { Router } from 'express';
import { getPersonnel, getPersonnelById, createPersonnel, updatePersonnel, deletePersonnel } from '../controllers/personnel.controller';

const router = Router();

router.get('/', getPersonnel);
router.get('/:id', getPersonnelById);
router.post('/', createPersonnel);
router.put('/:id', updatePersonnel);
router.delete('/:id', deletePersonnel);

export default router;