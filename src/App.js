import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>College Management System</h2>
      <AddStudent />
      <StudentList />
    </div>
  );
}

export default App;
