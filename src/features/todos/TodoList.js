import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';
import AddTodo from './AddTodo';

const TodoList = () => {

  const todos = useSelector(state => state.todo.todos);


  return (
    <div className='section'>
        <AddTodo />
        {
            todos.map((todo, key) => <TodoListItem key={key} todo={todo} />)
        }
    </div>
  );
}

export default TodoList;
