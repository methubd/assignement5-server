import { Router } from 'express';
import { PatientRoutes } from '../modules/patient/patient.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/patients',
    route: PatientRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
