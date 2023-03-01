import React from 'react'

const TodoListItem = ({todo}) => {

  return (
    <div>
      {todo.id}&nbsp; {todo.title}
    </div>
  )
}

export default TodoListItem;
