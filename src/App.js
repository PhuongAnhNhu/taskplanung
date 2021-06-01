import { Button } from "react-bootstrap";
import Foot from "./component/Foot/Foot";
import Formular from "./component/Form/Formular";
import Header from "./component/Header/Header";
import TaskList from "./component/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Formular />
        <TaskList />
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
