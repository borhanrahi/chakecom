import {
  Box,
  Flex,
  Link,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Stack,
  useColorModeValue,
  Icon,
  Button,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiTechnoHeart } from "react-icons/gi";
import { useColorMode } from "@chakra-ui/react";

const links = [
  { linkName: "Products", path: "/products" },
  { linkName: "Cart", path: "/cart" },
];

const NavLink = ({ path, children }) => {
  return (
    <Link
      as={ReactLink}
      to={path}
      py={2}
      px={2}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link as={ReactLink} to="/">
            <Flex alignItems={"center"}>
              <Icon as={GiTechnoHeart} h={6} w={6} color={"orange.400"} />
              <Text fontWeight={"extrabold"}>ChakEcom</Text>
            </Flex>
          </Link>
          <HStack spacing={8} alignItems={"center"}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Button
                as={ReactLink}
                to="/login"
                display={{ base: "none", md: "inline-flex" }}
                p={2}
                fontSize="md"
                fontWeight={400}
                variant="link"
              >
                Sign In
              </Button>
              <Button
                as={ReactLink}
                to="/register"
                display={{ base: "none", md: "inline-flex" }}
                p={2}
                fontSize="md"
                fontWeight={400}
                variant="link"
              >
                Sign Up
              </Button>
            </HStack>

            <Flex alignItems={"center"}>
              <NavLink>
                <Icon
                  as={colorMode === "light" ? MoonIcon : SunIcon}
                  alignSelf={"center"}
                  h={6}
                  w={6}
                  onClick={() => toggleColorMode()}
                />
              </NavLink>
            </Flex>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.linkName} path={link.path}>
                  {link.linkName}
                </NavLink>
              ))}
              <NavLink key="signup" path="/register">
                Sign Up
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default Navbar;
