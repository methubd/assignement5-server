import { Schema, model } from 'mongoose';
import { UserStatus } from './user.constant';
import { TUser } from './user.interface';
import { PatientModel } from '../patient/patient.model';

const userSchema = new Schema<TUser>(
  {
    patientId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: [
        'patient',
        'doctor',
        'attendant',
        'pharmacist',
        'deliveryboy',
        'admin',
      ],
    },
    status: {
      type: String,
      enum: UserStatus,
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

//pre checking if email or contact is exists or not
userSchema.pre('save', async function (next) {
  const email = this?.email;
  const existingUser = await UserModel.findOne({ email });
  const existingPatient = await PatientModel.findOne({ email });

  if (existingUser) {
    throw new Error('Email is already in use');
  }
  if (existingPatient?.contact) {
    throw new Error('Contact is already in use');
  }

  next();
});

export const UserModel = model<TUser>('User', userSchema);
