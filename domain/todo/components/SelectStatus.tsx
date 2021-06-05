import React, { useState } from "react";
import { Box, Select } from "@chakra-ui/react";

// 仮
const countryOptions = [
  { key: "all", value: "all", text: "すべてのタスク" },
  { key: "checked", value: "checked", text: "完了したタスク" },
  { key: "unchecked", value: "unchecked", text: "未完了のタスク" },
  { key: "removed", value: "removed", text: "削除済みのタスク" },
];

const SelectStatus: React.VFC<{
  status: string;
  onChangeStatus: any;
}> = ({ status, onChangeStatus }) => {
  const onChangeUpdateStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeStatus(e.target.value);
  };

  return (
    <Box w={"13rem"} mt={"2rem"}>
      <Select onChange={onChangeUpdateStatus} size="sm" defaultValue={status}>
        {countryOptions.map((option) => (
          <option key={option.key} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
    </Box>
  );
};
export default SelectStatus;
