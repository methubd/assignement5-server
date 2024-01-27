import { Router } from 'express';
import validateRequests from '../../middlewares/validateRequests';
import { ProductValidations } from './product.validation';
import { ProductControllers } from './product.controller';
import auth from '../../middlewares/auth';

const router = Router();

router.post(
  '/create-product',
  validateRequests(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct,
);

router.get('/', auth('user'), ProductControllers.getAllProducts);

export const ProductRoutes = router;
