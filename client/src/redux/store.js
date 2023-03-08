import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";

const reducer = combineReducers({
  productSlice,
});

export const store = configureStore({
  reducer,
});
