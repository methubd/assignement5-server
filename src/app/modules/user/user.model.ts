import { Schema, model } from 'mongoose';
import { UserStatus } from './user.constant';
import { TUser, UserStaticModel } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser, UserStaticModel>(
  {
    customerId: {
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
      enum: ['user'],
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
  if (existingUser) {
    throw new Error('Email is already in use');
  }

  next();
});

//hashing password before saving on db
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

//removing password and handling other properties from response of user
userSchema.post('findOne', async function (doc, next) {
  doc._id = undefined;
  // doc.password = undefined;
  doc.createdAt = undefined;
  doc.updatedAt = undefined;
  next();
});

export const UserModel = model<TUser, UserStaticModel>('User', userSchema);
