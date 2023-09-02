import React, { forwardRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import classNames from "classnames";

const labelVariants =
  "block text-sm font-medium  font-secondary text-neutral-900";

const Label = forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={classNames(labelVariants, className)}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };
