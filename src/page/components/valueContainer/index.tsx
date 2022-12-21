import {
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

function ValueContainer() {
  return (
    <Box
      zIndex={1}
      marginTop={-2}
      background="white"
      justifyContent="center"
      boxShadow="lg"
      borderBottomRadius={12}
      paddingX={5}
      paddingY={2}
      borderWidth="3px"
      color="#868686"
    >
      <Text as="b" fontSize="lg" color="bagsPurple">
        $10,000 - $1,000,000
      </Text>
    </Box>
  );
}

export default ValueContainer;
