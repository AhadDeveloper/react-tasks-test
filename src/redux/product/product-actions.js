import axios from "axios";
import { productActions } from "./product-slice";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Error while getting data!");
      }

      const data = await response.json();

      console.log(data);
      dispatch(productActions.setProducts(data));
    } catch (err) {
      throw err;
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      // const response = await axios.delete(
      //   `https://fakestoreapi.com/products/${id}`
      // );

      // if (!response.ok) {
      //   throw new Error("Error while deleting data");
      // }

      // console.log(response.data);
      console.log(id);
      dispatch(productActions.filterProducts({ id: id }));
    } catch (err) {
      throw err;
    }
  };
};
