"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../_components/atoms/input/InputForm";
import BrandLogo from "../_components/atoms/typography/BrandLogo";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../_schema/loginSchema";
import Link from "next/link";
import CheckBox from "../_components/atoms/input/CheckBox";
import LongHorizontalButton from "../_components/atoms/button/LongHorizontalButton";
import LongIconButton from "../_components/atoms/button/LongIconButton";
import { FacebookIcon, GoogleIcon } from "../../../public/icons";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const loginUser = async (data) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_LOCATION_ORIGIN}/api/auth/login`;
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
      toast("Login successfully");
      router.push("/");
    } catch (error) {
      toast(error.message);
    }
  };

  const onSubmit = (data) =>
    loginUser({ email: data.email, password: data.password });
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

          <div className="flex flex-col items-center gap-2">
            <LongHorizontalButton type={"submit"}>
              Sign in using email
            </LongHorizontalButton>
            <p className="text-xs text-neutral-500">Or sign in with</p>
            <div className="flex w-full gap-5 space-between">
              <LongIconButton Icon={GoogleIcon} iconSize="16px">
                Google
              </LongIconButton>
              <LongIconButton Icon={FacebookIcon} iconSize="16px">
                Facebook
              </LongIconButton>
            </div>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-neutral-500">
          Not a member?{" "}
          <a
            href="/register"
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
