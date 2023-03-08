import axios from "axios";

import { setProducts, setError, setLoading } from "../slices/productSlice";

export const getProduct = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("http://localhost:3001/api/products");
    dispatch(setProducts(data));
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
