import React from 'react';

const UserNew = ({ user }) => {
  const { first_name, last_name, errors } = user;
  const defaultFirstName = first_name ? first_name : "";
  const defaultLastName = last_name ? last_name : "";
  return(
    <>
      <h1>Add User</h1>
      { errors && errors }
      <form action="/users" method="post">
        <input
        placeholder  = "First Name"
        type         = "text"
        defaultValue = {defaultFirstName}
        name         = "user[first_name]"
        required
        />
        <input
        placeholder  = "Last Name"
        type         = "text"
        defaultValue = {defaultLastName}
        name         = "user[last_name]"
        required
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default UserNew;