import { z } from "zod";

export const loginSchema = z.object({
    username: z
        .string()
        .trim()
        .min(1, "Username is required"),

    password: z
        .string()
        .min(1, "Password is required")
})

export const registerSchema = z.object({
    fullname: z
        .string()
        .trim()
        .min(1, "Full name is required"),

    username: z
        .string()
        .trim()
        .min(3, "Username must be atleast 3 characters"),

    email: z
        .string()
        .email("Enter a valid email"),

    phone: z
        .string()
        .regex(/^[0-9]{10}$/, "Phone number must contain exactly 10 digits"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),

    confirmPassword: z
        .string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})