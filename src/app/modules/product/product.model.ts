import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({
  productName: { type: String },
  productPrice: { type: Number },
  productQty: { type: Number },
  releaseDate: { type: String },
  brand: { type: String },
  model: { type: String },
  type: { type: String },
  size: { type: String },
  color: { type: String },
  suspension: { type: String },
  initialQantity: { type: Number },
});

export const ProductModel = model<TProduct>('Product', productSchema);
