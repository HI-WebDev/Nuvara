import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    return axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data);
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      ((state.loading = false),
        (state.products = action.payload),
        (state.error = ""));
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      ((state.loading = false),
        (state.products = []),
        (state.error = action.payload.message));
    });
  },
});

const productReducer = productSlice.reducer;

export { productReducer };
