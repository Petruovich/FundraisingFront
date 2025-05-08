"use server"

import { z } from "zod"

export type FormState = {
  message: string
  errors: {
    username: string[]
    email: string[]
    password: string[]
    confirmPassword: string[]
  }
}

export type SignInFormState = {
    message: string
    errors: {
      email: string[]
      password: string[]
    }
  }

const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(50, { message: "Username must be less than 50 characters" })
      .trim(),
    email: z.string().email({ message: "Please enter a valid email address" }).trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

  const SignInSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }).trim(),
    password: z.string().min(1, { message: "Password is required" }).trim(),
  })

export async function signUp(prevState: FormState, formData: FormData) {

  const validationData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  }


  const validatedFields = SignUpSchema.safeParse(validationData)

  if (!validatedFields.success) {
    return {
      message: "Please fix the errors below",
      errors: validatedFields.error.flatten().fieldErrors as FormState["errors"],
    }
  }

  const { username, email, password } = validatedFields.data

  try {
    
    console.log("User signup successful:", { username, email })


    return {
      message: "Signup successful!",
      errors: {
        username: [],
        email: [],
        password: [],
        confirmPassword: [],
      },
    }
  } catch (error) {

    return {
      message: "An error occurred during signup. Please try again.",
      errors: {
        username: [],
        email: [],
        password: [],
        confirmPassword: [],
      },
    }
  }
}


export async function signIn(prevState: SignInFormState, formData: FormData) {
    // Extract form data
    const validationData = {
      email: formData.get("email"),
      password: formData.get("password"),
    }
  
    // Validate form data
    const validatedFields = SignInSchema.safeParse(validationData)
  
    // If validation fails, return errors
    if (!validatedFields.success) {
      return {
        message: "Please fix the errors below",
        errors: validatedFields.error.flatten().fieldErrors as SignInFormState["errors"],
      }
    }
  
    
    const { email, password } = validatedFields.data
  
    try {
      // Here you would typically:
      // 1. Check if user exists
      // 2. Verify password
      // 3. Create a session or token
  
      // For demonstration purposes, we'll simulate authentication
      // In a real app, you would check credentials against your database
      if (email === "test@example.com" && password === "Password123") {
        // Successful login
        console.log("User login successful:", { email })
  
        // Redirect to dashboard after successful login
        // redirect('/dashboard')
  
        return {
          message: "Sign in successful!",
          errors: {
            email: [],
            password: [],
          },
        }
      } else {
        return {
          message: "Invalid email or password",
          errors: {
            email: [],
            password: [],
          },
        }
      }
    } catch (error) {
      
      return {
        message: "An error occurred during sign in. Please try again.",
        errors: {
          email: [],
          password: [],
        },
      }
    }
  }