import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './todoSlice';

const AddTodo = () => {

  const [newTodo, setNewTodo] = useState("");

  const count = useSelector(state => state.todo.todos.length);

  const dispatch = useDispatch();

  const submitForm = () => {
    dispatch(addTodo({
        id: count + 1,
        title: newTodo,
        userId: 10,
        completed: false
      }));
    setNewTodo('');
  }

  return (
    <div>
      <input className='input' value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}></input>
      <button onClick={submitForm}>Add</button>
    </div>
  )
}

export default AddTodo;
