import { Schema, model } from 'mongoose';
import { TPatient, TRelatives } from './paitent.interface';

const relativeSchema = new Schema<TRelatives>({
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient' },
  relations: { type: String },
});

const patientSchema = new Schema<TPatient>(
  {
    patientId: { type: String, required: true },
    name: { type: String, required: true, trim: true, minlength: 1 },
    age: { type: Number, required: true, trim: true, minlength: 1 },
    gender: { type: String, enum: ['male', 'female'] },
    contact: {
      type: String,
      required: true,
      trim: true,
      minlength: 11,
      maxlength: 11,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: { type: String, required: true },
    relatives: [{ type: relativeSchema }],
    registeredBy: { type: Schema.Types.ObjectId, ref: 'User' },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      required: true,
      default: 'in-progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

//pre checking if email or contact is exists or not
patientSchema.pre('save', async function (next) {
  const email = this?.email;
  const contact = this?.contact;
  const existingEmail = await PatientModel.findOne({ email });
  const existingContact = await PatientModel.findOne({ contact });

  if (existingEmail) {
    throw new Error('Email is already in use');
  }
  if (existingContact) {
    throw new Error('Contact is already in use');
  }
  next();
});

export const PatientModel = model<TPatient>('Patient', patientSchema);
