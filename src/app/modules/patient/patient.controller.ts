import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { PatientServices } from './patient.service';

const createPatient = catchAsync(async (req, res) => {
  const result = await PatientServices.createPatientIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile created successfully.',
    data: result,
  });
});

export const PatientControllers = {
  createPatient,
};
