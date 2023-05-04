import React, { useState } from "react";
import {
  Button,
  Stack,
  Flex,
  useColorModeValue as mode,
  Text,
  Heading,
  Badge,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link as ReactLink, useNavigate } from "react-router-dom";

const CartSummeryOrder = () => {
  const [buttonLoading, setButtonLoading] = useState(false);

  const cartItems = useSelector((state) => state.cart);
  const { subtotal } = cartItems;

  const standardShipping = Number(4.99).toFixed(2);
  const navigate = useNavigate();

  const checkHandle = () => {
    setButtonLoading(true);
    navigate("/checkout");
  };

  return (
    <Stack border="1px" padding="8" spacing="8" w="full" borderColor="gray.100">
      <Heading size="md">Order Summary</Heading>
      <Stack>
        <Flex justifyContent="space-between">
          <Text>SubTotal</Text>
          <Text>${subtotal}</Text>
        </Flex>
        <Flex justifyContent="space-between" pt="3">
          <Text>Shipping</Text>
          <Text>
            {subtotal <= 1000 ? (
              standardShipping
            ) : (
              <Badge colorScheme="green">Free</Badge>
            )}
          </Text>
        </Flex>
        <Flex pt="3" justifyContent="space-between">
          <Text fontWeight="extrabold" fontSize="xl">
            Total
          </Text>
          <Text fontWeight="extrabold" size="xl">
            $
            {subtotal <= 1000
              ? Number(subtotal) + Number(standardShipping)
              : subtotal}
          </Text>
        </Flex>
      </Stack>
      <Button
        rightIcon={<FaArrowRight />}
        colorScheme="orange"
        as={ReactLink}
        isLoading={buttonLoading}
        to="/checkout"
        size="lg"
        onClick={() => checkHandle()}
      >
        Checkout
      </Button>
    </Stack>
  );
};

export default CartSummeryOrder;
