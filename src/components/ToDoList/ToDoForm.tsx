import { Styles } from "./styles";
import { IToDoForm } from "./types";

const ToDoForm = ({ handleSubmit, setValue, value, inputType }: IToDoForm) => {
  return (
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
  );
};

export default ToDoForm;
