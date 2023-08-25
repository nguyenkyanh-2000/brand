"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../_components/atoms/input/InputForm";
import BrandLogo from "../_components/atoms/typography/BrandLogo";
import { zodResolver } from "@hookform/resolvers/zod";
import LongHorizontalButton from "../_components/atoms/button/LongHorizontalButton";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import registrationSchema from "../_schema/registrationSchema";

function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registrationSchema) });

  const registerUser = async (data) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_LOCATION_ORIGIN}/api/auth/register`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const res = await fetch(url, options);
      const result = await res.json();
      if (res.status !== 200) throw new Error(result.message);
      toast("Register successfully");
      router.push("/login");
    } catch (error) {
      toast(error.message);
    }
  };

  const onSubmit = async (data) =>
    registerUser({ email: data.email, password: data.password });

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div className="flex justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <BrandLogo />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            label={"Email Address"}
            name={"email"}
            register={register}
            errors={errors.email}
          />

          <InputForm
            label={"Password"}
            name={"password"}
            type="password"
            errors={errors.password}
            register={register}
          />

          <InputForm
            label={"Confirm Password"}
            name={"confirmPassword"}
            type="password"
            errors={errors.confirmPassword}
            register={register}
          />

          <LongHorizontalButton type={"submit"}>Sign up</LongHorizontalButton>
          <p className="mt-10 text-center text-sm text-neutral-500">
            Back to the{" "}
            <a
              href="/login"
              className="font-semibold text-sm text-neutral-600 hover:text-neutral-500"
            >
              login page
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
