import React, { useState } from "react";
import { List, ListItem, Button, Box, Select } from "@chakra-ui/react";
import EditTodo from "./EditTodo";

const IncompleteTodos = ({ todos, onClickDelete, onSaveEdit, onStatusChange }) => {
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleEditClick = (id) => {
    setEditingTodoId(id);
  };

  const handleSaveEdit = (id, newText, newDetails) => {
    onSaveEdit(id, newText, newDetails);
    setEditingTodoId(null);
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <List spacing={3} w="100%">
        {todos.map((todo) => (
          <ListItem key={todo.id} display="flex" justifyContent="center" alignItems="center">
            {editingTodoId === todo.id ? (
              <EditTodo todo={todo} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
            ) : (
              <Box display="flex" alignItems="center" justifyContent="center" w="100%">
                {todo.id}: {todo.text} - {todo.details}
                <Button onClick={() => handleEditClick(todo.id)} colorScheme="blue" ml={2}>
                  編集
                </Button>
                <Button onClick={() => onClickDelete(todo.id)} colorScheme="red" ml={2}>
                  削除
                </Button>
                <Select value={todo.status} onChange={(e) => onStatusChange(todo.id, e)} ml={2} w="150px">
                  <option value="notStarted">未着手</option>
                  <option value="inProgress">作業中</option>
                  <option value="done">完了</option>
                </Select>
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default IncompleteTodos;
