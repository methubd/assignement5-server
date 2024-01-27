import { Router } from 'express';

import { UserRoutes } from '../modules/user/user.route';
import { PatientRoutes } from '../modules/customer/customer.route';
import { AuthRoutes } from '../modules/auth/auth.router';
import { ProductRoutes } from '../modules/product/product.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/customer',
    route: PatientRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
