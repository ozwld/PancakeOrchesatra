export type FilterType = "all" | "checked" | "unchecked" | "removed";

export type TodoType = {
  value: string;
  id: number;
  checked: boolean;
  removed: boolean;
};

export type RawTodoType = {
  value: string;
  body: string;
  id: number;
  checked: boolean;
  removed: boolean;
  //   deadline: {
  //     destination: string;
  //     message: string;
  //     times: {};
  //   };
  //   priority: string;
};

export type testTodoItem = {
  value: string;
  id: number;
  name: string;
  dir_key: string;
  body: string;
  created: number;
  checked: number; //0が未 1が完了 2が削除待ち
  removed: boolean;
  priority: number;
  deadline: {
    swich: boolean;
    destination: string; //通知先(line,pwa,slack)
    times: number[];
  };
};
