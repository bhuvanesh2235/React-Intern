import React from 'react';

function TodoItem({ index, todo, deleteTodo }) {
  const handleClick = () => {
    deleteTodo(index);
  };

  return (
    <li>
      <span>{todo}</span>
      <button className="delete-btn" onClick={handleClick}>Delete</button>
    </li>
  );
}

export default TodoItem;
