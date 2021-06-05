import React, { useState } from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

import { TodoType, RawTodoType } from "./Types/Tyeps";

const AddTodo: React.VFC<{
  text: string;
  onChangeTodoText: any;
  onPutTodoItem: any;
}> = ({ text, onChangeTodoText, onPutTodoItem }) => {
  const [RawTodo, setRawTodo] = useState<RawTodoType>({
    value: "",
    body: "string",
    id: 0,
    checked: false,
    removed: false,
  });

  const [filter, setFilter] = useState<Filter>("all");

  const handleOnSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    onPutTodoItem(e);
  };
  const onChangeUpdateText = (value: string) => {
    // setRawTodo({ ...RawTodo, value: value });
    onChangeTodoText(value);
  };
  const onUpdateBody = (value: string) => {
    setRawTodo({ ...RawTodo, body: value });
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    // <form
    //   className="bg-transparent"
    //   onSubmit={(e: React.FormEvent<HTMLFormElement | HTMLInputElement>) =>
    //     handleOnSubmit(e)
    //   }
    // >
    //   <p>value : {RawTodo.value}</p>
    //   <p>Body : {RawTodo.body}</p>
    //   <InputGroup size="lg" mb="1">
    //     <Input
    //       pr="4.5rem"
    //       type={"text"}
    //       value={RawTodo.value}
    //       onChange={(e) => onChangeUpdateText(e.target.value)}
    //       placeholder="素敵なタスク"
    //       disabled={filter === "checked" || filter === "removed"}
    //     />
    //     <InputRightElement width="4.5rem">
    //       <Button h="1.75rem" size="sm" type="submit">
    //         Add
    //       </Button>
    //     </InputRightElement>
    //   </InputGroup>
    //   <Textarea
    //     onChange={(e) => onUpdateBody(e.target.value)}
    //     placeholder="なんでお前はこのタスクを追加するんや"
    //     size="sm"
    //   />
    // </form>
    <form
      className="bg-transparent"
      onSubmit={(e: React.FormEvent<HTMLFormElement | HTMLInputElement>) =>
        handleOnSubmit(e)
      }
    >
      {RawTodo.value}
      <InputGroup size="lg" mb="1">
        <Input
          pr="4.5rem"
          type={"text"}
          value={text}
          onChange={(e) => onChangeUpdateText(e.target.value)}
          placeholder="素敵なタスク"
          disabled={filter === "checked" || filter === "removed"}
        />
        <InputRightElement>
          <IconButton
            aria-label="Add todo"
            colorScheme="gray"
            type="submit"
            icon={<AddIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};
export default AddTodo;
