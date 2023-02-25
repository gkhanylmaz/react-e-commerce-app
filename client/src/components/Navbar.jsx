import {
  Box,
  Flex,
  HStack,
  VStack,
  IconButton,
  Icon,
  Link,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import {
  HamburIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { GiTechnoHeart } from "react-icons/gi";
import { Link as ReactLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const links = [
    {
      linkName: "Product",
      path: "/product",
    },
    { linkName: "ShopingCart", path: "/cart" },
  ];

  const NavLink = ({ path, children }) => (
    <Link
      as={ReactLink}
      to={path}
      px={2}
      py={2}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Link>
  );

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        ></IconButton>
        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center">
              <Icon as={GiTechnoHeart} h={6} w={6} color="orange.400" />
              <Text fontWeight="extrabold" ml={2}>
                Tech Lines
              </Text>
            </Flex>
          </Link>
          <HStack>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex>
          <NavLink>
            <Icon
              as={colorMode === "light" ? MoonIcon : SunIcon}
              alignItems="center"
              onClick={() => toggleColorMode()}
            />
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
