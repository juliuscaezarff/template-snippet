import { z } from "zod";

export const FeedbackFormSchema = z.object({
  message: z.string()
})