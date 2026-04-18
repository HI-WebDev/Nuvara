import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../cart/cartSlice";
import productSlice from "../products/productSlice";
import wishListSlice from "../wishList/wishListSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    wishList: wishListSlice,
  },
});

export default store;
