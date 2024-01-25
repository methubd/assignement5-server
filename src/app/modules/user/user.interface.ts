export interface TUser {
  patientId: string;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role:
    | 'patient'
    | 'doctor'
    | 'attendant'
    | 'pharmacist'
    | 'deliveryboy'
    | 'admin';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}
