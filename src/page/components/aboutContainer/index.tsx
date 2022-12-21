import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import BenefitsBox from "../benefitsBox";

function AboutContainer() {
  return (
    <Box
      borderBottomRadius={12}
      display="grid"
      marginTop={-3}
      gap={5}
      paddingX={5}
      paddingY={12}
      justifyContent="center"
      borderWidth="2.25px"
      color="bagsGray"
    >
      <Grid display="flex" alignItems="center" justifyContent="space-between">
        <Text as="b" fontSize="md" color="bagsBlack">
          About the Lender
        </Text>
        <Button
          fontSize="sm"
          variant={{ base: "bagsNormal", "2xl": "bagsDesktop" }}
        >
          Learn More
        </Button>
      </Grid>
      <Text fontSize="sm" color="bagsBlack">
        Fill with Lorem ipsum dhfe ndwufiu fheh u2en i19h ueu2 0 he ns asabsqh
        sw whhdi dw ppwd euy4h dbdjq jeeoi nd.
      </Text>
      <BenefitsBox />
      <BenefitsBox />
      <BenefitsBox />
    </Box>
  );
}

export default AboutContainer;
