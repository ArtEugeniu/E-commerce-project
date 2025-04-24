import { configureStore } from "@reduxjs/toolkit";
import { asosApi } from "../services/productsApi";
import CartReducer from "./cartSlice";


export const store = configureStore({
  reducer: {
    [asosApi.reducerPath]: asosApi.reducer,
    cart: CartReducer
  },
  middleware: (getDefaultMIddleware) =>
    getDefaultMIddleware().concat(asosApi.middleware)
})

store.subscribe(() => {
  const state = store.getState();
  const cartData = JSON.stringify(state.cart);
  localStorage.setItem('cart', cartData)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;