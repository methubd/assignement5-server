import { Router } from 'express';
import { PatientControllers } from './customer.controller';

const router = Router();

router.get('/', PatientControllers.createPatient);

export const PatientRoutes = router;
