import React from "react";
import "./todo.css";

const Todo = ({ item, chloe }) => {
  return (
    <div className="h-10 todo-div flex justify-between items-center">
      <div className="name">
        <h1 className="text-lg">{item}</h1>
      </div>
      <div>
        <button className="bg-blue-500 text-white p-2 rounded-md  ">
          {chloe ? "Completed" : "Lazy"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
