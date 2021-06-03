import { useState, useEffect } from "react";
import Foot from "./component/Foot/Foot";
import Formular from "./component/Form/Formular";
import Header from "./component/Header/Header";
import TaskList from "./component/TaskList/TaskList";
import "./App.scss";
import Barchart from "./component/Barchart/Barchart";
import Piechart from "./component/Piechart/Piechart";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <main className="py-3 formular">
        <Formular
          onNewToDo={(task) =>
            setTasks((currentTasks) => {
              return [...currentTasks, task];
            })
          }
        />
        <TaskList
          tasks={tasks}
          deleteTask={(index) => {
            const currTasks = [...tasks];
            currTasks.splice(index, 1);
            setTasks(currTasks);
          }}
        />
        <Barchart tasks={tasks}/>
        <Piechart tasks={tasks} />
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
