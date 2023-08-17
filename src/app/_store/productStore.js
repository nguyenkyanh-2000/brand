import { create } from "zustand";

export const useProductStore = create((set) => ({
  currentProduct: {},
  products: [],
  fetchProducts: async () => {
    try {
      const url = new URL("/products", process.env.NEXT_PUBLIC_DATA_SOURCE_URL);
      const res = await fetch(url);
      const fetchedProducts = await res.json();
      set({ products: fetchedProducts });
    } catch (error) {
      console.log(error);
    }
  },
  fetchProductById: async (id) => {
    try {
      const url = new URL(
        `/products/${id}`,
        process.env.NEXT_PUBLIC_DATA_SOURCE_URL
      );
      const res = await fetch(url);
      const fetchedProduct = await res.json();
      set({ currentProduct: fetchedProduct });
    } catch (error) {
      console.log(error);
    }
  },
}));
