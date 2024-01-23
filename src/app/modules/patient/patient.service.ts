import { TPatient } from './paitent.interface';
import { PatientModel } from './patient.model';

const createPatientIntoDB = async (payload: TPatient) => {
  const result = await PatientModel.create(payload);

  return result;
};

export const PatientServices = {
  createPatientIntoDB,
};
