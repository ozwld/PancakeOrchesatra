import React, { useState } from "react";
import Link from "next/link";

import {
  Flex,
  Input,
  ListItem,
  Button,
  Checkbox,
  Spacer,
  Box,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import { TodoType } from "./Types/Tyeps";

const TodoListItem: React.VFC<{
  value: TodoType;
  filter: string;
  handleOnEdit: any;
  handleOnCheck: any;
  handleOnRemove: any;
}> = ({ value, filter, handleOnEdit, handleOnCheck, handleOnRemove }) => {
  const OnChangeCheck = (id: number, checked: boolean) => {
    handleOnCheck(id, checked);
  };

  const OnChangeEdit = (id: number, value: string) => {
    handleOnEdit(id, value);
  };
  const OnRemoveCheck = (id: number, removed: boolean) => {
    handleOnRemove(id, removed);
  };

  return (
    <ListItem key={value.id} mb="0.5rem">
      <Flex align="center">
        <Flex
          align="center"
          justify="center"
          w={7}
          h={7}
          mr={3}
          bg="therd.100"
          rounded="full"
          onClick={() => OnChangeCheck(value.id, value.checked)}
        >
          <CheckIcon w="3" h="3" color="white" />
        </Flex>
        {/* <Checkbox
            checked={value.checked}
            onChange={() => OnChangeCheck(value.id, value.checked)}
          /> */}

        <Box flex="4" mr="2rem">
          <Link href={`/todo/?item=${value.id}`}>
            <Text fontSize="1.4rem">{value.value}</Text>
          </Link>

          {/* <Input
            borderRadius="md"
            disabled={value.removed}
            value={value.value}
            onChange={(e) => OnChangeEdit(value.id, e.target.value)}
          /> */}
        </Box>
        <Box>
          {/* // TODO リストの表示条件について検討残し */}
          <Button
            as="button"
            borderRadius="md"
            bg="secondary"
            colorScheme="secondary"
            color="white"
            px={4}
            h={8}
            disabled={value.removed ? true : false}
            onClick={() => OnRemoveCheck(value.id, value.removed)}
          >
            {value.removed ? "復元" : "削除"}
          </Button>
        </Box>
      </Flex>
    </ListItem>
  );
};
export default TodoListItem;
