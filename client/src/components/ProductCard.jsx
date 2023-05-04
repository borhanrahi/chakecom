import {
  Flex,
  Box,
  Circle,
  Image,
  useColorModeValue,
  Icon,
  Badge,
  Text,
  HStack,
  Button,
  Tooltip,
  Stack,
} from "@chakra-ui/react";

import { FiShoppingCart } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";
const Rating = ({ rating, numReviews }) => {
  const { iconSize } = useState("14px");
  return (
    <Flex>
      <HStack spacing={"2px"}>
        <StarIcon w={iconSize} h={iconSize} color="orange.500" />
        <StarIcon
          w={iconSize}
          h={iconSize}
          color={rating >= 2 ? "orange.500" : "gray.300"}
        />
        <StarIcon
          w={iconSize}
          h={iconSize}
          color={rating >= 3 ? "orange.500" : "gray.300"}
        />
        <StarIcon
          w={iconSize}
          h={iconSize}
          color={rating >= 4 ? "orange.500" : "gray.300"}
        />
        <StarIcon
          w={iconSize}
          h={iconSize}
          color={rating >= 5 ? "orange.500" : "gray.300"}
        />
        <Text fontSize={"md"} fontWeight={"bold"}>
          {`${numReviews} ${numReviews > 1 ? "Reviews" : "Review"}`}
        </Text>
      </HStack>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Stack
      p="2"
      spacing="3px"
      bg={useColorModeValue("white", "gray.800")}
      minW={"250px"}
      h={"450px"}
      borderWidth={"1px"}
      rounded={"lg"}
      shadow={"lg"}
      position={"relative"}
    >
      {/* Use the && operator to conditionally render a Circle component */}
      {product.isNew && (
        <Circle
          size={"10px"}
          bg={"green.500"}
          position={"absolute"}
          top={"2px"}
          right={"2px"}
        />
      )}

      {/* Use the && operator to conditionally render a Circle component */}
      {product.stock && (
        <Circle
          size={"10px"}
          bg={"red.500"}
          position={"absolute"}
          top={"2px"}
          right={"2px"}
        />
      )}

      <Image src={product.image} alt={product.name} roundedTop={"lg"} />

      {/* Use Box component to display product information */}
      <Box p="4">
        <Box display={"flex"} maxH={"5"} alignItems={"baseline"}>
          {product.stock <= 0 && (
            <Badge
              rounded={"full"}
              px={"2"}
              fontSize={".8rem"}
              colorScheme="red"
            >
              Out of Stock
            </Badge>
          )}
          {product.isNew && (
            <Badge
              rounded={"full"}
              px={"2"}
              fontSize={".8rem"}
              colorScheme="red"
            >
              New
            </Badge>
          )}
        </Box>
        <Text fontSize="xl" fontWeight="semibold" mb="2">
          {product.name}
        </Text>
        <Text fontWeight="bold" color="gray.500" mb="2">
          ${product.price}
        </Text>
        <Box d="flex" alignItems="center" mt="2">
          {/* Use StarIcon component to display product rating */}
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </Box>
        {/* Use RouterLink component from react-router-dom to navigate to the product detail page */}
        <Tooltip
          label="Add to Cart"
          bg={"white"}
          placement="top"
          color={"gray.800"}
          fontSize={"lg"}
        >
          <Button
            variant={"ghost"}
            display={"flex"}
            disabled={product.stock <= 0}
            as={RouterLink}
            to={`/product/${product.id}`}
            colorScheme="blue"
            mt="4"
          >
            <Text fontSize={"lg"} spacing="2">
              Add to Cart{" "}
            </Text>
            <Icon as={FiShoppingCart} />
          </Button>
        </Tooltip>
      </Box>
    </Stack>
  );
};

export default ProductCard;
