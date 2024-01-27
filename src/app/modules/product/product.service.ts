import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
};
