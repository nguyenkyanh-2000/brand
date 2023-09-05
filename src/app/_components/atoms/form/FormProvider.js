import React, { useContext, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

import classNames from "classnames";

import { Label } from "../typography/Label";

const Form = FormProvider;

const FormFieldContext = React.createContext({ name: "" });

const FormField = forwardRef(({ ...props }, ref) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
});
FormField.displayName = "FormField";

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  return {
    name: fieldContext.name,
    ...fieldState,
  };
};

const FormItemContext = React.createContext({ id: "" });

const FormItem = forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={classNames("space-y-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = forwardRef(({ className, ...props }, ref) => {
  const { error } = useFormField();

  return (
    <Label
      ref={ref}
      className={classNames(error && "text-destructive", className)}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = forwardRef(({ ...props }, ref) => {
  const { error } = useFormField();

  return <Slot ref={ref} aria-invalid={!!error} {...props} />;
});
FormControl.displayName = "FormControl";

const FormDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={classNames(
        "text-sm font-secondary text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = forwardRef(({ className, children, ...props }, ref) => {
  const { error } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      className={classNames(
        "text-sm font-medium font-secondary text-destructive",
        className
      )}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
