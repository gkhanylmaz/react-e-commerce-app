import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setLoading, setError, setProducts } = productSlice.actions;

export default productSlice.reducer;
export const productsSelector = (state) => state.products;
