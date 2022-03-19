import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";

const TodoItem = ({ todo, setUpdate, setTodoName, setTodos, todos }) => {
  const [status, setStatus] = useState(todo.status);
  const [completed, setCompleted] = useState(todo.completed);
  const handleStatus = () => {
    setStatus(status === "pending" ? "in-progress" : "pending");
  };
  const handleComplete = () => {
    setCompleted(!completed);
  };
  const handleEdit = () => {
    setTodoName(todo.title);
    setUpdate(true);
  };
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div className="bg-gray-200 rounded-md p-4" key={todo.id}>
      <div className="flex items-center justify-between">
        <p className={completed ? "italic" : ""}>{todo.title}</p>
        <div className="flex items-center ">
          <button
            className="bg-red-500 text-white px-3 rounded-md text-xs mr-1"
            onClick={handleDelete}
          >
            delete
          </button>
          {!completed ? (
            <button
              className="bg-green-600 text-white px-3 rounded-md text-xs"
              onClick={handleEdit}
            >
              edit
            </button>
          ) : (
            ""
          )}
          <Checkbox
            size="small"
            checked={completed}
            onChange={handleComplete}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <small>
          Status:
          <span
            className={`text-white px-2 rounded-md ml-1 ${
              completed
                ? "bg-green-500"
                : status === "in-progress"
                ? "bg-blue-500"
                : "bg-yellow-500"
            }`}
          >
            {completed
              ? "Done"
              : status === "pending"
              ? "pending"
              : "in-progress"}
          </span>
        </small>
        <div className="flex items-center gap-1">
          {!completed ? (
            <div>
              <small>Change status to: </small>
              <button
                className={`text-white px-3 rounded-md text-xs ${
                  status === "pending" ? "bg-blue-500" : "bg-yellow-500"
                }`}
                onClick={handleStatus}
              >
                {status === "pending" ? "in-progress" : "pending"}
              </button>
            </div>
          ) : (
            <p className="font-medium text-xs">Good job :)</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
