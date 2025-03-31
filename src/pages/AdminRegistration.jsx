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
import { userRegister } from "../action/auth.action";
import { UserRoles } from "../enum/userRoles";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import LoaderSpin from "../components/ui/LoaderSpin";
import { useState } from "react";

export default function AdminRegistration() {
  const { enqueueSnackbar } = useSnackbar(); // Access enqueueSnackbar from the hook
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registrationSchema) });
  const history = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);

    const newData = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      password: data?.password,
      role: UserRoles.ADMIN,
      verified: 0,
    };
    const response = await userRegister(newData);
    if (response?.status) {
      enqueueSnackbar(response?.message, { variant: "success" });
      localStorage.setItem("token",response?.token)

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
              Customer Register
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input {...register("firstName")} placeholder="First Name" />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}

              <Input {...register("lastName")} placeholder="Last Name" />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}

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

              <Input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 rounded-md py-3 text-white font-semibold flex items-center justify-center gap-x-2"
              >
                {loading && <LoaderSpin />} <span>Register</span>
              </button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
