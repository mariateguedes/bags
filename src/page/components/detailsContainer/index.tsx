import { Box, Center, ChakraProvider, Container, Grid, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BiMap } from 'react-icons/bi';



function DetailsContainer() {
  return (
    <Box justifyContent="center" borderWidth='3px' color='#868686'>
        <Text as='b' fontSize="24px" color="#000000">Revenue Based Financing</Text>
        <Text fontSize="16px" color="#000000">By Lendistry</Text>
        <Grid display='flex' alignItems='center'>
            <Icon color="#000000" as={BiMap}/>
            <Text fontSize="16px" color="#000000">Location</Text>
        </Grid>
        <Text fontSize="16px" color="#000000">Get Funded in 12 days.</Text>
    </Box>
  );
}

export default DetailsContainer;