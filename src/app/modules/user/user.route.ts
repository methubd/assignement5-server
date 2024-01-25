import { Router } from 'express';
import validateRequests from '../../middlewares/validateRequests';
import { PatientValidations } from '../patient/patient.validation';
import { UserControllers } from './user.controller';

const router = Router();

router.post(
  '/create-patient',
  validateRequests(PatientValidations.createPatientValidationSchema),
  UserControllers.createPatient,
);

export const UserRoutes = router;
