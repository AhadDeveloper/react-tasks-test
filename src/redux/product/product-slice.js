import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
