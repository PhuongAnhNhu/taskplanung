import { useState } from "react";
import Foot from "./component/Foot/Foot";
import Formular from "./component/Form/Formular";
import Header from "./component/Header/Header";
import TaskList from "./component/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  // const deleleElement = (array, index) => {
  //   array.splice(index, 1);
  //   return array;
  // };

  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Formular onNewToDo={(task) => setTasks((currentTasks) => [...currentTasks, task])} />
        <TaskList
          tasks={tasks}
          deleteTask={(index) => {
            const currTasks = [...tasks]
            currTasks.splice(index, 1);
            setTasks(currTasks);
          }}
        />
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
