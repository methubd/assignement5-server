import { z } from 'zod';

const createCustomerValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1)
      .refine((val) => val.trim().length > 0, { message: 'Name is required' }),
    gender: z
      .string()
      .refine((val) => val === 'male' || val === 'female', {
        message: 'Gender is missing! Must be either "Male" or "Female".',
      })
      .refine((val) => val !== undefined, {
        message: 'Gender is required',
      }),
    contact: z
      .string()
      .min(11)
      .max(11)
      .refine((val) => val.trim().length === 11, {
        message: 'Contact must be 11 characters long',
      }),
    email: z.string().min(1).email({ message: 'Invalid email format' }),
    password: z
      .string()
      .min(6, { message: 'Password not less than 6 charecter.' }),
    registeredBy: z.string().optional().default('self'),
    status: z
      .enum(['in-progress', 'blocked'])
      .default('in-progress')
      .refine((val) => val !== undefined, {
        message: 'Status is required',
      }),
    isDeleted: z.boolean().default(false),
  }),
});

export const CustomerValidations = {
  createCustomerValidationSchema,
};
