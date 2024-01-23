import { Types } from 'mongoose';

export type TRelatives = {
  patientId: Types.ObjectId;
  relations: string;
};

export type TPatient = {
  patientId: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  contact: string;
  email: string;
  password: string;
  relatives?: TRelatives[]; //array with patient objectId
  registeredBy?: Types.ObjectId | string;
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
