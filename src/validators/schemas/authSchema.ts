import { z } from "zod";

export const authLoginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(7, "Password must be at least 7 characters long"),
});

export const authRegisterSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(7, "Password must be at least 7 characters long"),
});

export const authForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email format"),
  ref: z.string().min(1, "Ref is required"),
});

export const authRefreshPasswordSchema = z.object({
  email: z.string().email("Invalid email format"),
  newPassword: z.string().min(7, "Password must be at least 7 characters long"),
});

export const authVerifyRequestCodeSchema = z.object({
  code: z.string().min(1, "Code is required"),
  action: z.string().min(1, "Action is required"),
});
