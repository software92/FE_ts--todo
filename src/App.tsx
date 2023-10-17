import { ToDoApp, ToDoAppLogic } from "./components/ToDoList";

// form reset css
import "./assets/reset.css";

function App() {
  return (
    <div className="App">
      {/* <ToDoApp /> */}
      <ToDoAppLogic />
    </div>
  );
}

export default App;
