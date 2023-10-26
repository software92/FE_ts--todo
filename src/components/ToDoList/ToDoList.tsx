import { Styles } from "./styles";
import { IToDoList } from "./types";

const ToDoList = ({ todoList, changeInputType, changeStateToDo, removeTodo }: IToDoList) => {
  return (
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
  );
};

export default ToDoList;
