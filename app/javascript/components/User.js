import React from 'react';

const User = ({ user, courses, fullName }) => {
  const { id } = user;
  return(
    <>
      {/* <div className="user-card"> */}
        <h1>{fullName}</h1>
        <hr />
        <h6>Courses</h6>
        <h2>{ courses.length <= 0 ? "No Courses" : ""}</h2>
        <ul>
           { courses.map((course) => (
              <li>
                <a href={`/courses/${course.id}`}>{course.name}</a>
              </li>
            ))}
        </ul>
        <a href={`/users/${id}`} data-method="delete"> User delete</a>
      {/* </div> */}
    </>
  );
}

export default User;