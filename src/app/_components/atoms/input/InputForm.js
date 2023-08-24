import React from "react";

function InputForm({ type, label, name, errors, register, ...rest }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium font-secondary text-neutral-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          className="block w-full font-secondary rounded-md border-0 py-1.5 px-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-300 focus:ring-1 focus:ring-inset focus:ring-neutral-900 sm:text-sm"
          {...register(name)}
          {...rest}
        />
        {errors && (
          <p className="text-red-600 font-secondary text-xs mt-1">
            {errors.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default InputForm;
