import { UserModel } from './user.model';

const findLastCustomerId = async () => {
  const lastCustomer = await UserModel.findOne(
    { isDeleted: false },
    { customerId: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastCustomer?.customerId
    ? lastCustomer.customerId.substring(4)
    : undefined;
};

const generateCustomerId = async () => {
  const currentId = (await findLastCustomerId()) || (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `BIKE${incrementId}`;
  return incrementId;
};

export default generateCustomerId;
