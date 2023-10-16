import React from "react";

const ToDoApp = () => {
  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <h2>form</h2>
        <form>
          <input
            type="text"
            placeholder="할 일을 입력해 주세요."
          />
          <button type="submit">추가</button>
        </form>
      </div>
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
