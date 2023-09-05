"use client";

import React from "react";
import Banner from "@/app/_components/atoms/typography/Banner";
import { useForm } from "react-hook-form";
import { Button } from "@/app/_components/atoms/button/Button";
import { Input } from "@/app/_components/atoms/form/Input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/app/_components/atoms/form/FormProvider";
import { Calendar } from "@/app/_components/atoms/form/Calendar";
import { Switch } from "@/app/_components/atoms/form/Switch";
import { format } from "date-fns";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/app/_components/atoms/Popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { zodResolver } from "@hookform/resolvers/zod";
import profileSchema from "@/app/_schema/profileSchema";
import { useUserStore } from "@/app/_store/userStore";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";

function ProfilePage() {
  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      home_address: "",
      date_of_birth: "",
      is_subscribed: false,
    },
  });
  const { isAuthenticated, updateUser, error } = useUserStore((state) => {
    return {
      updateUser: state.updateUser,
      error: state.error,
      isAuthenticated: state.isAuthenticated,
    };
  });
  const onSubmit = (data) => {
    updateUser(data);
    if (error) {
      toast(error);
    } else {
      toast("Update profile successfully");
    }
  };

  if (!isAuthenticated) redirect("/login");
  else
    return (
      <div className="flex flex-col mt-10">
        <div className="flex flex-col">
          <Banner>Profile.</Banner>
          <p className="font-secondary text-neutral-500">
            Update to receive more promotions.
          </p>
          <div className="flex flex-col gap-3 mt-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-[500px] max-sm:w-4/5 space-y-6 flex flex-col"
              >
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="firstName">First name</FormLabel>
                      <FormControl>
                        <Input id="firstName" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="lastName">Last name</FormLabel>
                      <FormControl>
                        <Input id="lastName" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="home_address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="homeAddress">Home address</FormLabel>
                      <FormControl>
                        <Input id="homeAddress" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date_of_birth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={classNames(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            showOutsideDays
                            fixedWeeks
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="is_subscribed"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Subscribe to our newsletters
                        </FormLabel>
                        <FormDescription>
                          Receive news about promotions, products and more.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          aria-readonly
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button variant="default" type="submit" className="w-32">
                  Update profile
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    );
}

export default ProfilePage;
