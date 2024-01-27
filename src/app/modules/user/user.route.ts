import { Router } from 'express';
import validateRequests from '../../middlewares/validateRequests';

import { UserControllers } from './user.controller';
import { CustomerValidations } from '../customer/customer.validation';

const router = Router();

router.post(
  '/create-customer',
  validateRequests(CustomerValidations.createCustomerValidationSchema),
  UserControllers.createCustomer,
);

export const UserRoutes = router;
