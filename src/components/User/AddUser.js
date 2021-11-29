import React from "react";
import PropTypes from "prop-types";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" name="" id="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" name="" id="age" />
      <button type="submit">Add User</button>
    </form>
  );
};

AddUser.propTypes = {};

export default AddUser;
