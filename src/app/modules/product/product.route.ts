import { Router } from 'express';
import validateRequests from '../../middlewares/validateRequests';
import { ProductValidations } from './product.validation';
import { ProductControllers } from './product.controller';

const router = Router();

router.post(
  '/create-product',
  validateRequests(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct,
);

export const ProductRoutes = router;
