import React, { useState } from "react";

function AddStudent() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleAddStudent = async (e) => {
    e.preventDefault();

    if (!name || !course) return alert("Please fill both fields!");

    const res = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, course }),
    });

    const data = await res.json();
    alert(data.message); // Student added successfully!
    setName("");
    setCourse("");
  };

  return (
    <form onSubmit={handleAddStudent}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddStudent;
