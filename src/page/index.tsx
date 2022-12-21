import { Box, Center, Grid } from "@chakra-ui/react";
import React from "react";
import AboutContainer from "./components/aboutContainer";
import DetailsContainer from "./components/detailsContainer";
import ValueContainer from "./components/valueContainer";

function MainPage() {
  return (
    <Center top="50%">
      <Grid maxW={{ base: "30%", sm: "60%", md: "55%" }} marginTop="10%">
        <DetailsContainer />
        <ValueContainer />
        <AboutContainer />
      </Grid>
    </Center>
  );
}

export default MainPage;
