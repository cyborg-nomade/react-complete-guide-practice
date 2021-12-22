import classes from "./User.module.css";

import React, { Component } from "react";

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }

  componentWillUnmount() {
    console.log("User will unmount");
  }
}

// const User = (props) => {};

export default User;
