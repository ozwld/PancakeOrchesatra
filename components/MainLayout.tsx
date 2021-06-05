import { ReactNode } from "react";
import MainHeader from "./Header/Layout";

import { Box, Flex } from "@chakra-ui/react";
interface Props {
  children: ReactNode;
}
const MainLayout = ({ children }: Props) => {
  return (
    <main>
      <Flex bg="gray.30" w="100vw" h="100vh">
        <MainHeader />
        <Box mt={"6rem"} mx="auto" w="100rem" px={6}>
          {children}
        </Box>
      </Flex>
    </main>
  );
};
export default MainLayout;
