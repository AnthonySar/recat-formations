import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
 const [todos, setTodos] = useState([
    {
      id: 1,
      todo: 'Acheter du fromage',
    },
    {
      id: 2,
      todo: 'Acheter du pain'
    }
  ])

  const [warning, setWarning] = useState(false);

  const myTodos = todos.map((todo) => {
    return (
      <li className="list-group-item" key={todo.id}>{todo.todo}</li>
    )
  });

  const addNewTodo = (newTodo) => {
    if(newTodo !== '') {
      warning && setWarning(false);

      setTodos([
        ...todos, 
        {
          id: uuidv4(), 
          todo: newTodo
        }
      ])      
    } else {
      setWarning(true);
    }
  }

  const warningMsg = warning && <div className="alert alert-danger">Veuillez indiquer une Todo</div>

  return ( 
    <div>
      <h2>HOOKS : Todo List</h2>
      <p>Il y à {todos.length} Todo à realiser</p>
      <p>L'id d'une todo est générée via uuidv4</p>

      <ul className="list-group">
        {myTodos} 
      </ul>

      {warningMsg}
      <AddTodoForm addNewTodo={addNewTodo} />
    </div>
  )
}

export default Todo;