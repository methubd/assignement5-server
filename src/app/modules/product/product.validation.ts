import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    productName: z.string().min(1),
    productPrice: z.number().positive(),
    productQty: z.number().int().positive(),
    releaseDate: z.string(),
    brand: z.string(),
    model: z.string(),
    type: z.string(),
    size: z.string(),
    color: z.string(),
    suspension: z.string(),
    initialQuantity: z.number(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
};
