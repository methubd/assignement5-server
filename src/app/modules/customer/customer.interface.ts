import { Types } from 'mongoose';

export type TRelatives = {
  customerId: Types.ObjectId;
  relations: string;
};

export type TCustomer = {
  customerId: string;
  name: string;
  user: Types.ObjectId;
  gender: 'male' | 'female';
  contact: string;
  email: string;
  password: string;
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
