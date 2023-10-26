import { Styles } from "./styles";
import { IToDoAppUI } from "./types";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

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
