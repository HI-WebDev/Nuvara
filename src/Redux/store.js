import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Slices/cartSlice";
import { productReducer } from "./Slices/productSlice";
import { wishlistReducer } from "./Slices/wishListSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    wishList: wishlistReducer,
  },
});

export default store;
