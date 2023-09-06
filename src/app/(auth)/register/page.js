"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import BrandLogo from "../../_components/atoms/typography/BrandLogo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import registrationSchema from "../../_schema/registrationSchema";
import { useUserStore } from "@/app/_store/userStore";
import { Checkbox } from "@/app/_components/atoms/form/Checkbox";
import { Input } from "@/app/_components/atoms/form/Input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/app/_components/atoms/form/FormProvider";
import { Button } from "@/app/_components/atoms/button/Button";
import { Label } from "@/app/_components/atoms/typography/Label";

function RegisterPage() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });
  const { registerUser, error } = useUserStore((state) => {
    return { registerUser: state.register, error: state.error };
  });

  const onSubmit = async (data) => {
    registerUser({ email: data.email, password: data.password });
    if (error) {
      toast(error);
    } else {
      toast("Register successfully!");
      router.push("/login");
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
                <FormLabel for="email">Email</FormLabel>
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="passwordConfirmation">
                  Confirm your password
                </FormLabel>
                <FormControl>
                  <Input
                    id="passwordConfirmation"
                    type={passwordVisibility ? "text" : "password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-1">
            <Checkbox
              id="c1"
              checked={passwordVisibility}
              onCheckedChange={() => setPasswordVisibility(!passwordVisibility)}
            />
            <Label htmlFor="c1">Show password?</Label>
          </div>
          <Button variant="default" type="submit">
            Register now
          </Button>
          <p className="mt-10 text-center text-sm text-neutral-500">
            Back to the{" "}
            <Link
              href="/login"
              className="font-semibold text-sm text-neutral-600
            hover:text-neutral-500"
            >
              {" "}
              login page
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}

export default RegisterPage;
