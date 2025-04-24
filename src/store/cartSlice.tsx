import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
  id: number
  name: string
  image: string
  size: string
  color: string
  price: number
  quantity: number
}

const getInitialState = () => {
  const localStorageCart = localStorage.getItem('cart');

  if (localStorageCart) {
    try {
      return JSON.parse(localStorageCart)
    } catch {
      return []
    }
  }
  return []
}


export const CartSlice = createSlice({
  name: "CartSlice",
  initialState: getInitialState() as ICartItem[],
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const id = action.payload.id;
      const existingItemIndex = state.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        const existingItem = state[existingItemIndex];

        if (existingItem.quantity === action.payload.quantity &&
          existingItem.size == action.payload.size
        ) return;

        state[existingItemIndex] = action.payload;
      } else {
        state.push(action.payload);
      }
    },

    deleteItem: (state, action: PayloadAction<number>) => {
      return state.filter(item => item.id !== action.payload)
    },

    increment: (state, action: PayloadAction<number>) => {
      const product = state.find(item => item.id === action.payload);
      if (product) {
        product.quantity++
      }
    },

    decrement: (state, action: PayloadAction<number>) => {
      const product = state.find(item => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity--
      }
    }
  }
})

export default CartSlice.reducer;

export const { addItem, deleteItem, increment, decrement } = CartSlice.actions;