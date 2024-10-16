// src/useCartStore.js
import { create } from "zustand";
import { localStorageStore } from "./../utility/data-storage";

const useCartStore = create((set) => ({
  cartItems: localStorageStore.cartStorage.get()?.cartItems || [],
  isCartOpen: false, // حالة ظهور السلة

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // إذا كان المنتج موجوداً بالفعل في السلة، زيادة الكمية
        const items = {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
        localStorageStore.cartStorage.set(items);
        return items;
      }

      // إذا كان المنتج جديداً، إضافته إلى السلة مع تحديد الكمية
      const items = {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
      localStorageStore.cartStorage.set(items);
      return items;
    }),

  removeFromCart: (id) =>
    set((state) => {
      const items = {
        cartItems: state.cartItems.filter((item) => item.id !== id),
      };
      localStorageStore.cartStorage.set(items);
      return items;
    }),

  increaseQuantity: (id) => {
    set((state) => {
      const items = {
        cartItems: state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
      localStorageStore.cartStorage.set(items);
      return items;
    });
  },

  decreaseQuantity: (id) => {
    set((state) => {
      const items = {
        cartItems: state.cartItems.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
      localStorageStore.cartStorage.set(items);
      return items;
    });
  },

  clearCart: () => {
    localStorageStore.cartStorage.remove();
    set({ cartItems: [] });
  },
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  // دالة لتبديل حالة السلة
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  // دالة لحساب الـ Subtotal
  calculateSubtotal: () =>
    set((state) => ({
      subtotal: state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    })),

  // دالة لحفظ الـ Subtotal في الحالة
  updateSubtotal: () =>
    set((state) => ({
      subtotal: state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    })),
}));

export default useCartStore;
