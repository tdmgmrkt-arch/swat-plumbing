import { z } from "zod"
import { POSITION_OPTIONS } from "./careers-data"

export const careersSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone: z
    .string()
    .min(10, "Enter a valid US phone number")
    .regex(/^[\d\s\-().+]+$/, "Enter a valid US phone number"),
  email: z.string().email("Enter a valid email address"),
  position: z.enum(POSITION_OPTIONS as [string, ...string[]], {
    error: "Select the position you're applying for",
  }),
  additional_info: z.string().optional(),
  website: z.string().optional(), // honeypot
})

export type CareersFormValues = z.infer<typeof careersSchema>

// Resume upload limits — enforced both client-side (UX) and server-side (security)
export const RESUME_MAX_BYTES = 5 * 1024 * 1024 // 5 MB
export const RESUME_ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
] as const
export const RESUME_ACCEPT_ATTR = ".pdf,.doc,.docx,.txt"
