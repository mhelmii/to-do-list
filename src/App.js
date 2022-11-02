import React, { useState, Suspense } from "react";
import AddToDo from "./components/To-Dos/AddToDo";
// import ToDoList from "./components/To-Dos/ToDoList";
import Header from "./components/UI/Header";
import Card from "./components/UI/Card";
import classes from "./App.module.css";

const ToDoList = React.lazy(() => import("./components/To-Dos/ToDoList"));

const App = () => {
  const [list, setList] = useState([]);

  const addTodoHandler = (enteredInput) => {
    setList((preListState) => {
      return [
        ...preListState,
        { id: Math.random().toString(), content: enteredInput },
      ];
    });
  };

  const deleteItemHandler = (itemId) => {
    setList((list) => list.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <Card className={classes.container}>
        <Header title="To-Do List" />
        <AddToDo onAddTodo={addTodoHandler} />
      </Card>
      <Suspense>
        <ToDoList list={list} onDelete={deleteItemHandler} />
      </Suspense>
    </div>
  );
};

export default App;
