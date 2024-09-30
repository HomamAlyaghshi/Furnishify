// src/store/wishListStore.js
import { create } from "zustand";

const useWishListStore = create((set) => ({
  wishListItems: [], // قائمة العناصر المفضلة

  addToWishList: (product) =>
    set((state) => {
      const existingItem = state.wishListItems.find(
        (item) => item.id === product.id
      );
      if (!existingItem) {
        return { wishListItems: [...state.wishListItems, product] };
      }
      return state;
    }),

  removeFromWishList: (id) =>
    set((state) => ({
      wishListItems: state.wishListItems.filter((item) => item.id !== id),
    })),

  clearWishList: () => set({ wishListItems: [] }), // مسح المفضلة
}));

export default useWishListStore;
