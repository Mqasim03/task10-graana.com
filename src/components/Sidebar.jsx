import React from 'react';
import { Box, VStack, Text, Link, Icon, Flex } from '@chakra-ui/react';
import Dashboard from './Dashbord';
// import ImageGrid from './imgegrid';

const Sidebar = () => {
  return (
    <Flex>
    <Box w='102px' shadow='xl' p={4}>
    
      
    </Box>
    <Box>
    <Dashboard/>
{/* <ImageGrid/> */}
    </Box>
    </Flex>
  );
};

export default Sidebar;
