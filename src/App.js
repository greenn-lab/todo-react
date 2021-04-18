import {useState} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';

function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    completed: false,
    title: 'What are you doing?!'
  }])

  const add = title => {
    const newTodo = {
      id: Math.max.apply(null, todos.map(i => i.id).concat(0)) + 1,
      completed: false,
      title
    };

    title && setTodos([newTodo, ...todos])
  }

  const remove = id => {
    todos.splice(todos.findIndex(i => i.id === id), 1)
    setTodos([...todos])
  }

  const done = id => {
    const index = todos.findIndex(i => i.id === id);
    todos[index].completed = !todos[index].completed
    setTodos([...todos])
  }

  return (
    <div className="App">
      <TodoForm addTodo={add} />
      <TodoList todos={todos} toggle={done} remove={remove} />
    </div>
  );
}

export default App;
