import { Router } from 'express';
import { PatientControllers } from './patient.controller';
import validateRequests from '../../middlewares/validateRequests';
import { PatientValidations } from './patient.validation';

const router = Router();

router.post(
  '/create-patient',
  validateRequests(PatientValidations.createPatientValidationSchema),
  PatientControllers.createPatient,
);

export const PatientRoutes = router;
