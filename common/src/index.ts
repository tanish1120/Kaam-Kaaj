import z, { string } from 'zod';

// Signup
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

// Signin
export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

// Creating a Todo
export const createTodoInput = z.object({
    title: z.string(),
    content: z.string()
})

// Updating a Todo
export const updateTodoInput = z.object({
    title: z.string(),
    content: z.string(),
    completed: z.boolean().optional().default(false),
    id: z.string()
})


// Type inference in zod
export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateTodoInput = z.infer<typeof createTodoInput>
export type UpdateTodoInput = z.infer<typeof updateTodoInput>