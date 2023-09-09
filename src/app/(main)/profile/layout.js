import React from "react";

export const metadata = {
  title: "Profile",
};

function ProfileLayout({ children }) {
  return <div className="flex flex-col mt-10">{children}</div>;
}

export default ProfileLayout;
