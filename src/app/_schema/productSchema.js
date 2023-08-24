import { z } from "zod";

const productSchema = z
  .object({
    name: z.string({
      invalid_type_error: "Wrong type of data for product name.",
      required_error: "Missing name for the product.",
    }),
    description: z.string({
      invalid_type_error: "Wrong type of data for product description.",
      required_error: "Missing description for the product.",
    }),
    price: z.number({
      invalid_type_error: "Wrong type of data for price.",
      required_error: "Missing price for the product.",
    }),
  })
  .strict();

export default productSchema;
