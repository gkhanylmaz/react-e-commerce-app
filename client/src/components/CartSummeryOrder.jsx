import React, { useState } from "react";
import {
  Button,
  Stack,
  Flex,
  Box,
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
    <Stack>
      <Heading>Order Summary</Heading>
      <Stack>
        <Flex>
          <Text>SubTotal</Text>
          <Text>{subtotal}</Text>
        </Flex>
        <Flex>
          <Text>Shipping</Text>
          <Text>
            {subtotal <= 1000 ? standardShipping : <Badge>Free</Badge>}
          </Text>
        </Flex>
        <Flex>
          {subtotal <= 1000
            ? Number(subtotal) + Number(standardShipping)
            : subtotal}
        </Flex>
      </Stack>
      <Button
        rightIcon={<FaArrowRight />}
        colorScheme="orange"
        as={React}
        to="/checkout"
        isLoading={buttonLoading}
        size="lg"
        onClick={() => checkHandle()}
      >
        Chekout
      </Button>
    </Stack>
  );
};

export default CartSummeryOrder;
