import { FormEvent, useState } from "react";

const ToDoApp = () => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("할 일 추가", value);
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
      <div>
        <ul>
          <li>
            <span>아침</span>
            <button>수정</button>
            <button>완료</button>
            <button>삭제</button>
          </li>
          <li>점심</li>
          <li>저녁</li>
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
