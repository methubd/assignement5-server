import { Schema, model } from 'mongoose';
import { TCustomer } from './customer.interface';

const GENDER_ENUM = ['male', 'female'];

const customerSchema = new Schema<TCustomer>(
  {
    customerId: { type: String, required: true, unique: true },
    user: { type: Schema.Types.ObjectId },
    name: { type: String, required: true, trim: true, minlength: 1 },
    gender: { type: String, enum: GENDER_ENUM },
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
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

//pre checking if email or contact is exists or not
customerSchema.pre('save', async function (next) {
  const email = this?.email;
  const contact = this?.contact;
  const existingEmail = await CustomerModel.findOne({ email });
  const existingContact = await CustomerModel.findOne({ contact });

  if (existingEmail) {
    throw new Error('Email is already in use');
  }
  if (existingContact) {
    throw new Error('Contact is already in use');
  }
  next();
});

export const CustomerModel = model<TCustomer>('Customer', customerSchema);
