import { FormEvent, useEffect, useState } from "react";

import { IINPUT_TYPE, ITODO } from "./types";
import { INPUT_TYPES, STATE_OPTIONS } from "./const";
import { Styles } from "./styles";

const ToDoApp = () => {
  const [inputType, setInputType] = useState<IINPUT_TYPE>(INPUT_TYPES[0]);
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
    const newInputType = { ...INPUT_TYPES[1], modifyIndex: index };

    setInputType(newInputType);
    setValue(todoList[index].content);
  };

  // todo row 상태변경(완료 <=> 작업중)
  const changeStateToDo = (index: number) => {
    const newToDoList = [...todoList];

    const stateId = (newToDoList[index].state.id + 1) % STATE_OPTIONS.length;
    newToDoList[index].state = STATE_OPTIONS[stateId];

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
        state: STATE_OPTIONS[0],
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
      setInputType(INPUT_TYPES[0]);
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

      {/* form component */}
      <Styles.FormWrapper>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="할 일을 입력해 주세요."
            onChange={(e) => setValue(e.currentTarget.value)}
            value={value}
          />
          <button type="submit">{inputType.label}</button>
        </form>
      </Styles.FormWrapper>

      {/* list component */}
      <Styles.ListWrapper>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>
              <span>{todo.content}</span>
              <button onClick={() => changeInputType(index)}>수정</button>
              <button onClick={() => changeStateToDo(index)}>{todo.state.label}</button>
              <button onClick={() => removeTodo(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </Styles.ListWrapper>
    </Styles.Wrapper>
  );
};

export default ToDoApp;
