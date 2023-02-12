import logo from "./logo.svg";
import "./App.css";
import Task from "./Components/stateful/Task/Task";
import { useState } from "react";

function App() {
  const [isToggle, setToggle] = useState(false);
  return (
    <div className="App">
      {!isToggle && <Task heading="samar" />}
      <button onClick={() => setToggle(true)}>click me</button>
    </div>
  );
}

export default App;
