import { NextFunction, Request, Response } from 'express';
import { TUserRole } from '../modules/user/user.interface';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { UserModel } from '../modules/user/user.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //Token
    const token = req.headers.authorization;

    //check point 1: if not bringing a token
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized.');
    }

    //decoded from token: checking the token is valid or not
    const decoded = jwt.verify(
      token,
      config.jwt_access_token_secret as string,
    ) as JwtPayload;

    const { email, role } = decoded; // TODO: reminder -> need iat for password change time match

    //check point 2: user in database or not
    const existingUser = await UserModel.findOne({ email });

    if (!existingUser) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found.');
    }

    //check point 3:checking deleted or not
    const isDeleted = existingUser?.isDeleted;

    if (isDeleted) {
      throw new AppError(httpStatus.FORBIDDEN, 'User account already deleted.');
    }

    //check point 4:if block or in progress
    const userStatus = existingUser?.status === 'blocked';
    if (userStatus) {
      throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked.');
    }

    //check point 5:if token user and database user role not matched
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    //TODO:Will handle password change time and

    next();
  });
};

export default auth;
