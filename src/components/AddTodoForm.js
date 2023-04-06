import React, { useState } from "react";

const AddTodoForm = ({addNewTodo}) => {

  const [addTodo, setAddTodo] = useState('');
  
  const handleTodo = (e) => {
    e.preventDefault();
    addNewTodo(addTodo);
    setAddTodo('');
  }

  return (
    <form className="mt-4" onSubmit={handleTodo}>
      <div className="card card-body">
        <div className="form-group">
          <label>Ajouter une Todo</label>
          <input onChange={(e) => setAddTodo(e.target.value)} value={addTodo} className="form-control mt-3" type="text" />
          <input className="btn btn-success mt-2" type="submit"/>
        </div>
      </div>
    </form>
  )
}

export default AddTodoForm;