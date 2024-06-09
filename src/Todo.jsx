import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import IncompleteTodos from "./components/IncompleteTodos";
import StatusTodo from "./components/StatusTodo";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [details, setDetails] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [serialId, setSerialId] = useState(1);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onChangeDetails = (event) => setDetails(event.target.value);

  const onClickAdd = () => {
    if (todoText === "" || details === "") return;
    const newTodo = { id: serialId, text: todoText, details: details, status: "notStarted" };
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

  const onStatusChange = (id, e) => {
    const newStatus = e.target.value;
    setIncompleteTodos(incompleteTodos.map((todo) => (todo.id === id ? { ...todo, status: newStatus } : todo)));
  };

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} details={details} onChangeDetails={onChangeDetails} />
      <StatusTodo todos={incompleteTodos} setTodos={setIncompleteTodos} />
      <IncompleteTodos todos={incompleteTodos} onClickDelete={onClickDelete} onSaveEdit={onSaveEdit} onStatusChange={onStatusChange} />
    </>
  );
};

export default Todo;
