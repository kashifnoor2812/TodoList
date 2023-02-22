import React from "react";
import ReactDOM from "react-dom/client";
import "./ToDolistStyle.css";
import ToDoApp from "./ToDoApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>
);
