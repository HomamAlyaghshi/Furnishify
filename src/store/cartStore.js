// src/useCartStore.js
import { create } from "zustand";


const useCartStore = create((set) => ({
  cartItems: [],
  isCartOpen: false, // حالة ظهور السلة

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        // إذا كان المنتج موجوداً بالفعل في السلة، زيادة الكمية
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // إذا كان المنتج جديداً، إضافته إلى السلة مع تحديد الكمية
        return {
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  clearCart: () => set({ cartItems: [] }),
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
