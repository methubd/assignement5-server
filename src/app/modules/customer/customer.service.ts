import { TCustomer } from './customer.interface';
import { CustomerModel } from './customer.model';

const createPatientIntoDB = async (payload: TCustomer) => {
  const result = await CustomerModel.create(payload);

  return result;
};

export const PatientServices = {
  createPatientIntoDB,
};
