import { create } from "zustand";

export const useProductStore = create((set) => ({
  currentProduct: {},
  products: [],
  error: null,
  fetchProducts: async () => {
    try {
      const url = new URL(
        "/api/products",
        process.env.NEXT_PUBLIC_LOCATION_ORIGIN
      );
      const res = await fetch(url);
      const data = await res.json();
      set({ products: data });
    } catch (error) {
      console.log(error);
    }
  },
  fetchProductById: async (id) => {
    try {
      const url = new URL(
        `/api/products/${id}`,
        process.env.NEXT_PUBLIC_LOCATION_ORIGIN
      );
      const res = await fetch(url);
      const fetchedProduct = await res.json();
      set({ currentProduct: fetchedProduct });
    } catch (error) {
      console.log(error);
    }
  },
}));
