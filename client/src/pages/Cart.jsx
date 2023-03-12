import React from "react";
import {
  Stack,
  Wrap,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  Link,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react";

const Cart = () => {
  return (
    <Wrap>
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
            <Link as={ReactLink} to="/products">
              Click here to see our product.
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <p> Display</p>
      )}
    </Wrap>
  );
};

export default Cart;
