"use client";

import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { UserIcon } from "../../../../public/icons";
import { useUserStore } from "@/app/_store/userStore";
import { toast } from "react-hot-toast";
import Link from "next/link";

function UserHoverCard() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  return (
    <>
      {!user ? (
        <a className="inline-block cursor-pointer rounded-full" href="/login">
          <UserIcon width={24} height={24} />
        </a>
      ) : (
        <HoverCard.Root openDelay={0} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <Link
              className="inline-block cursor-pointer rounded-full"
              href="/profile"
            >
              <UserIcon width={24} height={24} />
            </Link>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              className="w-50 bg-white shadow-lg rounded-lg divide-y"
              align="end"
              sideOffset={8}
            >
              <div className="px-4 py-2 text-sm text-gray-900">
                <div>
                  {user.first_name && user.last_name
                    ? `${user.first_name} ${user.last_name}`
                    : "Please update your profile."}
                </div>
                <div className="font-medium truncate">{user.email}</div>
              </div>
              <ul className="flex flex-col gap-1 py-2 text-sm text-gray-700">
                <li>
                  <Link href="/profile" className="block px-4 ">
                    My profile
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="block px-4">
                    My orders
                  </Link>
                </li>
              </ul>

              <a
                href="#"
                onClick={() => {
                  logout();
                  toast("Sign out successfully!");
                }}
                className="block px-4 py-2 text-sm"
              >
                Sign out
              </a>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      )}
    </>
  );
}

export default UserHoverCard;
