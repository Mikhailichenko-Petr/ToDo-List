import './App.css';
import { useEffect, useState } from "react"
import { Todo } from './Todo';
import { TodoList } from './TodoList';

function App() {
  const [task, setTask]=useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random(),
        value: userInput
      }
      setTask([...task, newItem])
    }
  }

  const removeTask = (id) => {
    setTask([...task.filter((task) => task.id !== id)])
  }

  return (
    <div className="App">
      <header>
        <h1>Список задач: {task.length}</h1>
      </header>
      <Todo addTask={addTask} />
      {task.map((todo) => {
        return (
          <TodoList
            task={todo}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}
export default App;
