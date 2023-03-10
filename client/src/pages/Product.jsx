import React, { useEffect } from "react";
import {
  Center,
  Stack,
  Wrap,
  WrapItem,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
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
      {loading ? (
        <Stack direction="row" spacing={4}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            alignItems="center"
          />
        </Stack>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      ) : (
        products.map((product) => (
          <WrapItem key={product._id}>
            <Center w="250px" h="550px">
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))
      )}
    </Wrap>
  );
};

export default Product;
