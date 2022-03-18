import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import TodoList from "./TodoList";
const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ]);

  const addTodo = () => {
    setTodos((todos) => [
      ...todos,
      {
        id: 4,
        title: "Repear",
      },
    ]);
  };
  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
        <TextField
          id="outlined-basic"
          label="your new todo"
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ padding: 8 }}
          onClick={addTodo}
        >
          Add todo
        </Button>
      </div>
      <div>
        <p className="py-3"> Added todo's:</p>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Todo;
