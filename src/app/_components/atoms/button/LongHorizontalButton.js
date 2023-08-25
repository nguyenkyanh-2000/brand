import React from "react";

function LongHorizontalButton({ type, children }) {
  return (
    <button
      type={type}
      className="flex w-full justify-center rounded-md bg-neutral-600 px-3 py-1.5 text-sm font-semibold  text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
    >
      {children}
    </button>
  );
}

export default LongHorizontalButton;
