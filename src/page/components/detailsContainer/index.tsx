import { Box, Grid, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiMap } from "react-icons/bi";

function DetailsContainer() {
  return (
    <Box
      as="fieldset"
      paddingX={5}
      paddingBottom={6}
      paddingTop={3}
      justifyContent="center"
      borderTopRadius={12}
      borderWidth="3px"
      color="bagsGray"
    >
      <Box
        marginRight={1}
        as="legend"
        textAlign="right"
        paddingX={7}
        borderRadius="lg"
        backgroundColor="bagsPurple"
      >
        <Text fontSize="xsm" color="bagsWhite">
          Good Fit
        </Text>
      </Box>
      <Text as="b" fontSize={['sm','sm', 'md', 'xlg']} color="bagsBlack">
        Revenue Based Financing
      </Text>
      <Text fontSize="sm" color="bagsBlack">
        By Lendistry
      </Text>
      <Grid display="flex" alignItems="center">
        <Icon color="bagsBlack" as={BiMap} />
        <Text fontSize="sm" color="bagsBlack">
          Location
        </Text>
      </Grid>
      <Text fontSize="xsm" color="bagsBlack">
        Get Funded in <b>12 days</b>.
      </Text>
    </Box>
  );
}

export default DetailsContainer;
