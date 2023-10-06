import * as z from "zod";

export const ThreadValidation = z.object({
    thread: z.string().nonempty().min(3, "minimum 3 characters"),
     accountId: z.string(),
});

export const commentValidation = z.object({
    thread: z.string().nonempty().min(3, "minimum 3 characters"),
});