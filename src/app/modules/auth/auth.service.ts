import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { UserModel } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import bcrypt from 'bcrypt';
import createToken from './auth.utils';
import config from '../../config';

const loginUser = async (payload: TLoginUser) => {
  //checking if the user is exists
  const existingUser = await UserModel.findOne({
    email: payload?.email,
  }).select('+password');

  if (!existingUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found.');
  }

  //checking deleted or not
  const isDeleted = existingUser?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'User account already deleted.');
  }

  //if block or in progress
  const userStatus = existingUser?.status === 'blocked';
  if (userStatus) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked.');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    existingUser.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched.');
  }

  //Access granted: Send AccessToken, RefreshToken
  const jwtPayload = {
    email: existingUser?.email,
    role: existingUser?.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_token_secret as string,
    config.jwt_access_expires_in as string,
  );

  //create refresh token
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_token_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
    needsPasswordChanged: existingUser?.needsPasswordChange,
  };
};

export const AuthServices = {
  loginUser,
};
