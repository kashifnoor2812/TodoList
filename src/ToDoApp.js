import React, { useState } from "react";
import "./ToDolistStyle.css";
import ToDologic from "./ToDologic";
import ToDostrecture from "./ToDostrecture";

const ToDoApp = () => {
  const [showData, setShowData] = useState([]);

  const submit = (data) => {
    setShowData((prevdata) => {
      return [...prevdata, data];
    });
  };
  const removetask = (id) => {
    console.log(id);
    const deltask = showData.filter((elem) => elem.Task !== id);
    setShowData(deltask);
  };

  return (
    <div>
      <ToDologic submit={submit} />
      <div className="grid">
        {showData.map((mydata, index) => {
          return (
            <div key={index}>
              <ToDostrecture
                mydata={mydata}
                removetask={removetask}
                index={index}
              />
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default ToDoApp;
