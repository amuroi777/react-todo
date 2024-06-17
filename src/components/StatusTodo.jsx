import { useState, useEffect } from "react";
import IncompleteTodos from "./IncompleteTodos";
import { Box, Text } from "@chakra-ui/react";

const StatusTodo = ({ todos, setTodos, onClickDelete, onSaveEdit }) => {
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

  const onStatusChange = (id, e) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, status: e.target.value } : todo));
    setTodos(newTodos);
  };

  return (
    <div>
      <Box p={10}>
        <Text textAlign="center">
          <select id="status-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="notStarted">未着手</option>
            <option value="inProgress">作業中</option>
            <option value="done">完了</option>
          </select>
          <Box p={7}>
            <IncompleteTodos todos={filteredTodos} onClickDelete={onClickDelete} onSaveEdit={onSaveEdit} onStatusChange={onStatusChange} />
          </Box>
        </Text>
      </Box>
    </div>
  );
};

export default StatusTodo;
