import { z } from "zod";

// User interface
export interface User {
  id: number;
  username: string;
}

// User schema for validation
export const userSchema = z.object({
  id: z.number(),
  username: z.string().min(3).max(50),
});

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
