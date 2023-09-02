"use client";

import React from "react";
import Banner from "@/app/_components/atoms/typography/Banner";
import InputForm from "@/app/_components/atoms/input/InputForm";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/atoms/form/SelectBox";
import { Label } from "@/app/_components/atoms/typography/Label";

function ProfilePage() {
  const { register, errors } = useForm();
  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-col">
        <Banner>Profile.</Banner>
        <p className="font-secondary text-neutral-500">
          Update to receive more promotions.
        </p>
        <div className="flex flex-col gap-3 mt-5">
          <InputForm
            label={"First name"}
            name={"first_name"}
            register={register}
            errors={errors}
          />
          <InputForm
            label={"Last name"}
            name={"last_name"}
            register={register}
            errors={errors}
          />
          <div className="flex flex-col gap-1">
            <Label htmlFor="gender">Gender</Label>

            <Select>
              <SelectTrigger
                id="gender"
                className="w-[180px] bg-white focus: ring-neutral-900"
              >
                <SelectValue placeholder="Select a gender..." />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
