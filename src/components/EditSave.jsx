import React, { useState } from "react";
import IncompleteTodos from "./IncompleteTodos";

const EditSave = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "タスク1", details: "詳細1" },
    { id: 2, text: "タスク2", details: "詳細2" },
  ]);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSaveEdit = (id, newText, newDetails) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText, details: newDetails } : todo)));
  };

  return (
    <div>
      <IncompleteTodos todos={todos} onClickDelete={handleDelete} onSaveEdit={handleSaveEdit} />
    </div>
  );
};

export default EditSave;
