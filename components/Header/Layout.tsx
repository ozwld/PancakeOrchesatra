import React, { useState, useContext } from "react";
import NextLink from "next/link";
import { AuthContext } from "../../components/Auth";

import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
const MainHeader: React.VFC<{}> = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
  }
  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      width="full"
      shadow="sm"
      justify="space-between"
      py={4}
      px={8}
    >
      <Menu>
        <MenuButton>
          <Heading color="orange.200" as="h1" fontSize={19}>
            PANKAKE ORCHESATRA
          </Heading>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <NextLink href="/">Home</NextLink>
          </MenuItem>
          <MenuItem>
            <NextLink href="/todo">todo</NextLink>
          </MenuItem>
          <MenuItem>
            <NextLink href="/debri">memo</NextLink>
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu isLazy>
        <MenuButton>
          <Avatar
            src={currentUser?.photoURL ? currentUser?.photoURL : ""}
            size="sm"
          />
        </MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>ログアウト</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default MainHeader;
