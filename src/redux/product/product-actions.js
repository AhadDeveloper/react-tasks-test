import axios from "axios";
import { productActions } from "./product-slice";

export const sendUserData = (data) => {
  return async (dispatch) => {
    const sendData = async () => {
      const response = await fetch(
        "https://for-testing-474f7-default-rtdb.firebaseio.com/user.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Error while sending data");
      }
    };

    try {
      await sendData();
    } catch (err) {
      throw err;
    }
  };
};

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
      const response = await axios.delete(
        `https://fakestoreapi.com/products/${id}`
      );

      if (!response.ok) {
        throw new Error("Error while deleting data");
      }

      console.log(response.data);
      dispatch(productActions.deleteProduct(id));
    } catch (err) {
      throw err;
    }
  };
};
