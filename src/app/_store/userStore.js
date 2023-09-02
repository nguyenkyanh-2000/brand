import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isAdmin: false,
      error: null,
      register: async (data) => {
        try {
          const url = `${process.env.NEXT_PUBLIC_LOCATION_ORIGIN}/api/auth/register`;
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
          const res = await fetch(url, options);
          const result = await res.json();
          if (res.status !== 200) throw new Error(result.message);
          else set({ error: null });
        } catch (error) {
          console.log(error);
          set({ error: error.message });
        }
      },
      login: async (data) => {
        try {
          const url = new URL(
            "/api/auth/login",
            process.env.NEXT_PUBLIC_LOCATION_ORIGIN
          );
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
          const res = await fetch(url, options);
          const result = await res.json();
          if (res.status !== 200) set({ error: result.message });
          else {
            set({
              user: result.data,
              isAuthenticated: true,
              isAdmin: result.data.isAdmin,
              error: null,
            });
          }
        } catch (error) {
          console.log(error);
          set({ error: error.message });
        }
      },
      logout: async () => {
        try {
          const url = new URL(
            "/api/auth/logout",
            process.env.NEXT_PUBLIC_LOCATION_ORIGIN
          );
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const res = await fetch(url, options);
          const result = await res.json();
          if (res.status !== 200) set({ error: result.message });
          else {
            set({
              user: null,
              isAuthenticated: false,
              isAdmin: false,
              error: null,
            });
          }
        } catch (error) {
          console.log(error);
          set({ error: error.message });
        }
      },
    }),
    { name: "userStorage" }
  )
);
