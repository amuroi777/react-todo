import React from "react";

export const IncompleteTodos = ({ todos, onClickDelete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id}:{todo.text}
            <button onClick={() => onClickDelete(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
