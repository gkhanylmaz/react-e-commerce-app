import React from "react";
import CartItem from "../components/CartItem";
import {
  Stack,
  Wrap,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  Link,
  Box,
  Heading,
  HStack,
  Flex,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartActions = useSelector((state) => state.cart);
  const { error, loading, cart } = cartActions;
  return (
    <Wrap justify="center">
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
          We are sorry
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status="warning">
          <AlertIcon />
          <AlertDescription>
            <Link as={ReactLink} to="/product">
              Click here to see our product.
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            spacing={{ base: "8", md: "16" }}
          >
            <Stack spacing={{ base: "8", md: "10" }} flex="2">
              <Heading fontSize="2xl" fontWeight="semibold">
                Shopping Cart
              </Heading>
              <Stack spacing="6">
                {cart.map((cartItem) => (
                  <CartItem {...cartItem} key={cartItem.id} />
                ))}
              </Stack>
            </Stack>
            <Flex direction="column" align="center" flex="1">
              <HStack mt="6" fontWeight="semibold">
                <p>or</p>

                <Link
                  as={ReactLink}
                  to="/product"
                  color={mode("orange.500", "orange.200")}
                >
                  Continue Shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      )}
    </Wrap>
  );
};

export default Cart;
