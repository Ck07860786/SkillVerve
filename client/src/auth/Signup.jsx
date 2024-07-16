import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import axios from "axios";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/helper/Url";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z
    .string()
    .min(8, { message: "Email must be at least 8 characters." })
    .max(50, { message: "Email must not be more than 50 characters." })
    .email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(8, { message: "Password must not be more than 8 characters." }),
  phone: z
    .string()
    .length(10, { message: "Phone number must be exactly 10 digits." })
    .refine((val) => /^\d+$/.test(val), { message: "Phone number must contain only digits." }),
  answer: z
    .string()
    .min(3, { message: "Answer must be at least 3 characters." })
    .max(12, { message: "Answer must not be more than 12 characters." }),
});

function Signup({ isAdmin }) {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      const url = isAdmin
        ? `${BASE_URL}/api/v1/auth/register-admin`
        : `${BASE_URL}/api/v1/auth/register`;
      const response = await axios.post(url, data);
      if (response.data.success) {
        toast.success(response.data.message);
        console.log(data);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-1/2 flex items-center justify-center bg-black border-r-2">
        <img
          src="https://h2r.ai/wp-content/uploads/2023/07/Login-left-side.png"
          alt="Register"
          className="w-full h-full p-4 bg-white object-cover"
        />
      </div>
      <div className="md:w-1/2 flex justify-center items-center p-4">
        <div className="w-full max-w-md">
          <h1 className="text-center p-2 font-bold text-3xl">Register</h1>
          <p className="p-2 mb-4 text-center text-muted-foreground">
            Enter your details below to create your account
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex">Phone number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex">Security Question</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What is your favorite colour?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
          <p className="text-center text-muted-foreground py-2">
            Already have an account?{" "}
            <Link className="text-zinc-900" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
