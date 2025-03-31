"use client";

import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../zod/register-schema";
import Header from "../components/Header";
import { userLogin, userRegister } from "../action/auth.action";
import { UserRoles } from "../enum/userRoles";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import LoaderSpin from "../components/ui/LoaderSpin";
import { useState } from "react";
import { loginSchema } from "../zod/login-schema";

export default function AdminLogin() {
  const { enqueueSnackbar } = useSnackbar(); // Access enqueueSnackbar from the hook
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const history = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);

    const newData = {
      email: data?.email,
      password: data?.password,
    };
    const response = await userLogin(newData);
    if (response?.status) {
      enqueueSnackbar(response?.message, { variant: "success" });
      localStorage.setItem("token", response?.token);

      history("/");
    } else {
      enqueueSnackbar(response?.message, { variant: "error" });
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />

      <main className="min-h-[inherit] absolute w-full flex items-center justify-center">
        <Card className="md:min-w-[500px] min-w-full mx-auto mt-10 p-6 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold">
              LogIn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              <Input {...register("email")} type="email" placeholder="Email" />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <Input
                {...register("password")}
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 rounded-md py-3 text-white font-semibold flex items-center justify-center gap-x-2"
              >
                {loading && <LoaderSpin />} <span>LogIn</span>
              </button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
