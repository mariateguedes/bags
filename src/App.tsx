import {
  ChakraProvider,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import MainPage from "./page";

const ButtonStyle = defineStyleConfig({
  baseStyle: {
    border: "2px solid",
    borderRadius: "6px",
    width: "130px",
    height: "32px",
    color: "#FFFFFF",
    fontsize: '16px'
  },
  variants: {
    bagsNormal: {
      bg: "#020202",
    },
    bagsDesktop: {
      bg: "#0051FF",
    },
  },
  defaultProps: {
    variant: "bagsNormal",
  },
});

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  components: {
    Button: ButtonStyle,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1350px",
  },
  colors: {
    bagsPurple: '#7B5BE4',
    bagsViolet: '#ECEAF2',
    bagsBlue: '#0051FF',
    bagsWhite: '#FFFFFF',
    bagsBlack: '#020202',
    bagsGray: '#868686',
    bagsSoftGray: '#F5F5F5'
  },
  fontSizes: {
    xsm: '14px',
    sm: '16px',
    md: '20px',
    lg: '22px',
    xlg: '24px'
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
