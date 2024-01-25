/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TPatient } from '../patient/paitent.interface';
import { PatientModel } from '../patient/patient.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';
import mongoose from 'mongoose';
import generatePatientId from './user.utils';

const createPatientIntoDB = async (payload: TPatient) => {
  // creating a user from payload
  const userData: Partial<TUser> = {};

  //set default role
  userData.role = 'patient';
  userData.email = payload?.email;
  userData.password = payload?.password;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    // setting patientId
    userData.patientId = await generatePatientId();

    // creating a new user
    const newUser = await UserModel.create([userData], { session });

    //creating a patient
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user.');
    }

    // setting id, _id as user
    payload.patientId = newUser[0].patientId;
    payload.user = newUser[0]._id; //ref id

    const newPatient = await PatientModel.create([payload], { session });

    if (!newPatient.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create patient.');
    }

    await session.commitTransaction();
    await session.endSession();

    return newPatient;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

export const UserServices = {
  createPatientIntoDB,
};
