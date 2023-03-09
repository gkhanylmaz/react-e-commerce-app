import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "./slices/products";

const reducer = combineReducers({
  products,
});

export const store = configureStore({
  reducer,
});
