import React from 'react';

const Enrollments = ({ course, teachers, tas, students, users }) => {
  
  const dislpayUser = (id) => {
    let fullName
    users.map((u) => {
      if (u.id === id) {
        fullName = u.first_name + " " + u.last_name
      }
    })
    return fullName
  }
  return(
    <>
      <h1>{course.name} 'Enrollments</h1>
      <a href={`/courses/${course.id}/enrollments/new`}>Add Enrollment</a>
      <br />
      <h2>Teachers</h2>
      { teachers.map((t) => (
        <div>
          <p>{dislpayUser(t.user_id)}</p>
          <a href={`/courses/${course.id}/enrollments/${t.id}`} data-method="delete">Delete</a>
        </div>
      ))}
      <h2>Ta's</h2>
      { tas.map((ta) => (
        <div>
          <p>{dislpayUser(ta.user_id)}</p>
          <a href={`/courses/${course.id}/enrollments/${ta.id}`} data-method="delete">Delete</a>
        </div>
      ))}
      <h2>Students</h2>
      { students.map ((s) => (
        <div>
          <p>{dislpayUser(s.user_id)}</p>
          <a href={`/courses/${course.id}/enrollments/${s.id}`} data-method="delete">Delete</a>
        </div>
      ))}
    </>
  );
}

export default Enrollments;