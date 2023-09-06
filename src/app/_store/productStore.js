import { create } from "zustand";

export const useProductStore = create((set) => ({
  currentProduct: {},
  products: [],
  error: null,
  fetchProducts: async (page = 1, limit = 10) => {
    try {
      const url = new URL(
        "/api/products",
        process.env.NEXT_PUBLIC_LOCATION_ORIGIN
      );
      url.searchParams.set("page", page);
      url.searchParams.set("limit", limit);
      const res = await fetch(url);
      const result = await res.json();
      set({ products: result.data.products });
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
