"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../_components/atoms/input/InputForm";
import BrandLogo from "../_components/atoms/typography/BrandLogo";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../_schema/loginSchema";
import Link from "next/link";
import PasswordCheckBox from "../_components/atoms/input/PasswordCheckBox";
import LongHorizontalButton from "../_components/atoms/button/LongHorizontalButton";
import LongIconButton from "../_components/atoms/button/LongIconButton";
import { FacebookIcon, GoogleIcon } from "../../../public/icons";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useUserStore } from "../_store/userStore";

function LoginPage() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const { login, error } = useUserStore((state) => {
    return { login: state.login, error: state.error };
  });

  const onSubmit = (data) => {
    login({ email: data.email, password: data.password });
    if (error) {
      toast(error);
    } else router.push("/");
  };
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
            type={passwordVisibility ? "text" : "password"}
            errors={errors.password}
            register={register}
          />

          <div className="flex justify-between">
            <PasswordCheckBox
              name={"show_password"}
              label={"Show password"}
              passwordVisibility={passwordVisibility}
              setPasswordVisibility={setPasswordVisibility}
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
