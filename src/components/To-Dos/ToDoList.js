import React from "react";
import Card from "../UI/Card";

import classes from "./ToDolist.module.css";

const ToDoList = (props) => {
  if (props.list.length === 0) {
    return (
      <Card className={classes.list}>
        <h2>Nothing To Do Yet !</h2>
      </Card>
    );
  }

  return (
    <div className={classes.list}>
      <ul>
        {props.list.map((item) => (
          <li key={item.id} onClick={() => props.onDelete(item.id)}>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
