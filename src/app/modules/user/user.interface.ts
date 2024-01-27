import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUser = {
  customerId: string;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: 'user';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

export interface UserStaticModel extends Model<TUser> {
  //user exists or not
  isUserExists(customerId: string): Promise<TUser | null>;

  // password matched or not
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;

  // checking password changed time and token created at
  isJWTIssuedBeforePassowrdChanged(
    passwordChangedTimestap: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
