import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createCustomer = catchAsync(async (req, res) => {
  const result = await UserServices.createPatientIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User profile created successfully.',
    data: result,
  });
});

export const UserControllers = {
  createCustomer,
};
