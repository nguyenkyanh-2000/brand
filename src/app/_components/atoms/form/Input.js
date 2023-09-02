import React, { forwardRef } from "react";

import classNames from "classnames";

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={classNames(
        "block w-full font-secondary rounded-md border-0 py-1.5 px-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-300 focus:ring-1 focus:ring-inset focus:ring-neutral-900 sm:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
