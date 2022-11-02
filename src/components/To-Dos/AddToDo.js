import React, { useState } from "react";

import classes from "./AddToDo.module.css";

import Button from "../UI/Button";

const AddToDo = (props) => {
  const [input, setInput] = useState("");

  const todoHandler = (event) => {
    setInput(event.target.value);
  };

  const addToDo = (event) => {
    event.preventDefault();
    if (input.length === 0) {
      return;
    }
    props.onAddTodo(input);
    setInput("");
  };

  return (
    <div className={classes["add-card"]}>
      <form className={classes.form} onSubmit={addToDo}>
        <label htmlFor="new-todo">New To-Do</label>
        <input id="new-todo" type="text" onChange={todoHandler} value={input} />

        <Button type="submit" className={classes.button}>
          Add To List
        </Button>
      </form>
    </div>
  );
};

export default AddToDo;
