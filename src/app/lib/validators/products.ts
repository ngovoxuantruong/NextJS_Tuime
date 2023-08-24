import { z } from 'zod';

export const ProductValidator = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  cost: z.number(),
  picture: z.string(),
  sale: z.number(),
  status: z.boolean(),
});

export type ProductType = z.infer<typeof ProductValidator>;
