import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./product/product-slice";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;
