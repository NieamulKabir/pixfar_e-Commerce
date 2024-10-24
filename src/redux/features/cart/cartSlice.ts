import { IProduct } from "@/types/globalTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existing) {
        existing.quantity = (existing.quantity || 0) + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
        state.total -= action.payload.price;
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        state.total -= action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.total -= action.payload.price * (action.payload.quantity || 1);
    },
  },
});

export const { addToCart, removeFromCart, removeOneFromCart } = cartSlice.actions;
export default cartSlice.reducer;