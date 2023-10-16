import { FormEvent, useState } from "react";

interface ISTATE_OPTIONS {
  id: number;
  type: string;
  label: string;
}

interface IINPUT_TYPE {
  id: number;
  type: string;
  label: string;
  modifyIndex?: number;
}

const STATE_OPTIONS: ISTATE_OPTIONS[] = [
  { id: 0, type: "ING", label: "작업중" },
  { id: 1, type: "DONE", label: "완료" },
];

const INPUT_TYPES: IINPUT_TYPE[] = [
  { id: 0, type: "ADD", label: "추가" },
  { id: 1, type: "MODIFY", label: "수정", modifyIndex: -1 },
];

const ToDoApp = () => {
  const [inputType, setInputType] = useState<IINPUT_TYPE>(INPUT_TYPES[0]);
  const [value, setValue] = useState<string>("");
  const [todoList, setTodoList] = useState<
    {
      id: number;
      content: string;
      state: ISTATE_OPTIONS;
      // 작성자, 날짜...
    }[]
  >([]);

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
  };

  // todo row 삭제
  const removeTodo = (index: number) => {
    const newToDoList = [...todoList];
    newToDoList.splice(index, 1);
    setTodoList(newToDoList);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // todo value required (예외 처리)
    if (value.length === 0) return console.log("todo를 입력해 주세요");

    // todo row 추가
    if (inputType.type === "ADD") {
      const newToDoList = [...todoList];
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
      const newToDoList = [...todoList];
      if (typeof inputType.modifyIndex === "number") {
        newToDoList[inputType.modifyIndex].content = value;
        setTodoList(newToDoList);
      }
      setInputType(INPUT_TYPES[0]);
    }

    // todo row 등록 > input 초기화
    setValue("");
  };
  return (
    <div>
      <h1>To Do List</h1>

      {/* form component */}
      <div>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="할 일을 입력해 주세요."
            onChange={(e) => setValue(e.currentTarget.value)}
            value={value}
          />
          <button type="submit">{inputType.label}</button>
        </form>
      </div>

      {/* list component */}
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
    </div>
  );
};

export default ToDoApp;
