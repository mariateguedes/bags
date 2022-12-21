import { Box, Center, Grid } from "@chakra-ui/react";
import React from "react";
import AboutContainer from "./components/aboutContainer";
import DetailsContainer from "./components/detailsContainer";
import ValueContainer from "./components/valueContainer";

function MainPage() {
  return (
    <Center top="50%" height='100vh' backgroundColor='bagsSoftGray'>
      <Grid maxW={{ base: "25%", sm: "60%", md: "55%" }}>
        <DetailsContainer />
        <ValueContainer />
        <AboutContainer />
      </Grid>
    </Center>
  );
}

export default MainPage;
