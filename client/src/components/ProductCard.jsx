import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Stack,
  Image,
  Box,
  useColorModeValue as mode,
  Circle,
  Badge,
  Flex,
  Link,
  Icon,
  Tooltip,
  Button,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { StarIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import { addCartItem } from "../redux/actions/cartActions";

const Rating = ({ rating, numberOfReviews }) => {
  const { iconSize, setIconSize } = useState("14px");
  return (
    <HStack spacing="2px">
      <StarIcon size={iconSize} w="14px" color="orange.500"></StarIcon>
      <StarIcon
        size={iconSize}
        w="14px"
        color={rating >= 2 ? "orange.500" : "gray.200"}
      ></StarIcon>
      <StarIcon
        size={iconSize}
        w="14px"
        color={rating >= 3 ? "orange.500" : "gray.200"}
      ></StarIcon>
      <StarIcon
        size={iconSize}
        w="14px"
        color={rating >= 4 ? "orange.500" : "gray.200"}
      ></StarIcon>
      <StarIcon
        size={iconSize}
        w="14px"
        color={rating >= 5 ? "orange.500" : "gray.200"}
      ></StarIcon>
      <Text fontSize="md" fontWeight="bold" pl="10px">{`${numberOfReviews} ${
        numberOfReviews === 1 ? "Review" : "Reviews"
      }`}</Text>
    </HStack>
  );
};

const ProductCard = ({ product }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart);

  const { cart } = cartInfo;

  const addItem = (id) => {
    if (cart.some((item) => item.id === id)) {
      toast({
        description: "This item is already in the cart",
        status: "error",
        isClosable: true,
      });
    } else {
      dispatch(addCartItem(id, 1));
      toast({
        description: "Item has been added",
        status: "success",
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      p="2"
      bg={mode("white", "gray.800")}
      spacing="3px"
      borderWidth="1px"
      minW="250px"
      height="450px"
      rounded="lg"
      shadow="lg"
      position="relative"
      justifyContent="space-between"
    >
      {product.productIsNew && (
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
        {product.productIsNew && (
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
          <Box as="h4" fontSize="2xl" fontWeight="semibold" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex>
        <Rating {...product} />
      </Flex>
      <Flex justifyContent="space-between">
        <Box fontSize="2xl" color={mode("gray.800", "white")}>
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
              isDisabled={product.stock <= 0}
              onClick={() => addItem(product._id)}
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
