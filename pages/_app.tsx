import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../styles/themes";
import { AuthProvider } from "../components/Auth";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
