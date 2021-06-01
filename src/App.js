import { useState } from "react";
import Foot from "./component/Foot/Foot";
import Formular from "./component/Form/Formular";
import Header from "./component/Header/Header";
import TaskList from "./component/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Formular onNewToDo={(task) =>setTasks([...tasks, task])} />
        <TaskList tasks={tasks}/>
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
