import { IINPUT_TYPE, ISTATE_OPTIONS } from "./types";

const STATE_OPTIONS: ISTATE_OPTIONS[] = [
  { id: 0, type: "ING", label: "작업중" },
  { id: 1, type: "DONE", label: "완료" },
];

const INPUT_TYPES: IINPUT_TYPE[] = [
  { id: 0, type: "ADD", label: "추가" },
  { id: 1, type: "MODIFY", label: "수정", modifyIndex: -1 },
];

export const ToDoConst = {
  STATE_OPTIONS,
  INPUT_TYPES,
};
