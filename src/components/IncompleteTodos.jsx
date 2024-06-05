import React, { useState } from "react";
import { List, ListItem, Button, Box } from "@chakra-ui/react";
import EditTodo from "./EditTodo";

const IncompleteTodos = ({ todos, onClickDelete, onSaveEdit }) => {
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
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default IncompleteTodos;
