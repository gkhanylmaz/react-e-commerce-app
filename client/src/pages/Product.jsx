import React from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { products } from "../products";

const Product = () => {
  return (
    <Wrap minHeight="100vh" spacing="30px" justify="center">
      {products.map((product) => (
        <WrapItem key={product._id}>
          <Center w="250px" h="550px">
            {product.name}
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Product;
