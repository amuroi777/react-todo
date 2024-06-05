import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import IncompleteTodos from "./components/IncompleteTodos";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [details, setDetails] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [serialId, setSerialId] = useState(1);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onChangeDetails = (event) => setDetails(event.target.value);

  const onClickAdd = () => {
    if (todoText === "" || details === "") return;
    const newTodo = { id: serialId, text: todoText, details: details };
    const newTodos = [...incompleteTodos, newTodo];

    setIncompleteTodos(newTodos);
    setTodoText("");
    setDetails("");
    setSerialId(serialId + 1);
  };

  const onClickDelete = (id) => {
    const newTodos = incompleteTodos.filter((todo) => todo.id !== id);
    setIncompleteTodos(newTodos);
  };

  const onSaveEdit = (id, newText, newDetails) => {
    setIncompleteTodos(incompleteTodos.map((todo) => (todo.id === id ? { ...todo, text: newText, details: newDetails } : todo)));
  };

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} details={details} onChangeDetails={onChangeDetails} />
      <IncompleteTodos todos={incompleteTodos} onClickDelete={onClickDelete} onSaveEdit={onSaveEdit} />
    </>
  );
};

export default Todo;
