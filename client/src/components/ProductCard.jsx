import React from "react";
import { Stack, Image, Box, useColorModeValue, Circle } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { StarIcon } from "@chakra-ui/icons";

const ProductCard = ({ product }) => {
  return (
    <Stack
      p="2"
      bg={useColorModeValue("white", "gray.800")}
      spacing="3px"
      borderWidth="1px"
      minW="250px"
      height="450px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      {product.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="green.300"
        />
      )}
      {product.stock <= 0 && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.300"
        />
      )}
      <Image src={product.image} alt={product.name} roundedTop="lg" />
    </Stack>
  );
};

export default ProductCard;
