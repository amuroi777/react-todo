import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [serialId, setSerialId] = useState(1);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = { id: serialId, text: todoText };
    const newTodos = [...incompleteTodos, newTodo];

    setIncompleteTodos(newTodos);
    setTodoText("");
    setSerialId(serialId + 1);
  };

  const onClickDelete = (id) => {
    const newTodos = incompleteTodos.filter((todo) => todo.id !== id);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <IncompleteTodos todos={incompleteTodos} onClickDelete={onClickDelete} />
    </>
  );
};

export default Todo;
