// components/Navbar.js
import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box shadow='sm' p={4} >
      <Flex justify="space-between">
        <Heading as="h1" fontSize="xl">
          Dynamically Images 
        </Heading>
       
      </Flex>
    </Box>
  );
};

export default Navbar;
