import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadTodo></LoadTodo>
    </div>
  );
}

function LoadTodo() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodo(data))
  }, [])

  return (
    <div className="todoStyle">
      {
        todos.map(todo => <Todo id={todo.id} title={todo.title} completed={todo.completed}></Todo>)
      }
    </div>
  );
}

function Todo(props) {
  console.log(props.completed)
  return (
    < div className="todo" >
      <h2>Id: {props.id}</h2>
      <h3>{props.title}</h3>
      <h5>Completed: {props.completed.toString()}</h5>
    </div >
  );
}

export default App;
