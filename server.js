const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

const DATA_FILE = "./data.json";

function getStudents() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE, "utf8");
  return data ? JSON.parse(data) : [];
}

function saveStudents(students) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(students, null, 2));
}

// Root route
app.get("/", (req, res) => {
  res.send("<h2>Welcome to Shru Project Backend 🚀</h2><p>Use /students to view or add students.</p>");
});

// GET all students
app.get("/students", (req, res) => {
  const students = getStudents();
  res.json(students);
});

// POST add student
app.post("/students", (req, res) => {
  const students = getStudents();
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    course: req.body.course,
  };
  students.push(newStudent);
  saveStudents(students);
  res.json({ message: "Student added successfully!", student: newStudent });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
