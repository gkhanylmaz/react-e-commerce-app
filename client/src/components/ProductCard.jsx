import React from "react";
import {
  Stack,
  Image,
  Box,
  useColorModeValue,
  Circle,
  Badge,
  Flex,
  Link,
  Icon,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { StarIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";

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
      <Box flex="1" alignItems="baseline" maxH="5">
        {product.stock <= 0 && (
          <Badge colorScheme="red" fontSize="0.8em" rounded="full" px="2">
            Sold Out
          </Badge>
        )}
        {product.isNew && (
          <Badge colorScheme="green" rounded="full" fontSize="0.8em">
            New
          </Badge>
        )}
      </Box>
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Link
          as={ReactLink}
          to={`/products${product._id}`}
          cursor="pointer"
          pt="2"
        >
          <Box fontSize="2xl" fontWeight="semibold" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent="space-between">
        <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
          <Box as="span" color="gray.600" fontSize="lg">
            $
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Box justifyItems="space-between" alignItems="center">
          <Tooltip
            label="Add to cart"
            placement="top"
            bg="white"
            color="gray.900"
            fontSize="1.0em"
          >
            <Button
              variant="ghost"
              display="flex"
              disabled={product.stock <= 0}
            >
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf="center" />
            </Button>
          </Tooltip>
        </Box>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
