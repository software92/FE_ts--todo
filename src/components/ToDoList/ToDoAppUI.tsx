import { FormEvent } from "react";

import { Styles } from "./styles";
import { IINPUT_TYPE, ITODO } from "./types";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

interface IToDoAppUI {
  handleSubmit: (e: FormEvent) => void;
  setValue: any;
  value: string;
  inputType: IINPUT_TYPE;
  todoList: ITODO[];
  changeInputType: (index: number) => void;
  changeStateToDo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const ToDoAppUI = ({
  setValue,
  value,
  inputType,
  todoList,
  handleSubmit,
  changeInputType,
  changeStateToDo,
  removeTodo,
}: IToDoAppUI) => {
  return (
    <Styles.Wrapper>
      <Styles.Title>To Do List</Styles.Title>

      <ToDoForm
        handleSubmit={handleSubmit}
        setValue={setValue}
        value={value}
        inputType={inputType}
      />

      <ToDoList
        todoList={todoList}
        changeInputType={changeInputType}
        changeStateToDo={changeStateToDo}
        removeTodo={removeTodo}
      />
    </Styles.Wrapper>
  );
};

export default ToDoAppUI;
