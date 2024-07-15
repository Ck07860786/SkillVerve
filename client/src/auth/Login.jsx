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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";


const formSchema = z.object({
  email: z.string()
    .min(8, { message: "Email must be at least 8 characters." })
    .max(50, { message: "Email must not be more than 50 characters." })
    .email({ message: "Invalid email address." }),
  password: z.string()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(8, { message: "Password must not be more than 8 characters." }),
});

function Login() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const location = useLocation();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/auth/login`, data);
      if (response.data.success) {
        toast.success(response.data.message);
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(response.data));
        navigate(location.state || '/home');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 flex items-center justify-center bg-black border-r-2" >
        <img src='https://h2r.ai/wp-content/uploads/2023/07/Login-left-side.png' alt="Login" className="w-full h-full p-4 bg-white object-cover" />
      </div>
      <div className="md:w-1/2 flex justify-center items-center p-4">
        <div className="w-full max-w-md">
          <h1 className="text-center p-2 font-bold text-3xl">Login</h1>
          <p className="p-2 mb-4 text-center text-muted-foreground">
            Enter your email below to login to your account
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex">Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </Form>
          <p className="text-center text-muted-foreground py-2">
            Don't have an account? <Link className="text-zinc-900" to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
