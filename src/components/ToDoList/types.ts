import { FormEvent } from "react";

type STATE_TYPE = "ING" | "DONE";
type STATE_LABEL = "작업중" | "완료";

type INPUT_TYPE = "ADD" | "MODIFY";
type INPUT_LABEL = "추가" | "수정";

// todo state
export interface ISTATE_OPTIONS {
  id: number;
  type: STATE_TYPE;
  label: STATE_LABEL;
}

export interface IToDoForm {
  handleSubmit: (e: FormEvent) => void;
  setValue: any;
  value: string;
  inputType: IINPUT_TYPE;
}

export interface IToDoList {
  todoList: ITODO[];
  changeInputType: (index: number) => void;
  changeStateToDo: (index: number) => void;
  removeTodo: (index: number) => void;
}
export interface ITODO {
  id: number;
  content: string;
  state: ISTATE_OPTIONS;
  // 작성자, 날짜...
}

// input 입력 상태(todo 추가, todo 수정)
export interface IINPUT_TYPE {
  id: number;
  type: INPUT_TYPE;
  label: INPUT_LABEL;
  // 수정 상태 일 때, 수정하려는 todo index
  modifyIndex?: number;
}

export interface IToDoAppUI {
  handleSubmit: (e: FormEvent) => void;
  setValue: any;
  value: string;
  inputType: IINPUT_TYPE;
  todoList: ITODO[];
  changeInputType: (index: number) => void;
  changeStateToDo: (index: number) => void;
  removeTodo: (index: number) => void;
}
