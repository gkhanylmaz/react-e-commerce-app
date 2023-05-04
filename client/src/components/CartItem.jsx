import React from "react";
import {
  Flex,
  Stack,
  Image,
  Box,
  Text,
  Select,
  CloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../redux/actions/cartActions";

const CartItem = ({ image, name, qty, price, id, stock }) => {
  const dispatch = useDispatch();

  return (
    <Flex justifyContent="space-between" align="center" w="full">
      <Stack direction="row" spacing="5" w="full">
        <Image
          src={image}
          alt={name}
          boxSize="120px"
          rounded="lg"
          fit="cover"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{name}</Text>
          </Stack>
        </Box>
      </Stack>
      <Flex
        w="full"
        display="flex"
        justifyContent="space-between"
        align="center"
        pl="20px"
      >
        <Select
          maxW="64px"
          display="flex"
          justifyContent="space-between"
          value={qty}
          onChange={(e) => {
            dispatch(addCartItem(id, e.target.value));
          }}
        >
          {[...Array(stock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </Select>
        <Text fontWeight="bold">${price}</Text>
        <CloseButton onClick={() => dispatch(removeCartItem(id))} />
      </Flex>
    </Flex>
  );
};

export default CartItem;
