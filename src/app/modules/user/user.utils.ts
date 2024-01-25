import { UserModel } from './user.model';

const findLastPatientId = async () => {
  const lastPatient = await UserModel.findOne(
    { isDeleted: false },
    { patientId: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastPatient?.patientId
    ? lastPatient.patientId.substring(4)
    : undefined;
};

const generatePatientId = async () => {
  const currentId = (await findLastPatientId()) || (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `NSHL${incrementId}`;
  return incrementId;
};

export default generatePatientId;
