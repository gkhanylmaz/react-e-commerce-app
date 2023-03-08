import React, { useEffect } from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getProduct } from "../redux/actions/productActions";

const Product = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Wrap minHeight="100vh" spacing="30px" justify="center">
      {products.map((product) => (
        <WrapItem key={product._id}>
          <Center w="250px" h="550px">
            <ProductCard product={product} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Product;
