import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [usertype, setUserType] = useState("");
  const [alltask, setAllTask] = useState([]);

  const update = () => {
    if (usertype.trim() === "") {
      alert("You have not entered any task. Please add task");
      return;
    }

    setAllTask((prev) => [...prev, usertype]);
    setUserType("");
  };

  const deletetask = (index) => {
    setAllTask((prev) =>
      prev.filter((_, ind) => ind !== index)
    );
  };

  return (
    <div>
      <h2>To-Do App</h2>

      <input
        type="text"
        value={usertype}
        placeholder="Enter your task"
        onChange={(e) => setUserType(e.target.value)}
      />

      <button onClick={update}>Add Task</button>

      <ul>
        {alltask.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deletetask(index)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;