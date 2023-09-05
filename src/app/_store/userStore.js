import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isAdmin: false,
      error: null,
      updateUser: async (data) => {
        try {
          const url = new URL(
            `/api/users/${get().user.user_id}`,
            process.env.NEXT_PUBLIC_LOCATION_ORIGIN
          );
          const options = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
          const res = await fetch(url, options);
          const result = await res.json();
          if (res.status !== 200) throw new Error(result.message);
          else
            set({
              user: {
                email: get().user.email,
                user_id: get().user.user_id,
                ...data,
              },
              error: null,
            });
        } catch (error) {
          console.log(error);
          set({ error: error.message });
        }
      },
      register: async (data) => {
        try {
          const url = new URL(
            "/api/auth/register",
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
          if (res.status !== 200) throw new Error(result.message);
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
          if (res.status !== 200) throw new Error(result.message);
          else {
            localStorage.removeItem("userStorage");
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
