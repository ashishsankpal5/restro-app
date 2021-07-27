// import { useState } from 'react';
import {
  Box,
  Grid,
  Text,
  Heading,
  Badge,
  Image,
  Flex,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
// import FoodApi from './FoodApi';

const FoodCart = ({ FoodData }) => {
  //Ye FoodData humne kuch bhi diya hai naame in Food.js and use yaha accept kiya hai as a props
  // console.log(FoodData);
  return (
    <>
      <Box my="8">
        <Grid templateColumns="1fr 1fr 1fr 1fr" gap="2">
          {FoodData.map((currProd) => {
            //Us props pr jo data mila use he yaha filter kiya hai
            return (
              <Flex
                direction="row"
                borderRadius="md"
                key={currProd.id}
                bgColor="white"
                _hover={{ cursor: 'pointer', shadow: 'dark-lg' }}
              >
                <Box p="5" maxW="350px" borderWidth="1px">
                  <Heading>{currProd.name}</Heading>

                  <Image
                    borderRadius="md"
                    src={currProd.image}
                    boxSize="350px"
                  />

                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="yellow  ">TRENDING</Badge>
                    <Text
                      ml={2}
                      textTransform="uppercase"
                      fontSize=""
                      fontWeight="bold"
                      color="pink.800"
                    >
                      &bull;
                      {currProd.name}
                    </Text>
                  </Flex>
                  <text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    {currProd.description}
                  </text>
                  <br />
                  <text>
                    <em>
                      <b>Category</b>: {currProd.category}
                    </em>
                  </text>
                  <Text mt={2}>
                    {' '}
                    <em>
                      <b>PRICE:</b>
                    </em>{' '}
                    ₹{currProd.price}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default FoodCart;
