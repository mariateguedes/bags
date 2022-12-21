import { Box, Text } from "@chakra-ui/react";
import React from "react";

function BenefitsBox() {
  return (
    <Box
      maxW={311}
      paddingLeft={4}
      paddingY={0.5}
      borderRadius="2xl"
      backgroundColor="bagsViolet"
    >
      <Text as="b" color="bagsPurple">
        Lender Benefit
      </Text>
    </Box>
  );
}

export default BenefitsBox;
