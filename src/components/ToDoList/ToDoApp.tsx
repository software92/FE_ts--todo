import { FormEvent, useEffect, useState } from "react";

import { IINPUT_TYPE, ITODO } from "./types";
import { Styles } from "./styles";
import { ToDoConst } from "./const";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDoApp = () => {
  const [inputType, setInputType] = useState<IINPUT_TYPE>(ToDoConst.INPUT_TYPES[0]);
  const [value, setValue] = useState<string>("");
  const [todoList, setTodoList] = useState<ITODO[]>([]);

  // localStorage에 저장된 todolist load
  const loadToDoList = () => {
    const temp: ITODO[] = JSON.parse(localStorage.getItem("TODO") || "[]");

    setTodoList(temp);
  };

  // localStorage 저장
  const saveToDoList = (newList: ITODO[]) => {
    localStorage.setItem("TODO", JSON.stringify(newList));
  };

  // todo row content 수정
  const changeInputType = (index: number) => {
    const newInputType = { ...ToDoConst.INPUT_TYPES[1], modifyIndex: index };

    setInputType(newInputType);
    setValue(todoList[index].content);
  };

  // todo row 상태변경(완료 <=> 작업중)
  const changeStateToDo = (index: number) => {
    const newToDoList = [...todoList];

    const stateId = (newToDoList[index].state.id + 1) % ToDoConst.STATE_OPTIONS.length;
    newToDoList[index].state = ToDoConst.STATE_OPTIONS[stateId];

    setTodoList(newToDoList);
    saveToDoList(newToDoList);
  };

  // todo row 삭제
  const removeTodo = (index: number) => {
    const newToDoList = [...todoList];
    newToDoList.splice(index, 1);

    setTodoList(newToDoList);
    saveToDoList(newToDoList);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // todo value required (예외 처리)
    if (value.length === 0) return console.log("todo를 입력해 주세요");

    const newToDoList = [...todoList];
    // todo row 추가
    if (inputType.type === "ADD") {
      const newToDoObj = {
        id: Date.now(),
        content: value,
        state: ToDoConst.STATE_OPTIONS[0],
      };
      newToDoList.push(newToDoObj);
      setTodoList(newToDoList);
    }

    // todo row content 수정
    if (inputType.type === "MODIFY") {
      if (typeof inputType.modifyIndex === "number") {
        newToDoList[inputType.modifyIndex].content = value;
        setTodoList(newToDoList);
      }
      setInputType(ToDoConst.INPUT_TYPES[0]);
    }

    // todo row 등록 > input 초기화
    setValue("");
    saveToDoList(newToDoList);
  };

  useEffect(() => {
    loadToDoList();
  }, []);

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

export default ToDoApp;
