import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const url = new URL("/products", process.env.NEXT_PUBLIC_DATA_SOURCE_URL);
      const res = await fetch(url);
      const products = await res.json();
      set({ products });
    } catch (error) {
      console.log(error);
    }
  },
}));
