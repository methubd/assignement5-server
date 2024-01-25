import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createPatient = catchAsync(async (req, res) => {
  const result = await UserServices.createPatientIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient profile created successfully.',
    data: result,
  });
});

export const UserControllers = {
  createPatient,
};
