import React, { useState } from "react";
import AddTodo from "./AddTodo";
import SelectStatus from "./SelectStatus";
import TodoListItem from "./TodoListItem";
import { TodoType, FilterType } from "./Types/Tyeps";
import { List } from "@chakra-ui/react";

const TodoInput: React.VFC<{ value: string }> = ({ value }) => {
  value;
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  const handleOnSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    e.preventDefault();

    // 何も入力されていなかったらリターン
    if (!text) return;

    // 新しい Todo を作成
    const newTodo: TodoType = {
      value: text,
      id: new Date().getTime(),
      checked: false,
      removed: false,
    };

    setTodos([newTodo, ...todos]);
    // フォームへの入力をクリアする
    setText("");
  };
  const handleOnEdit = (id: number, value: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });

    // todos ステートを更新
    setTodos(newTodos);
  };

  const handleOnCheck = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleOnRemove = (id: number, removed: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  // タスクのフィルタリング
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return !todo.removed;
      case "checked":
        return todo.checked && !todo.removed;
      case "unchecked":
        return !todo.checked && !todo.removed;
      case "removed":
        return todo.removed;
      default:
        return todo;
    }
  });

  //削除テスト
  const handleOnEmpty = () => {
    const newTodos = todos.filter((todo) => !todo.removed);
    setTodos(newTodos);
  };
  // AddTodo用
  const testChange = (text: string) => {
    setText(text);
  };

  // ChangeTodoStatus
  const onChangeStatus = (status: FilterType) => {
    setFilter(status);
  };

  return (
    <>
      <AddTodo
        text={text}
        onChangeTodoText={testChange}
        onPutTodoItem={handleOnSubmit}
      />
      <SelectStatus status={filter} onChangeStatus={onChangeStatus} />
      {/* {filter === "removed" ? (
        <Button onClick={() => handleOnEmpty()} icon="bomb" />
      ) : (
        <></>
      )} */}

      <List mt="7">
        {filteredTodos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              value={todo}
              filter={filter}
              handleOnEdit={handleOnEdit}
              handleOnCheck={handleOnCheck}
              handleOnRemove={handleOnRemove}
            />
          );
        })}
      </List>
    </>
  );
};
export default TodoInput;
