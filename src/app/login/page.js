"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../_components/atoms/input/InputForm";
import BrandLogo from "../_components/atoms/typography/BrandLogo";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../_schema/loginSchema";
import Link from "next/link";
import CheckBox from "../_components/atoms/input/CheckBox";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const onSubmit = (data) => console.log(data);
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

          <div className="flex justify-between">
            <CheckBox
              name={"remember_me"}
              label={"Remember me"}
              register={register}
            />
            <Link
              href={"#"}
              className="font-semibold text-sm text-neutral-600 hover:text-neutral-500"
            >
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-neutral-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
          >
            Sign in
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-neutral-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold text-sm text-neutral-600 hover:text-neutral-500"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
