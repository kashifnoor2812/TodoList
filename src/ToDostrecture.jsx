import React from "react";

const ToDostrecture = ({ mydata, removetask, index }) => {
  const { Day, Task } = mydata;
  return (
    <div className="taskDiv">
      <div className="tackcontent">
        <h1>{index}</h1>
        <p>
          <span style={{ fontWeight: "bold" }}>DAY:</span>
          <br />
          {Day}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>TASK: </span>
          <br />
          {Task}
        </p>
      </div>
      <div className="submitBtn taskBtn">
        <button onClick={() => removetask(Task)}>x</button>
      </div>
    </div>
  );
};

export default ToDostrecture;
