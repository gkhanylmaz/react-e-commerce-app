import axios from "axios";

import { setLoading, setError, cartItemAdd } from "../slices/cart";

export const addCartItem = (id, qty) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(
      `http://localhost:3001/api/products/${id}`
    );
    const itemToadd = {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      qty,
    };
    dispatch(cartItemAdd(itemToadd));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Try again later"
      )
    );
  }
};
