import React, { useEffect, useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h3>Student List</h3>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} — {s.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
