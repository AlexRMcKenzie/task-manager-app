// Components
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
// Hooks
import { useState, useEffect } from 'react';
// Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <>
      <div className="container">
        {/*App Header */}
        <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
        {/* Revealing the Add Task Form */}
        {showAddTask && <AddTask onSave={addTask} />}

        {/* Displaying Tasks */}
        {
          tasks.length > 0 ?
          (<Tasks tasks={tasks} />) :
          ('No Task Found!')
        }
      </div>
    </>
  )
}

export default App;
