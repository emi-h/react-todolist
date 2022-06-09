import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //Add tasks
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    })
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1>Todo list</h1>
      {todos.length > 0 ? <ul><TodoList todos={todos} toggleTodo={toggleTodo} /></ul> : null}
      <input type="text" placeholder='Input todo!' ref={todoNameRef} />
      <button className='addbtn' onClick={handleAddTodo}>Add Task</button>
      <button onClick={handleClear} className='deletebtn'>Delete compleated tasks</button>
      <div className='note'>Remaining tasks:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
