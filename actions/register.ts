"use server"
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
  console.log(values);
    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }
  
    return { success: "Successfully Registered!" };
  };
  