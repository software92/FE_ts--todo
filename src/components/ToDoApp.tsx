import { FormEvent, useState } from "react";

const ToDoApp = () => {
  const [value, setValue] = useState<string>("");
  const [todoList, setTodoList] = useState<
    {
      id: number;
      content: string;
      state: "ING" | "DONE";
      // 작성자, 날짜...
    }[]
  >([]);

  const removeTodo = (index: number) => {
    // todo row 삭제
    setTodoList((prev) => {
      const newToDoList = [...prev];
      newToDoList.splice(index, 1);
      return newToDoList;
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // todo row 추가
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: value,
        state: "ING",
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
            <button>완료</button>
            <button onClick={() => removeTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
