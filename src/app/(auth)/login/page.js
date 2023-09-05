"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BrandLogo from "../../_components/atoms/typography/BrandLogo";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../../_schema/loginSchema";
import Link from "next/link";
import { Label } from "@/app/_components/atoms/typography/Label";
import LongIconButton from "../../_components/atoms/button/LongIconButton";
import { FacebookIcon, GoogleIcon } from "../../../../public/icons";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useUserStore } from "../../_store/userStore";
import { Checkbox } from "@/app/_components/atoms/form/Checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/app/_components/atoms/form/FormProvider";
import { Input } from "@/app/_components/atoms/form/Input";
import { Button } from "@/app/_components/atoms/button/Button";

function LoginPage() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const { login, error } = useUserStore((state) => {
    return { login: state.login, error: state.error };
  });

  const onSubmit = (data) => {
    login({ email: data.email, password: data.password });
    if (error) {
      toast(error);
    } else {
      router.push("/");
      toast("Login successfully");
    }
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div className="flex justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <BrandLogo />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[500px] max-sm:w-4/5 space-y-6 flex flex-col"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input id="email" {...field} />
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
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type={passwordVisibility ? "text" : "password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col justify-between md:flex-row gap-3">
            <div className="flex items-center gap-1">
              <Checkbox
                id="c1"
                checked={passwordVisibility}
                onCheckedChange={() =>
                  setPasswordVisibility(!passwordVisibility)
                }
              />
              <Label htmlFor="c1">Show password?</Label>
            </div>
            <Link
              href={"#"}
              className="font-semibold text-sm text-neutral-600 hover:text-neutral-500"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button type="submit" className="w-full">
              Sign in with email
            </Button>
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

          <p className="mt-10 text-center text-sm text-neutral-500">
            Not a member?{" "}
            <Link
              href="/register"
              className="font-semibold text-sm text-neutral-600
            hover:text-neutral-500"
            >
              {" "}
              Register here
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}

export default LoginPage;
