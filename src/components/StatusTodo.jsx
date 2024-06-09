import { useState, useEffect } from "react";

const StatusTodo = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState("notStarted");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case "notStarted":
          setFilteredTodos(todos.filter((todo) => todo.status === "notStarted"));
          break;
        case "inProgress":
          setFilteredTodos(todos.filter((todo) => todo.status === "inProgress"));
          break;
        case "done":
          setFilteredTodos(todos.filter((todo) => todo.status === "done"));
          break;
        default:
          setFilteredTodos(todos);
      }
    };

    filteringTodos();
  }, [filter, todos]);

  return (
    <div>
      <select id="status-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="notStarted">未着手</option>
        <option value="inProgress">作業中</option>
        <option value="done">完了</option>
      </select>
    </div>
  );
};

export default StatusTodo;
