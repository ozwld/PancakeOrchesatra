import React, { useState } from "react";

import Head from "next/head";
import Router from "next/router";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Container,
  Heading,
  Button,
  Text,
  Box,
  Flex,
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
  HStack,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const TodoChildrenPage: React.VFC<{
  itemKey: string;
  onClose: any;
}> = ({ itemKey, onClose }) => {
  const onCloseModal = () => {
    onClose(false);
    Router.push("/todo");
  };
  const [value, setValue] = React.useState("1");
  const [dellll, setdellll] = React.useState("1");

  return (
    // TODO 全体的にレイアウトダサすぎるから要修正
    <ModalContent>
      <ModalHeader></ModalHeader>
      <ModalCloseButton />
      <ModalBody p="4">
        <Box mb="4">
          <Input placeholder="ここにvalue" size="lg" />
        </Box>
        <Box mb="1.5rem">
          <Textarea
            placeholder="なんでお前はこのタスクを追加するんや"
            size="lg"
          />
        </Box>

        <Box mb="1.5rem">
          <Text fontSize="xl" mb="0.5rem">
            通知する？
          </Text>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="1">する</Radio>
              <Radio value="2">しない</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box mb="1.5rem">
          <Text fontSize="xl" mb="0.5rem">
            通知時間
          </Text>
          <CheckboxGroup colorScheme="green">
            <HStack>
              <Checkbox value="11:00" mr="0.7rem">
                11:00
              </Checkbox>
              <Checkbox value="13:00" mr="0.7rem">
                13:00
              </Checkbox>
              <Checkbox value="18:00" mr="0.7rem">
                18:00
              </Checkbox>
              <Checkbox value="21:00" mr="0.7rem">
                21:00
              </Checkbox>
            </HStack>
          </CheckboxGroup>
        </Box>

        <Box mb="1.5rem">
          <Text fontSize="xl" mb="0.5rem">
            通知間隔
          </Text>
          <RadioGroup onChange={setdellll} value={dellll}>
            <Stack direction="row">
              <Radio value="1">毎日</Radio>
              <Radio value="2">平日</Radio>
              <Radio value="3">土日</Radio>
              <Radio value="4">仕事モード</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box>
          <Button
            // TODO 保存時のアニメーション追加
            colorScheme="teal"
            size="lg"
            width="100%"
            height="4rem"
            onClick={onCloseModal}
          >
            SAVE
          </Button>
        </Box>
      </ModalBody>
    </ModalContent>
  );
};
export default TodoChildrenPage;
