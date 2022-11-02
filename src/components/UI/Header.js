import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <h1 className={classes.header}>{props.title}</h1>
    </div>
  );
};

export default Header;
