import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const CheckBox = ({ name, label }) => (
  <div className="flex items-center">
    <Checkbox.Root
      className="flex h-4 w-4 items-center justify-center rounded-sm bg-white ring-1 ring-neutral-300"
      defaultChecked
      name={name}
      id="c1"
    >
      <Checkbox.Indicator className="text-neutral-900">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label
      className="pl-2 text-sm font-secondary text-neutral-900"
      htmlFor="c1"
    >
      {label}
    </label>
  </div>
);

export default CheckBox;
