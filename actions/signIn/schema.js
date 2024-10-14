import { z } from "zod";

export const SignIn = z.object({
  userName: z.string().optional(),
  email: z.string().optional(),
  password: z.string({
    required_error: "Please Enter Password",
  }),
});
