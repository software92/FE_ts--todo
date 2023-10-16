import { FormEvent, useState } from "react";

interface ISTATE_OPTIONS {
  id: number;
  type: string;
  label: string;
}
const STATE_OPTIONS: ISTATE_OPTIONS[] = [
  { id: 0, type: "ING", label: "작업중" },
  { id: 1, type: "DONE", label: "완료" },
];

const ToDoApp = () => {
  const [value, setValue] = useState<string>("");
  const [todoList, setTodoList] = useState<
    {
      id: number;
      content: string;
      state: ISTATE_OPTIONS;
      // 작성자, 날짜...
    }[]
  >([]);

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
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: value,
        state: STATE_OPTIONS[0],
      },
    ]);

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
          <button type="submit">추가</button>
        </form>
      </div>

      {/* list component */}
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <span>{todo.content}</span>
            <button>수정</button>
            <button onClick={() => changeStateToDo(index)}>{todo.state.label}</button>
            <button onClick={() => removeTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
