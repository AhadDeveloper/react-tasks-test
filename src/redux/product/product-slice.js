import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    filterProducts(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    editProduct(state, action) {
      state.products = state.products.map((item) => {
        if (item.id === action.payload.id) {
          return { ...action.payload.data, ...item };
        }
      });
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
