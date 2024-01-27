import { Router } from 'express';
import { AuthValidations } from './auth.validation';
import validateRequests from '../../middlewares/validateRequests';
import { AuthControllers } from './auth.controller';

const router = Router();

router.post(
  '/login',
  validateRequests(AuthValidations.loginValidationSchema),
  AuthControllers.loginUser,
);

export const AuthRoutes = router;
