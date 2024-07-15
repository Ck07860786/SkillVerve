import {z} from 'zod'

export const signupSchema= z.object({
    name:z
    .string({required_error:'Name is required'})
    .min(3,{message:'Name must be atleast of 3 chatcter'})
    .max(20,{message:'Name must not more than 20 character'}),

    email:z
    .string({required_error:'Email is required'})
    .min(8,{message:'Email must be atleast of 8 chatcter'})
    .max(50,{message:'Email must not more than 50 character'})
    .email(),

    phone: z
    .string({ required_error: 'Phone number is required' })
    .length(10, { message: 'Phone number must be exactly 10 digits' })
    .refine(val => /^\d+$/.test(val), { message: 'Phone number must contain only digits' }),


    password:z
    .string({required_error:'Password is required'})
    .min(6,{message:'Password must be atleast of 6 character'})
    .max(8,{message:'Password must not more than 8 character'}),
    
    answer:z
    .string({required_error:'Answer is required'})
    .min(3,{message:'Answer must be atleast of 3 character'})
    .max(12,{message:'Answer must not more than 12 digits'})

})


export const loginSchema = z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email format' }),
  
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Password must be at least 6 characters' })
      .max(8, { message: 'Password must not be more than 8 characters' })
  });
