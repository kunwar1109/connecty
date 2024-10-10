import { z } from "zod";

export const SignUp = z.object({
  firstName: z.string({
    required_error: "First Name is Required",
    invalid_type_error: "Invalid First Name",
  }),
  lastName: z.string({
    required_error: "Last Name is Required",
    invalid_type_error: "Invalid Last Name",
  }),
  userName: z.string({
    required_error: "Username is Required",
  }),
  email: z.string({
    required_error: "Email is Required",
  }),
  password: z.string({
    required_error: "Password is Required",
  }),
});
